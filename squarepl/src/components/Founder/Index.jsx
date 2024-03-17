import React from 'react';
import './style.scss';

const Founder = ({ founder }) => {
  return(
    <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <img src={founder.avatar} alt={founder.name} />
          <h4 className="bold text-center">{founder.name}</h4>
          <p className='text-center'>{founder.occupation}</p>
        </div>
      </div>
    </div>
  )
}

export default Founder;