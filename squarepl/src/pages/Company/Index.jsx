import React from 'react';
import Founder from '../../components/Founder/Index';
import foundersData from '../../data/founders.json';
import './style.scss';

const Company = () => {
  return(
    <section id="company">
      <div className="container">
        <div className="row">
          <div className="col-md-12">

            <div className='row'>
              <h1 className="bold text-center">Who we are</h1>
              <br />

              <p className='text-center'>
              We are a Brazilian-Poland company specialising in software<br />
              development. We have been operating on the European market since 2012.<br />
              and have contributed to tech teams in serveral ways.<br />
              </p>
              <br />

              <p className='text-center'>
              Our small, multi tech team helps companies deliver software for<br />
              industries such as finance, retail, online learning, multonational<br />
              companies, digital agencies and software houses.
              </p>
            </div>

            <div className='row'>
              <h2 className='bold text-center'>Meet the Founders</h2>
              <br />

              <div class='col-md-offset-2'>
                {foundersData.map((founder) => (
                  <Founder key={founder.id} founder={founder} />
                ))}
              </div>
            </div>
            <br />
            
            <div className='text-center'>
              <button className='btn btn-primary btn-lg top'>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Company;