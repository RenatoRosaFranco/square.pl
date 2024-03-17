import React from 'react';
import { Link } from 'react-router-dom';
import Benefit from '../../components/Benefit/Index';
import benefitsData from '../../data/benefits.json';
import openingsData from '../../data/openings.json';
import './style.scss';

const Opening = ({ opening }) => {
  return(
    <Link to={opening.url}>
      <div style={{ marginBottom: 10, border: '1px solid #EEE' }}>
        <ul className="list-unstyled list-inline" style={{ marginTop: 10, marginLeft: 10 }}>
          <li>{opening.title}</li>
          <li className='pull-right'><img src={opening.flag} alt={opening.title} 
          width={24} height={24}/></li>
          <li className='pull-right'>{opening.country}</li>
        </ul>
      </div>
    </Link>
  );
}

const Jobs = () => {
  return (
    <section id="jobs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center'>Join Us!</h1>
            <br />

            <p className='text-center'>
              We offer a dynamic work environment with offices<br />
              located in Brazil and Poland. Our team is made up of<br />
              talented developers with varied technical backgrounds.<br />
              We are collaborative, technical and fun.
            </p>

            <br />
            <p className='text-center'>
            At Square we believe software development is made better when doin it<br />
            collaboratively so expect a lot of pair programming and peer reviews.
            </p>
            <br />

            <div className='col-md-10 col-md-offset-2'>
              <h3 className='bold'>Our Benefits</h3>
              {benefitsData.map((benefit) => (
                <Benefit key={benefit.id} benefit={benefit} />
              ))}
            </div>
            <br />
            
            <div className='col-md-10 col-md-offset-2'>
              <h3 className='bold'>Openings</h3>
              <p>Check your openings bellow</p>
              <br />

              {openingsData.map((opening) => (
                <Opening key={opening.id} opening={opening} />
              ))}
            </div>
            <br />

            <div className="col-md-10 col-md-offset-2"><br />
              <h4 className="bold">
                Want join our team but can't an open position that suits you listed here?
              </h4>
              <br />

              <p>We love making connections and are always on the lookout for colleagues to join<br />
              our technical team of developers front and back-end, sysadmin and designers.</p>

              <p>Please send us an open application at. Add your GitHub user or some <br />
              samples of your work and we'll get in touch with you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs;