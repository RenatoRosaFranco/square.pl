import React from 'react';
import technologiesData from '../../data/technologies.json';
import './style.scss';

function Technology({ technology }) {
  return (
    <div className="col-md-6">
      <div class='panel panel-default'>
        <div className='panel-body'>
          <h3 className='bold'>{technology.name}</h3>
          <p>{technology.description}</p>
        </div>
      </div>
    </div>
  )
}

const Technologies = () => {
  return(
    <section id="technologies">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='bold text-center'>Technologies</h1>
            <br />

            {technologiesData.map((technology) => (
              <Technology key={technology.id} technology={technology} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;