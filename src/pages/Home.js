import Carousel from "react-bootstrap/Carousel";
const images = ["surf"];

// https://stackoverflow.com/questions/47955102/how-to-create-a-slanted-background-with-css
const Home = () => {
  return (
    <div id="hero">
      <div id="carousel">
        <Carousel
          fade
          interval={3000}
          controls={false}
          indicators={false}
          pause={false}
        >
          {images.map((image) => {
            return (
              <Carousel.Item>
                <div
                  className="cover-image"
                  style={{ backgroundImage: `url(/${image}.jpg)` }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <style jsx>{`
        #hero {
          display: flex;

          overflow: hidden;
        }
        #carousel {
          width: 100%;
        }
        .cover-image {
          width: 100%;
          height: 500px;
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
