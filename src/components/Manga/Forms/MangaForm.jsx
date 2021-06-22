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
import NavBarGroup from "../../NavBar/NavBarGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MangaForm.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
  };

class MangaForm extends Component {
  state = {};

  componentDidMount() {
    document.body.style.backgroundColor = "#2BDDB9";
    (function () {
      bsCustomFileInput.init();
    })();
  }

  render() {
    const formData = new FormData();
    let file;

    const schema = Yup.object({
      title: Yup.string().required("Write a title for the manga"),
      type: Yup.string().oneOf(
          ["Parent story", "Side story", "Spin-off", "One shot"],
          "Select one type"
      )
      .required("Select one type"),
      chapters: Yup.number().min(0).required(),
      status: Yup.string().oneOf(
          ["Publishing", "Finished", "Cancelled"],
          "Select the status"
      )
      .required("Status of the manga"),
      personalStatus: Yup.string().oneOf(
          ["Reading", "Completed", "Plan to Read", "Re-reading", "On Hold", "Dropped"],
          "Select the personal status"
      )
      .required("Personal status of the manga"),
      saga: Yup.string().optional("Saga of the manga"),
      additionalComments: Yup.string().optional("Write some additional comments"),
      image: Yup.string().optional(),
  });

    const customChange = (event) => {
      file = event.target.files[0];
    };

    const handleSubmit = (item) => {
      formData.append("title", item.title);
      formData.append("type", item.type);
      formData.append("chapters", item.chapters);
      formData.append("status", item.status);
      formData.append("personal_status", item.personalStatus);
      formData.append("saga", item.saga);
      formData.append("additional_comments", item.additionalComments);
      if (file) {
        formData.append("image", file, item.image);
      }

      axios
        .post(
          "https://lists-backend-web.herokuapp.com/api/manga/",formData, {
              headers: {
                "Authorization": "Token " + getToken()
              }
            }
        )
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Your manga has been submited",
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
      <NavBarGroup />
      <Card className="custom-card">
        <Card.Header className="card-header-manga">Create new manga</Card.Header>
        <Card.Body className="card-body-manga">
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ title: "", type: "", chapters: 0, status: "", personalStatus: "", saga: "", additionalComments: "", image: "" }}
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
                      placeholder="Manga's title"
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
                      <option>Parent story</option>
                      <option>Side story</option>
                      <option>Spin-off</option>
                      <option>One shot</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.type}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="form-grid-chapters">
                    <Form.Label className="label">Chapters</Form.Label>
                    <Form.Control
                      name="chapters"
                      value={values.chapters}
                      onChange={handleChange}
                      isInvalid={!!errors.chapters}
                      type="number"
                      placeholder="0"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.chapters}
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
                      <option>Reading</option>
                      <option>Completed</option>
                      <option>Plan to Read</option>
                      <option>Re-reading</option>
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
                      {errors.platform}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

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
                    label="Upload your cover image"
                    accept=".jpg,.png"
                    custom
                  />
                </Form.Group>

                <Button
                  variant="dark"
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

export default MangaForm;