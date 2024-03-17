import React from 'react';

const Benefit = ({ benefit }) => {
  return(
    <div className="col-md-4">
      <h4 className="bold text-center">{benefit.title}</h4>
      <img src={benefit.image} alt={benefit.name} />
    </div>
  );
}

export default Benefit;