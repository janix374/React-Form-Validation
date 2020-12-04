import React, { useState, useEffect } from 'react';

function useForm(callback, validate) {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            // [e.target.name]: e.targe.value
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },[errors]);

    return { handleChange, handleSubmit, values, errors }
}

export default useForm
