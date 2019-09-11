import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  constructor(props) {
    super();
  }

  handleClick() {
    const menu = document.getElementsByClassName('xs-menu')[0];
    const menuBars = document.getElementsByClassName('menu-bars')[0];
    menu.classList.toggle('active');
    menuBars.classList.toggle('active');
  }
  render() {
    return (
      <div id="header" className="font-bold">
      <div className="top-bar vertical-center center">
        <span className="font-os uppercase">Free US Shipping & Returns</span>
        
      </div>


      <Grid fluid>
        <Row className="bottom-area vertical-center">
            <Col xs={4}>
              <div className="menu-bars" onClick={() => this.handleClick()}>
                <span></span>
              </div>

              <div className="xs-menu">
                <div>ABOUT</div>
                <div>MEN</div>
                <div>WOMEN</div>
              </div>

              <div className="xs-hidden header-left-area">
                <span>MEN</span>
                <span>WOMEN</span>

              </div>
            </Col>
            <Col xs={4}>
            <div className="rings center vertical-center">
              <svg>
                <circle cx="24" cy="70" r="22.5" fill="none" stroke="#7DC242" strokeWidth="3px"></circle>
                <circle cx="50" cy="70" r="22.5" fill="none" stroke="#FFCF60" strokeWidth="3px"></circle>
              </svg>
              </div>
            </Col>
            <Col xs={4}>
              <div className="right">
              <span style={{lineHeight: 200 + '%'}} className="xs-hidden">ABOUT</span>
              <div className="icons">
                <FontAwesomeIcon className="icon" icon={faShoppingBag} size="2x"/>
                <FontAwesomeIcon className="icon" icon={faUser} size="2x"/>
              </div>
              </div>
            </Col>
        </Row>
      </Grid>
     </div>
     )
   }
}

export default Header;