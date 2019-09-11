import React, {Component} from 'react';
// import logo from './logo.svg';
import './styles.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from './sections/Header';
import ProdDetails from './sections/ProdDetails';
import RecProds from './sections/RecProds';
import Features from './sections/Features';
import Footer from './sections/Footer';

class App extends Component {
  state = {
    products: [],
    currentProductId: 1,
    recommendedProducts: [],
    productImages: {}
  }

  componentDidMount() {
    let promises = [];
    fetch('https://anatta-demo-app.herokuapp.com/api/products?access_token=access')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data });
      this.state.products.map((product) => {
        const id = product.id;
        promises.push(
        fetch('https://anatta-demo-app.herokuapp.com/api/products/' + id + '/image?access_token=access')
          .then(res => res.json())
          .then((data2) => {
            this.state.productImages[id] = data2;
        })
        .catch(console.log));
      })
      Promise.all(promises).then(()=>{
        this.getRecs();
      })
      
    })
    .catch(console.log)
  }

  getRecs() {
    let prodArr = [];
    const prods = this.state.products;
    const allImages = this.state.productImages;
    const iterations = Math.min(4, prods.length);
    for (let i=0; i<iterations;i++) {
      const price = prods[i].price;
      const id = prods[i].id;
      const desc = prods[i].description;
      const imgs = allImages[prods[i].id];
      const src = imgs[Math.floor(Math.random() * imgs.length)]['url'];
      prodArr.push({id, price, desc, src});
    }
    this.setState({recommendedProducts: prodArr});

    // return imgs[Math.floor(Math.random() * imgs.length)]['url'];
  }

  render() {
    return (
    <div className="App">
      <Header />


        {/*<div>
        <p>API Testing</p>
          {this.state.products.map((product) => (
            <span key={product.id}>{product.name + ' - ' + product.description} <br/></span>
          ))}
        </div>
        */}


        <Grid fluid>
          <Row reverse>
            <Col xs={12} sm={6}>
              <Features />
            </Col>
            <Col xs={12} sm={6}>
              <ProdDetails />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <RecProds recommendedProducts={this.state.recommendedProducts}/>
            </Col>
          </Row>
        </Grid>
      <Footer />
    </div>
  );
}
}

export default App;
