import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
const Homepage = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    config: { duration: 1500 }
  });

  const props2 = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: 100 },
    config: { duration: 1500 }
  });
  return (
    <>
      <div className="navbar landing-page">
        <animated.div style={props2}>
          <div class="jumbotron lead-text">
            <h1 class="display-4">
              Welcome to{" "}
              <strong>
                <span style={{ color: `#ffc107` }}>Hat Attack</span>
              </strong>
            </h1>
            <p class="lead">
              We have got the best deals for the best quality hats, sneakers and
              other accessories. <br />
              Check out what we offer
            </p>
            <hr class="my-4" />
            <p>Eteselebo Eteselebo, Yahoo ni babalawo, Ole everybody </p>
          </div>
        </animated.div>
      </div>
      <div className="container">
        <h2 className="font-weight-bold text-center">CATEGORIES.</h2>
        <animated.div style={props2}>
          <div className="row">
            <div className="col col-xs-12 col-lg-4">
              <div
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1569271410/ecommerce/hats.jpg)`
                }}
                className="card text-center home-card"
              >
                <div className="card-body home-card-body">
                  <h5 className="card-title">Hats</h5>
                  <Link to="/hats" class="btn btn-secondary">
                    Shop Here
                  </Link>
                </div>
              </div>
            </div>
            <div class="col col-xs-12 col-lg-4">
              <div
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1569271459/ecommerce/jackets.jpg)`
                }}
                className="card text-center home-card"
              >
                <div className="card-body home-card-body">
                  <h5 className="card-title">Jackets</h5>
                  <Link to="/hats" class="btn btn-secondary">
                    Shop Here
                  </Link>
                </div>
              </div>
            </div>

            <div class="col col-xs-12 col-lg-4">
              <div
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1569271605/ecommerce/shorts.jpg)`
                }}
                className="card text-center home-card"
              >
                <div className="card-body home-card-body">
                  <h5 className="card-title">Shorts</h5>
                  <a href="#home" class="btn btn-secondary">
                    Shop Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>

        <animated.div style={props}>
          <div class="row">
            <div class="col col-lg-6 col-xs-12">
              <div
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1569273428/ecommerce/watch.jpg)`
                }}
                className="card text-center home-card"
              >
                <div className="card-body home-card-body">
                  <h5 className="card-title">Watch</h5>

                  <a href="#home" class="btn btn-secondary">
                    Shop Here
                  </a>
                </div>
              </div>
            </div>

            <div class="col col-lg-6 col-xs-12">
              <div
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/dnavbc7ny/image/upload/v1569273428/ecommerce/GLASSES.jpg)`
                }}
                className="card text-center home-card"
              >
                <div className="card-body home-card-body">
                  <h5 className="card-title">Glasses</h5>
                  <a href="#home" class="btn btn-secondary">
                    Shop Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default Homepage;
