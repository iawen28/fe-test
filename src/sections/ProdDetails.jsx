import React from 'react';

class ProdDetails extends React.Component {
  constructor(props) {
    super();
  }
  state = {
    currentTab: "MEN"
  }
  render() {
    return (
      <div id="prod-details">

        <div className="prod-overview">
          <div className="xs-hidden">{this.state.currentTab}</div>
          <div className="deets-row first-dr">
            <div className="description font-medium">{this.props.product && this.props.product.description}</div> 
            <div className="price">${this.props.product && this.props.product.price}</div>
          </div>
          <div className="deets-row">
            <div className="addl-detail">{this.props.product && this.props.product.color}</div>
            <div className="reviews">
              <span><span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              <span className="star"/>
              154 reviews</span>
            </div>
          </div>
        </div>

        <form>
          <div className="details-box">
            <div className="details-top uppercase font-bold" id="mw">
              <div className="men vertical-center center active" onClick={(e) => {
                document.getElementById('mw').childNodes[0].classList.add('active');
                document.getElementById('mw').childNodes[1].classList.remove('active');
                this.setState({currentTab: "MEN"});
              }}><span>men</span></div>
              <div className="women vertical-center center" onClick={(e) => {
                document.getElementById('mw').childNodes[0].classList.remove('active');
                document.getElementById('mw').childNodes[1].classList.add('active');
                this.setState({currentTab: "WOMEN"});
              }}><span>women</span></div>
            </div>
            <div className="details-radio-area">
              <div className="label-text">
                <span>Select Color</span>
              </div>
              <div className="colors-radio">
              {this.props.colors.map((color, i) =>{
                if (typeof(color) === "object") 
                  return (
                    <div key={i}>
                      <input type="radio" name="color" value={color[0]+color[1]} id={color[0]+color[1]} />
                      <label htmlFor={color[0]+color[1]}>
                        <span className="color-radio-button" style={{backgroundColor: color[0]}}>
                          <span className="color2" style={{backgroundColor: color[1]}}></span>
                        </span> 
                      </label>
                    </div>
                  )
                return (
                  <div key={i}>
                    <input type="radio" name="color" value={color} id={color}/>
                    <label className="colors-label" htmlFor={color}>
                      <span className="color-radio-button" style={{backgroundColor: color}}></span> 
                    </label>
                  </div>
                )
              })}
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span className="vertical-center label-text">Select Size</span>
                <a href="/" className="sizing-link">Size &amp; Fit Guide</a>
              </div>
              <div className="sizes-radio font-medium">
                {this.props.sizes.map((size, i) =>{
                  return (
                    <div className="size-box ta-center" key={"size"+size}>
                      <input type="radio" name="size" value={size} id={"size"+size} />
                      <label className="sizes-label" htmlFor={"size"+size} key={i}>
                        <span className="size-radio-button">{size}</span> 
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <input type="submit" value="Add to Bag"/>
        </form>
        <div className="details-bottom-text ta-center">Worldwide Shipping + Free Returns</div>



     </div>

     )
   }
}

export default ProdDetails;