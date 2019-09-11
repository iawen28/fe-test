import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFighterJet } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class Footer extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="footer">
        <Grid fluid>
          <Row className="vertical-center footer-top">
            <Col xs={6} sm={4} className="center">
             <FontAwesomeIcon icon={faLock} /><br/><span className="spaced"> Secure Payment</span>
            </Col>
            <Col xs={6} sm={4} className="center vertical-center">
              <FontAwesomeIcon icon={faFighterJet} /><span className="spaced"> Express Shipping</span>
            </Col>
            <Col sm={4} className="xs-hidden center">
                <FontAwesomeIcon icon={faBox} /><span className="spaced"> Free Returns</span>
            </Col>
          </Row>
          <div className="footer-middle">
            <div className="sm-section"> <h4>Men</h4>
                <ul>
                  <li>OCA Low</li>
                  <li>OCA High</li>
                  <li>CATIBA Low</li>
                  <li>CATIBA High</li>
                </ul>
            </div>
            <div className="sm-section"> <h4>Women</h4>
                <ul>
                  <li>OCA Low</li>
                  <li>OCA High</li>
                  <li>CATIBA Low</li>
                  <li>CATIBA High</li>
                </ul>
            </div>
            <div className="sm-section"> <h4>Support</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Returns</li>
                  <li>Live Chat</li>
                </ul>
            </div>
            <div className="sm-section"> <h4>About</h4>
                <ul>
                  <li>Mission</li>
                  <li>Vision</li>
                  <li>Future</li>
                </ul>
            </div>
            <div className="stores-section">
              <h4>Pop-up Stores</h4>
                <ul>
                  <li>Find near you</li>
                  <li>Register</li>
                </ul>
              <form action="/">
                <input type="text" placeholder="Find your sneakers here" name="fname"/>
                <FontAwesomeIcon icon={faSearch}/>
              </form>

            </div>
            <div className="nl-section"><h4>Newsletter</h4>



            <form action="/">
              <input type="text" placeholder="Enter email" email="email"/>
              <input type="submit" value="Join Us"/>
            </form>
            <div className="icons">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </div>
            </div>

              <Row className="xs-footer-middle xs-visible">
                <Col xs={6}>
                <h4>Shop</h4>
                <h4>Support</h4>
                </Col>
                <Col xs={6}>
                <h4>About</h4>
                <h4>Blog</h4>
                <h4>Pop-up Stores</h4>
                </Col>
              </Row>


          </div>

          <Row className="vertical-center footer-bottom">
            <Col xs={12}>
              <span className="font-os center spaced">
                Copyright Ⓒ CARIUMA. All Rights Reserved. <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
              </span>
            </Col>

          </Row>
        </Grid>

     </div>
     )
   }
}

export default Footer;