import React from 'react';
import { useFormik } from 'formik';
import './HeroSearch.css';

const HeroSearch = ( {searchHero} ) => {
    const formik = useFormik({
        initialValues: {
            searchValue: '',
        },
        onSubmit: value => {
            searchHero(value.searchValue);
        }
    })

    return (
        <form action="" onSubmit={formik.handleSubmit}>
            <div className="form-group d-flex justify-content-center">
                <input 
                type="text" 
                className="search-input d-inline-block form-control fs-2" 
                id="searchValue"
                name="searchValue"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.searchValue}
                placeholder="Search"
                />
                <button 
                type="submit"
                className="btn btn-primary search-button">
                    <i className="search-icon"></i>
                </button>
            </div>
        </form>
    )
}

export { HeroSearch };