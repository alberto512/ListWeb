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
import "./BookForm.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
  };

class BookForm extends Component {
  state = {};

  componentDidMount() {
    document.body.style.backgroundColor = "#784500";
    (function () {
      bsCustomFileInput.init();
    })();
  }

  render() {
    const formData = new FormData();
    let file;

    const schema = Yup.object({
      title: Yup.string().required("Write a title for the book"),
      volume: Yup.number().min(0).required(),
      status: Yup.string().oneOf(
          ["Publishing", "Finished", "Cancelled"],
          "Select the status"
      )
      .required("Status of the book"),
      personalStatus: Yup.string().oneOf(
          ["Reading", "Completed", "Plan to Read", "Re-reading", "On Hold", "Dropped"],
          "Select the personal status"
      )
      .required("Personal status of the book"),
      saga: Yup.string().optional("Saga of the book"),
      nextBook: Yup.string().optional("Next book of the saga"),
      additionalComments: Yup.string().optional("Write some additional comments"),
      image: Yup.string().optional(),
  });

    const customChange = (event) => {
      file = event.target.files[0];
    };

    const handleSubmit = (item) => {
      formData.append("title", item.title);
      formData.append("volume", item.volume);
      formData.append("status", item.status);
      formData.append("personal_status", item.personalStatus);
      formData.append("saga", item.saga);
      formData.append("next_book", item.nextBook);
      formData.append("additional_comments", item.additionalComments);
      if (file) {
        formData.append("image", file, item.image);
      }

      axios
        .post(
          "https://lists-backend-web.herokuapp.com/api/book/",formData, {
              headers: {
                "Authorization": "Token " + getToken()
              }
            }
        )
        .then(() => {
          Swal.fire({
            title: "Good job!",
            text: "Your book has been submited",
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
        <Card.Header className="card-header-book">Create new book</Card.Header>
        <Card.Body className="card-body-book">
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ title: "", volume: 0, status: "", personalStatus: "", saga: "", nextBook: "", additionalComments: "", image: "" }}
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
                      placeholder="Book's title"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="form-grid-volume">
                    <Form.Label className="label">Volume</Form.Label>
                    <Form.Control
                      name="volume"
                      value={values.volume}
                      onChange={handleChange}
                      isInvalid={!!errors.volume}
                      type="number"
                      placeholder="0"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.volume}
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
                      {errors.saga}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="form-grid-nextBook">
                  <Form.Label className="label">Next book</Form.Label>
                  <Form.Control
                    name="nextBook"
                    value={values.nextBook}
                    onChange={handleChange}
                    isInvalid={!!errors.nextBook}
                    placeholder="Next book"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nextBook}
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
                    label="Upload your cover image"
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

export default BookForm;