import React from 'react';
import Carousel from '../components/Carousel';

class Features extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="features">
     <h1> Features </h1>
     <Carousel />
     </div>
     )
   }
}

export default Features;