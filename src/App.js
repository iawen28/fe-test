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
    currentProductId: 7,
    recommendedProducts: [],
    productImages: {},
    mwTab: "men"
  }

  componentDidMount() {
    let promises = [];
    let obj = {};
    fetch('https://anatta-demo-app.herokuapp.com/api/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data });
      data.map((product) => {
        const id = product.id;
        return promises.push(
        fetch('https://anatta-demo-app.herokuapp.com/api/products/' + id + '/image')
          .then(res => res.json())
          .then((data2) => {
            obj[id] = data2;
        })
        .catch(console.log));
      })
      Promise.all(promises).then(()=>{
        this.setState({productImages: obj});
        this.getRecs();
      })
      
    })
    .catch(console.log)
  }

  getRecs() {
    let prodArr = [];
    const prods = this.state.products;
    const allImages = this.state.productImages;
    console.log("***", allImages);
    const iterations = Math.min(4, prods.length);
    for (let i=0; i<iterations;i++) {
      const price = prods[i].price;
      const id = prods[i].id;
      const desc = prods[i].description;
      const imgs = allImages[prods[i].id];

      let tag;

      // tag var should be taken from field that currently doesn't exist in api, like prods[i].tag
      if (i===0) {
        tag = "Los Angeles Favorite";
      } else if (i === 2) {
        tag = "Sold out"
      }
      const src = imgs[Math.floor(Math.random() * imgs.length)]['url'];
      prodArr.push({id, price, desc, src, tag});
    }
    console.log(prodArr);
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

        <div id="feats-deets">
          <ProdDetails />
          <Features />
        </div>
        <Grid fluid>
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
