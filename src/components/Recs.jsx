import React from 'react';

const Recs = ({ recs }) => {
  return (
    <div id="recs">
      {recs.map((rec) => (
        <div key={rec.id}>
          <img src={rec.src}/>
          <div className="rec-caption font-book">
            <h5>{rec.desc}</h5>
            <h6>${rec.price}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Recs;