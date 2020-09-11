import Carousel from "react-bootstrap/Carousel";
const images = ["surf"];

// https://stackoverflow.com/questions/47955102/how-to-create-a-slanted-background-with-css
const Home = () => {
  return (
    <div id="hero">
      <div id="content">
        <h1 className="title">A Perfect day</h1>
        <div className="cta" id="go-to-submit">
          <a href="#">Share your day!</a>
        </div>
      </div>
      <div id="background">
        <Carousel
          fade
          interval={3000}
          controls={false}
          indicators={false}
          pause={false}
        >
          {images.map((image) => {
            return (
              <Carousel.Item key="image">
                <div
                  className="cover-image"
                  style={{ backgroundImage: `url(/${image}.jpg)` }}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div id="mask" />
      </div>
      <style jsx>{`
        #hero {
          position: relative;
          height: 100vh;
        }
        #content {
          z-index: 100;
          position: relative;
          height: 100%;
        }
        .title {
          color: white;
          top: 27%;
          font-weight: bold;
          position: absolute;
          text-align: center;
          width: 100%;
          font-size: 45px;
        }
        #background {
          width: 100%;
          position: absolute;
          z-index: 50;
          top: 0;
        }
        #mask {
          position: absolute;
          background-color: black;
          width: 100%;
          height: 100%;
          z-index: 100;
          top: 0px;
          opacity: 0.5;
        }
        .cover-image {
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }
        #go-to-submit {
          cursor: pointer;
          position: absolute;
          bottom: 10%;
          left: 50%;
          transform: translateX(-50%);
          width: 95vw;
        }
        .cta {
          background-color: orange;
          color: white;
          padding: 20px 0px;
          display: block;
          text-align: center;
          color: white;
          font-size: 25px;
        }
        .cta a {
          color: white;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
