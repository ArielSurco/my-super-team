import React from 'react';
import { useFormik } from 'formik';
import { useUserState } from '../../hooks/useUserState';
import './LoginForm.css';

const validate = values => {
    const errors = {};

    if (!values.email)
        errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = 'Invalid email address';

    if (!values.password)
        errors.password = 'Required';

    return errors;
  };

const LoginForm = () => {
    const { login } = useUserState();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            login(values);
        }
    });

    return (
        <div className="login-form-container container d-flex justify-content-center align-items-center">
            <form action="" onSubmit={formik.handleSubmit} className="login-form shadow-lg p-3 mb-5 bg-light rounded">
                <div className="form-row fs-1">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                        type="text" 
                        className={`form-control fs-2 ${formik.touched.email && formik.errors.email ? "is-invalid" : null}`}
                        name="email"
                        id="email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Email" />
                        <div className="invalid-feedback">
                            {formik.errors.email}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                        type="password" 
                        className={`form-control fs-2 ${formik.touched.password && formik.errors.password ? "is-invalid" : null}`}
                        name="password"
                        id="password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Password" />
                        <div className="invalid-feedback">
                            {formik.errors.password}
                        </div>
                    </div>
                    <button type="submit" className="w-100 mt-3 btn btn-primary fs-1 rounded">Login</button>
                </div>
            </form>
        </div>
    )
}

export { LoginForm };