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
import "./VideogameForm.css";

const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    if (userToken) {
      return userToken
    } else {
      return undefined
    }
  };

class VideogameForm extends Component {
  state = {};

  componentDidMount() {
    document.body.style.backgroundColor = "#FFF97D";
    (function () {
      bsCustomFileInput.init();
    })();
  }

  render() {
    const formData = new FormData();
    let file;

    const schema = Yup.object({
      title: Yup.string().required("Write a title for the videogame"),
      installment: Yup.number().min(0).required(),
      status: Yup.string().oneOf(
          ["Publishing", "Finished", "Cancelled"],
          "Select the status"
      )
      .required("Status of the videogame"),
      personalStatus: Yup.string().oneOf(
          ["Playing", "Completed", "Plan to Play", "Re-playing", "On Hold", "Dropped"],
          "Select the personal status"
      )
      .required("Personal status of the videogame"),
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
      formData.append("title", item.title);
      formData.append("installment", item.installment);
      formData.append("status", item.status);
      formData.append("personal_status", item.personalStatus);
      formData.append("franchise", item.franchise);
      formData.append("next_videogame", item.nextVideogame);
      formData.append("platform", item.platform);
      formData.append("additional_comments", item.additionalComments);
      if (file) {
        formData.append("image", file, item.image);
      }

      axios
        .post(
          "https://lists-backend-web.herokuapp.com/api/videogame/",formData, {
              headers: {
                "Authorization": "Token " + getToken()
              }
            }
        )
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
      <NavBarGroup />
      <Card className="custom-card">
        <Card.Header className="card-header-videogame">Create new videogame</Card.Header>
        <Card.Body className="card-body-videogame">
          <Formik
            validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{ title: "", installment: 0, status: "", personalStatus: "", franchise: "", nextVideogame: "", platform: "", additionalComments: "", image: "" }}
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

export default VideogameForm;