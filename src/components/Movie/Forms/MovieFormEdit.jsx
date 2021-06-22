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

class MovieFormEdit extends Component {
    state = {
        movie: {
            title: "",
            installment: 0,
            status: "",
            personal_status: "",
            saga: "",
            next_movie: "",
            platform: "",
            additional_comments: "",
            image: ""
        },
    };

    async getData() {
        let data = await axios
          .get(
            "https://lists-backend-web.herokuapp.com/api/movie/" +
              this.props.movie.params.id, {
                headers: {
                    "Authorization": "Token " + getToken()
                }
              }
          )
          .then(function (response) {
            return response.data;
            });

        if (!data.saga) {
            data.saga = ""
        }

        if (!data.next_movie) {
            data.next_movie = ""
        }

        if (!data.next_platform) {
            data.next_platform = ""
        }
    
        if (!data.additional_comments) {
            data.additional_comments = ""
        }
        this.setState({ movie: data });
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#008E18";
        (function () {
        bsCustomFileInput.init();
        })();
        this.getData();
    }

    render() {
        const formData = new FormData();
        let file;

        const schema = Yup.object({
            title: Yup.string().optional("Write a title for the movie"),
            installment: Yup.number().min(0).optional(),
            status: Yup.string().oneOf(
                ["Realeasing", "Finished", "Cancelled"],
                "Select the status"
            )
            .optional("Status of the movie"),
            personalStatus: Yup.string().oneOf(
                ["Watching", "Completed", "Plan to Watch", "Re-watching", "On Hold", "Dropped"],
                "Select the personal status"
            )
            .optional("Personal status of the movie"),
            saga: Yup.string().optional("Saga of the movie"),
            nextMovie: Yup.string().optional("Next movie of the saga"),
            platform: Yup.string().optional("Platform where you can find the movie"),
            additionalComments: Yup.string().optional("Write some additional comments"),
            image: Yup.string().optional(),
        });

        const customChange = (event) => {
            file = event.target.files[0];
        };

        const handleSubmit = (item) => {
            if (item.title !== this.state.movie.title) {
                formData.append("title", item.title);
            }
            if (item.installment !== this.state.movie.installment) {
                formData.append("installment", item.installment);
            }
            if (item.status !== this.state.movie.status) {
                formData.append("status", item.status);
            }
            if (item.personalStatus !== this.state.movie.personal_status) {
                formData.append("personal_status", item.personalStatus);
            }
            if (item.saga !== this.state.movie.saga) {
                formData.append("saga", item.saga);
            }
            if (item.nextMovie !== this.state.movie.next_movie) {
                formData.append("next_movie", item.nextMovie);
            }
            if (item.platform !== this.state.movie.platform) {
                formData.append("platform", item.platform);
            }
            if (item.additionalComments !== this.state.movie.additional_comments) {
                formData.append("additional_comments", item.additionalComments);
            }
            if (file) {
                formData.append("image", file, item.image);
            }

            axios.put(
                "https://lists-backend-web.herokuapp.com/api/movie/" + this.state.movie.id + "/", formData, {
                    headers: {
                        "Authorization": "Token " + getToken()
                    }
                })
                .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your movie has been submited",
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
            <Card.Header className="card-header-movie">Create new movie</Card.Header>
            <Card.Body className="card-body-movie">
            <Formik
                enableReinitialize
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{ 
                    title: this.state.movie.title,
                    installment: this.state.movie.installment,
                    status: this.state.movie.status,
                    personalStatus: this.state.movie.personal_status,
                    saga: this.state.movie.saga,
                    nextMovie: this.state.movie.next_movie,
                    platform: this.state.movie.platform,
                    additionalComments: this.state.movie.additional_comments,
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
                                placeholder="Movie's title"
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
                                <option>Realeasing</option>
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
                                <option>Watching</option>
                                <option>Completed</option>
                                <option>Plan to Watch</option>
                                <option>Re-watching</option>
                                <option>On Hold</option>
                                <option>Dropped</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.personalStatus}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="form-grid-saga">
                            <Form.Label className="label">Saga</Form.Label>
                            <Form.Control
                                name="saga"
                                value={values.saga}
                                onChange={handleChange}
                                isInvalid={!!errors.saga}
                                placeholder="Saga"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.saga}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="form-grid-nextMovie">
                        <Form.Label className="label">Next movie</Form.Label>
                        <Form.Control
                            name="nextMovie"
                            value={values.nextMovie}
                            onChange={handleChange}
                            isInvalid={!!errors.nextMovie}
                            placeholder="Next movie"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nextMovie}
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
                        variant="light"
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

export default MovieFormEdit;