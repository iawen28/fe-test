import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    var settings = {
      customPaging: function (i) {
        return (
            <img alt="" src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/ >
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
      <Slider {...settings}>


        {/*{images.map((img) => (
            <div>
              <img src={img.src} />
            </div>
          ))}*/}


        <div>
          <div className="bg-img" style={{backgroundImage: 'url(' + "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" + ')'}}></div>
          {/*<img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/ >*/}
        </div>
        <div>
          <div className="bg-img" style={{backgroundImage: 'url(' + "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" + ')'}}></div>
          {/*<img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/ >*/}
        </div>


      </Slider>
    );
  }
}

export default Carousel;