import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import './style.css';

function AddBook() {

  const handleBookSubmit = () => {

    return alert('submit');

  }

  const validationSchema = yup.object().shape({
    name: yup.string().min('3', 'min 3 characters').max('255', 'max 255 charters').required('Required field'),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      authors: "",
    },
    validationSchema,
    onSubmit: handleBookSubmit,
  });

  return <section id="addbook">
    <h2 className="page-title">Add a new book</h2>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.errors.name && formik.touched.name && (
        <span className="text-danger">{formik.errors.name}</span>
      )}
    </div>
    <div className="form-group">
      <label>Author</label>
      <input
        type="text"
        name="authors"
        value={formik.values.authors}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange} />
    </div>
    <div className="form-group">
      <label>Description</label>
      <textarea
        rows="10"
        name="description"
        value={formik.values.description}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
    </div>
    <button className="submit-button">
      Add new book
    </button>
  </section>;
}

export default AddBook;