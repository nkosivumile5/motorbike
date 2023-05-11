import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.completelymotorbikes.co.uk/i/?item_id=126&item_type=banner&item_size=banner&hash=49e361f7cef30a52ca8b97431b4e9a88"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.completelymotorbikes.co.uk/i/?item_id=125&item_type=banner&item_size=banner&hash=cde2fcaad15cbe31014fab415819fdcd"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.completelymotorbikes.co.uk/i/?item_id=130&item_type=banner&item_size=banner&hash=a8e587893aeab20f3f2e915eb8b8c076"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;