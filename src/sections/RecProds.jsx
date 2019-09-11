import React from 'react';
import Recs from '../components/Recs';

class RecProds extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="recProds">
      <h2> {"You'll Also Like"} </h2>
      <Recs recs={this.props.recommendedProducts}/>
     </div>
     )
   }
}

export default RecProds;