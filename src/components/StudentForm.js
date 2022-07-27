//Reusable Studnet form
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudnetForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Requried"),
        // ******************************************
        // ????????? Needs to understand
        // ******************************************
        email: Yup.string().email("You have enter an invalid email address").required("Required"),
        rollno: Yup.number().positive("Invalid roll number").integer("Invalid roll number").required("Required"),
    });
    console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    {/* Display Student Name */}
                    <FormGroup>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    {/* Display Email */}
                    <FormGroup>
                        <Field name="email" type="text" className="d-block invalid-feedback" component="span" />
                        <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    {/* Display Roll number */}
                    <FormGroup>
                        <Field name="rollno" type="number" className="d-block invalid-feedback" component="span" />
                        <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default StudnetForm;