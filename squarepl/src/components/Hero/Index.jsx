import React from 'react';
import servicesData from '../../data/hero.json';
import './style.scss';

const Hero = () => {
  return(
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center'>A few words on what we do</h1>
            <br />

            {servicesData.map((service) => {
              return (
              <div className="col-md-4 service">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h3 className='text-center'>{service.title}</h3>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;