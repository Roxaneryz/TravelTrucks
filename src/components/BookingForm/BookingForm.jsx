
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';

const BookingForm = ({ onBookingSuccess }) => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    bookingDate: Yup.date().required("booking date is required").nullable(),
    comment: Yup.string().max(500, "Comment cannot exceed 500 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Booking successful!");
    onBookingSuccess(values);
    resetForm();
  };

  return (
    <div className={css.bookingForm}>
      <h2>Book a Camper</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={css.formGroup}>
              <label htmlFor="name"></label>
              <Field type="text" id="name" name="name" placeholder="Name*" />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email"></label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="bookingDate"></label>
              <Field
                type="date"
                id="bookingDate"
                name="bookingDate"
                placeholder="BookinG date*"
              />
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="comment"></label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default BookingForm