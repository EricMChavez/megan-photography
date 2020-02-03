import React from 'react';
import { Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/book.css'
const Book = () => {
  return ( 
    <div className="page">
    <Formik initialValues={{name: "", email: "", date: "", type: ""}}>
      {({values, errors, touched, handleChange, handleBlur}) => (
        <div id="formBox">
          <form id="bookForm">
            <div className="formLable">BOOK A SESSION</div>
            <div className="inputField bookName">
              <label htmlFor="name">NAME</label>
              <input 
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </div>
            <div className="inputField bookEmail">
              <label htmlFor="email">EMAIL</label>
              <input 
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="inputField bookMessage">
              <label htmlFor="message">NOTES</label>
              <textarea 
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
            </div>
            <div className="btn submitBtn">SUBMIT</div>
          </form>
        </div>
      )}
    </Formik>
    </div>
   );
}
 
export default Book;