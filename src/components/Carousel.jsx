import React from 'react';
import Slider from 'react-slick';

class Carousel  extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const imgs = this.props.imgs;
    var settings = {
      customPaging: function(i) {
        return (
          <a href="/">
            <img alt="" src={imgs[i].url} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        {imgs.map((img, i) => {
          return (
            <div key={'carouselImg' + i}>
              <div className="bg-img" style={{backgroundImage: 'url(' + img.url + ')'}}></div>
            </div>
          )
        })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;