import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import bsCustomFileInput from "bs-custom-file-input";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
  };

class VideogameFormEdit extends Component {
    state = {
        videogame: {
            title: "",
            installment: 0,
            status: "",
            personal_status: "",
            franchise: "",
            next_videogame: "",
            platform: "",
            additional_comments: "",
            image: ""
        },
    };

    async getData() {
        let data = await axios
          .get(
            "https://lists-backend-web.herokuapp.com/api/videogame/" +
              this.props.videogame.params.id, {
                headers: {
                    "Authorization": "Token " + getToken()
                }
              }
          )
          .then(function (response) {
            return response.data;
            });

        if (!data.franchise) {
            data.franchise = ""
        }

        if (!data.next_videogame) {
            data.next_videogame = ""
        }

        if (!data.next_platform) {
            data.next_platform = ""
        }
    
        if (!data.additional_comments) {
            data.additional_comments = ""
        }
        this.setState({ videogame: data });
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#FFF97D";
        (function () {
        bsCustomFileInput.init();
        })();
        this.getData();
    }

    render() {
        const formData = new FormData();
        let file;

        const schema = Yup.object({
            title: Yup.string().optional("Write a title for the videogame"),
            installment: Yup.number().min(0).optional(),
            status: Yup.string().oneOf(
                ["Publishing", "Finished", "Cancelled"],
                "Select the status"
            )
            .optional("Status of the videogame"),
            personalStatus: Yup.string().oneOf(
                ["Playing", "Completed", "Plan to Play", "Re-playing", "On Hold", "Dropped"],
                "Select the personal status"
            )
            .optional("Personal status of the videogame"),
            franchise: Yup.string().optional("Franchise of the videogame"),
            nextVideogame: Yup.string().optional("Next videogame of the saga"),
            platform: Yup.string().optional("Platform where you can find the videogame"),
            additionalComments: Yup.string().optional("Write some additional comments"),
            image: Yup.string().optional(),
        });

        const customChange = (event) => {
            file = event.target.files[0];
        };

        const handleSubmit = (item) => {
            if (item.title !== this.state.videogame.title) {
                formData.append("title", item.title);
            }
            if (item.installment !== this.state.videogame.installment) {
                formData.append("installment", item.installment);
            }
            if (item.status !== this.state.videogame.status) {
                formData.append("status", item.status);
            }
            if (item.personalStatus !== this.state.videogame.personal_status) {
                formData.append("personal_status", item.personalStatus);
            }
            if (item.franchise !== this.state.videogame.franchise) {
                formData.append("franchise", item.franchise);
            }
            if (item.nextVideogame !== this.state.videogame.next_videogame) {
                formData.append("next_videogame", item.nextVideogame);
            }
            if (item.platform !== this.state.videogame.platform) {
                formData.append("platform", item.platform);
            }
            if (item.additionalComments !== this.state.videogame.additional_comments) {
                formData.append("additional_comments", item.additionalComments);
            }
            if (file) {
                formData.append("image", file, item.image);
            }

            axios.put(
                "https://lists-backend-web.herokuapp.com/api/videogame/" + this.state.videogame.id + "/", formData, {
                    headers: {
                        "Authorization": "Token " + getToken()
                    }
                })
                .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your videogame has been submited",
                    icon: "success",
                    willClose: () => {
                    window.location.reload(false);
                    },
                });
                })
                .catch((error) => {
                Swal.fire({
                    title: "Oops...",
                    text: "Something went wrong",
                    icon: "error",
                    willClose: () => {
                    window.location.reload(false);
                    },
                });
            });
        };

        return (
        <React.Fragment>
        <Card className="custom-card">
            <Card.Header className="card-header-videogame">Create new videogame</Card.Header>
            <Card.Body className="card-body-videogame">
            <Formik
                enableReinitialize
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{ 
                    title: this.state.videogame.title,
                    installment: this.state.videogame.installment,
                    status: this.state.videogame.status,
                    personalStatus: this.state.videogame.personal_status,
                    franchise: this.state.videogame.franchise,
                    nextVideogame: this.state.videogame.next_videogame,
                    platform: this.state.videogame.platform,
                    additionalComments: this.state.videogame.additional_comments,
                    image: ""
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="form-grid-title">
                            <Form.Label className="label">Title</Form.Label>
                            <Form.Control
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isInvalid={!!errors.title}
                                placeholder="Videogame's title"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="form-grid-installment">
                            <Form.Label className="label">Installment</Form.Label>
                            <Form.Control
                                name="installment"
                                value={values.installment}
                                onChange={handleChange}
                                isInvalid={!!errors.installment}
                                type="number"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.installment}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="form-grid-status">
                            <Form.Label className="label">Status</Form.Label>
                            <Form.Control
                                name="status"
                                value={values.status}
                                onChange={handleChange}
                                isInvalid={!!errors.status}
                                as="select"
                            >
                                <option>Select status</option>
                                <option>Publishing</option>
                                <option>Finished</option>
                                <option>Cancelled</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.status}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="form-grid-personalStatus">
                            <Form.Label className="label">Personal status</Form.Label>
                            <Form.Control
                                name="personalStatus"
                                value={values.personalStatus}
                                onChange={handleChange}
                                isInvalid={!!errors.personalStatus}
                                as="select"
                            >
                                <option>Select personal status</option>
                                <option>Playing</option>
                                <option>Completed</option>
                                <option>Plan to Play</option>
                                <option>Re-playing</option>
                                <option>On Hold</option>
                                <option>Dropped</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.personalStatus}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="form-grid-franchise">
                            <Form.Label className="label">Franchise</Form.Label>
                            <Form.Control
                                name="franchise"
                                value={values.franchise}
                                onChange={handleChange}
                                isInvalid={!!errors.franchise}
                                placeholder="Franchise"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.franchise}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="form-grid-nextVideogame">
                        <Form.Label className="label">Next videogame</Form.Label>
                        <Form.Control
                            name="nextVideogame"
                            value={values.nextVideogame}
                            onChange={handleChange}
                            isInvalid={!!errors.nextVideogame}
                            placeholder="Next videogame"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nextVideogame}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="form-grid-platform">
                        <Form.Label className="label">Platform</Form.Label>
                        <Form.Control
                            name="platform"
                            value={values.platform}
                            onChange={handleChange}
                            isInvalid={!!errors.platform}
                            placeholder="Platform"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.platform}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="form-grid-additionalComments">
                        <Form.Label className="label">Additional comments</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            name="additionalComments"
                            value={values.additionalComments}
                            onChange={handleChange}
                            isInvalid={!!errors.additionalComments}
                            placeholder="Write any additional comments"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.additionalComments}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="form-grid-image">
                    <Form.File
                        id="image"
                        name="image"
                        value={values.image}
                        onChange={(event) => {
                        handleChange(event);
                        customChange(event);
                        }}
                        isInvalid={!!errors.image}
                        label="Upload your cover image if you want to change it"
                        accept=".jpg,.png"
                        custom
                    />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
                )}
            </Formik>
            </Card.Body>
        </Card>
        </React.Fragment>
        );
    }
}

export default VideogameFormEdit;