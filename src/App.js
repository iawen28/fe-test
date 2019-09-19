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
    currentProductId: null,
    recommendedProducts: [],
    productImages: null,
    productColors: ['#F7F7F7', '#072348', '#000000', '#BB0D0F', '#FFCF60', '#4E4E4E', '#129F7D', '#C69F97', ['#000000', '#F7F7F7'], '#215297', '#B3926E'],
    productSizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13']
  }

  componentDidMount() {
    let promises = [];
    let obj = {};
    fetch('https://anatta-demo-app.herokuapp.com/api/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data });
      this.initId();
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

  initId() {
    let firstId = null, thirdId = null;
    if (this.state.products.length > 0) {
      firstId = this.state.products[0].id;
      thirdId = this.state.products[2].id; // wouldn't be needed with a more populated API
    }
    this.setState({currentProductId: thirdId});
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
      let tag; // tag var should be taken from field that currently doesn't exist in api
      if (i===0) {
        tag = "Los Angeles Favorite";
      } else if (i === 2) {
        tag = "Sold out"
      }
      const src = imgs[Math.floor(Math.random() * imgs.length)]['url'];
      prodArr.push({id, price, desc, src, tag});
    }
    this.setState({recommendedProducts: prodArr});
  }

  render() {
    return (
    <div className="App">
      <Header />
        <div id="feats-deets">
          <ProdDetails colors={this.state.productColors} sizes={this.state.productSizes}/>
          {this.state.productImages &&
          <Features imgs={this.state.productImages[this.state.currentProductId]}/> 
          }
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
