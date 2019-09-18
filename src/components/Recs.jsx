import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Recs = ({ recs }) => {
  return (
    <div className="rec-sec">
      <Grid fluid>
        <Row>
      {recs.map((rec) => (
        <Col xs={6} sm={3} key={rec.id}>
          <div className="bg-img" style={{backgroundImage: 'url(' + rec.src + ')'}}>
          {rec.tag && 
            <div className="tag-text">{rec.tag}</div>
          }
          </div>
          <div className="rec-caption font-book">
            <h5>{rec.desc}</h5>
            <h6>${rec.price}</h6>
          </div>

        </Col>
      ))}
            </Row>
      </Grid>
    </div>
  )

};

export default Recs;