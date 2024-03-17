import React from 'react';
import testimonialsData from '../../data/testimonials.json';
import './style.scss';

const Testimonial = ({ testimonial }) => {
  return(
    <div className="media">
      <div className="media-left">
        <a href={testimonial.projectLink}>
          <img
            className='media-object'
            src={testimonial.logo} 
            alt={testimonial.clientName} 
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading bold">{testimonial.clientName}</h4>
        {testimonial.description}

        <br/>
        <a href={testimonial.projectLink}> Read more </a>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return(
    <section id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center'>Testimonials</h1>
            <br />

            <div className="col-md-6">
              {testimonialsData.map((testimonial) => (
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            <div className="col-md-6">
              <div className="jumbotron"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;