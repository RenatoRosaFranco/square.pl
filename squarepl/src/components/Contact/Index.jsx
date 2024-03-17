import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import offices from '../../data/office.json'
import './style.scss';

const Location = ({ office }) => {
  return(
    <div className="col-md-3 office">
      <h5 className='bold'>{office.country}</h5>
      
      <p>
        <i class="fa-solid fa-phone" style={{ marginRight: 8 }}></i>
        {office.phone_number}
      </p>
      
      <h6 className='bold'>
        <Link to={`mailto:${office.email}`}>
          <i class="fa-regular fa-envelope" style={{ marginRight: 5 }}></i>
          {office.email}
        </Link>
      </h6>
      <p style={{fontSize: 12}}>
        {office.address}
      </p>
    </div>
  );
}

const ContactSchema = Yup.object().shape({
  name:    Yup.string().required('Required'),
  email:   Yup.string().email('Invalid email').required('Required'),
  phone:   Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  let initialValues = {
    name: '', email: '', phone: '', message: ''
  };

  const [submissionMessage, setSubmissionMessage] = useState('');

  return(
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className="row">
              <div className="col-md-8">
                {offices.map((office) => (
                  <Location key={office.id} office={office} />
                ))}
              </div>

              <div className="col-md-4">
                 {submissionMessage && <div>{submissionMessage}</div>}

                 <Formik
                   initialValues={initialValues}
                   validationSchema={ContactSchema}
                   onSubmit={(values, { setSubmitting }) => {
                      console.log(values);
                      setSubmitting(false);
                      setSubmissionMessage('Your message has been sent successfully!');

                      setTimeout(() => setSubmissionMessage(''), 3000)
                   }} 
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <label>Name</label>
                        <Field type='text' name="name" placeholder="Name" className='form-control' />
                        <ErrorMessage name='name' component='div'/>

                        <label>E-mail</label>
                        <Field type='email' name='email' placeholder='Email' className='form-control' />
                        <ErrorMessage name='name' component='div'/>

                        <label>Phone</label>
                        <Field type='text' name='phone' placeholder='Phone' className='form-control'/>
                        <ErrorMessage name='phone' component='div'/>

                        <label>Message</label>
                        <Field as='textarea' name='message' placeholder='Message' className='form-control' />
                        <ErrorMessage name='message' component='div'/>

                        <br />
                        <button type='submit' disabled={isSubmitting}
                          className='btn btn-primary btn-lg'>
                          Send Message
                        </button>
                      </Form>
                    )}
                 </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;