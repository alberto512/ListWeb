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

class SeriesFormEdit extends Component {
    state = {
        series: {
            title: "",
            type: "",
            seasons: 0,
            status: "",
            personal_status: "",
            platform: "",
            next_season: "",
            additional_comments: "",
            image: ""
        },
    };

    async getData() {
        let data = await axios
          .get(
            "https://lists-backend-web.herokuapp.com/api/series/" +
              this.props.series.params.id, {
                headers: {
                    "Authorization": "Token " + getToken()
                }
              }
          )
          .then(function (response) {
            return response.data;
            });

        if (!data.platform) {
            data.platform = ""
        }

        if (!data.next_season) {
            data.next_season = ""
        }
    
        if (!data.additional_comments) {
            data.additional_comments = ""
        }
        this.setState({ series: data });
    }

    componentDidMount() {
        document.body.style.backgroundColor = "#D90C0C";
        (function () {
        bsCustomFileInput.init();
        })();
        this.getData();
    }

    render() {
        const formData = new FormData();
        let file;

        const schema = Yup.object({
            title: Yup.string().optional("Write a title for the series"),
            type: Yup.string().oneOf(
                ["Series", "Reality show"],
                "Select one type"
            )
            .optional("Select one type"),
            seasons: Yup.number().min(0).optional(),
            status: Yup.string().oneOf(
                ["Airing", "Finished", "Pending", "Cancelled"],
                "Select the status"
            )
            .optional("Status of the series"),
            personalStatus: Yup.string().oneOf(
                ["Watching", "Completed", "Plan to Watch", "Re-watching", "On Hold", "Dropped"],
                "Select the personal status"
            )
            .optional("Personal status of the series"),
            platform: Yup.string().optional("Platform where you can find the series"),
            nextSeason: Yup.string().optional("Next season of the series"),
            additionalComments: Yup.string().optional("Write some additional comments"),
            image: Yup.string().optional(),
        });

        const customChange = (event) => {
            file = event.target.files[0];
        };

        const handleSubmit = (item) => {
            if (item.title !== this.state.series.title) {
                formData.append("title", item.title);
            }
            if (item.type !== this.state.series.type) {
                formData.append("type", item.type);
            }
            if (item.seasons !== this.state.series.seasons) {
                formData.append("seasons", item.seasons);
            }
            if (item.status !== this.state.series.status) {
                formData.append("status", item.status);
            }
            if (item.personalStatus !== this.state.series.personal_status) {
                formData.append("personal_status", item.personalStatus);
            }
            if (item.platform !== this.state.series.platform) {
                formData.append("platform", item.platform);
            }
            if (item.nextSeason !== this.state.series.next_season) {
                formData.append("next_season", item.nextSeason);
            }
            if (item.additionalComments !== this.state.series.additional_comments) {
                formData.append("additional_comments", item.additionalComments);
            }
            if (file) {
                formData.append("image", file, item.image);
            }

            axios.put(
                "https://lists-backend-web.herokuapp.com/api/series/" + this.state.series.id + "/", formData, {
                    headers: {
                        "Authorization": "Token " + getToken()
                    }
                })
                .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your series has been submited",
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
            <Card.Header className="card-header-series">Create new series</Card.Header>
            <Card.Body className="card-body-series">
            <Formik
                enableReinitialize
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{ 
                    title: this.state.series.title,
                    type: this.state.series.type,
                    seasons: this.state.series.seasons,
                    status: this.state.series.status,
                    personalStatus: this.state.series.personal_status,
                    platform: this.state.series.platform,
                    nextSeason: this.state.series.next_season,
                    additionalComments: this.state.series.additional_comments,
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
                                placeholder="Series's title"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="form-grid-type">
                            <Form.Label className="label">Type</Form.Label>
                            <Form.Control
                                name="type"
                                value={values.type}
                                onChange={handleChange}
                                isInvalid={!!errors.type}
                                as="select"
                            >
                                <option>Select type</option>
                                <option>Series</option>
                                <option>Reality show</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.type}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="form-grid-seasons">
                            <Form.Label className="label">Seasons</Form.Label>
                            <Form.Control
                                name="seasons"
                                value={values.seasons}
                                onChange={handleChange}
                                isInvalid={!!errors.seasons}
                                type="number"
                                placeholder="0"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.seasons}
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
                                <option>Airing</option>
                                <option>Finished</option>
                                <option>Pending</option>
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
                    </Form.Row>

                    <Form.Group as={Col} controlId="form-grid-nextSeason">
                        <Form.Label className="label">Next season</Form.Label>
                        <Form.Control
                            name="nextSeason"
                            value={values.nextSeason}
                            onChange={handleChange}
                            isInvalid={!!errors.nextSeason}
                            placeholder="Next season"
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.nextSeason}
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

export default SeriesFormEdit;