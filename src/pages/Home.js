import Carousel from "react-bootstrap/Carousel";
const images = ["dine", "paint", "sleep", "study", "surf"];
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
                <img src={`${image}.jpg`} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <div id="controls">hi</div>
      <style jsx>{`
        #carousel {
          width: 70%;
        }
        #controls {
          width: 30%;
          background-color: red;
        }
        img {
          width: 100%;
          object-fit: cover;
        }
        #hero {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default Home;
