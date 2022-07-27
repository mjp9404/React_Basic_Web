// Responsible for create new student 

import React, {useState, useEffect} from "react";
import axios from 'axios';
import StudnetForm from "./StudentForm";

const CreateStudent = () => {
    const [formValues, setFormValues] = useState({
        name:'',
        email:'',
        rollno:''
    })

    const onSubmit = studentObject =>{
        axios.post('http://localhost:4000/students/create-student', studentObject)
        .then(res =>{
            if(res.status === 200)
            alert('Student successfully created')
            else
            Promise.reject()
        }).catch(err => alert('Something went wrong'))
    }

    return(
        <StudnetForm initialValues = {formValues} onSubmit = {onSubmit} 
        enableReinitialize>
            Create Student
        </StudnetForm>
    )
}

export default CreateStudent;