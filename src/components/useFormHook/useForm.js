import React, { useState, useEffect } from 'react';

const useForm = (callback, initialState = {}, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback(values);
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;
