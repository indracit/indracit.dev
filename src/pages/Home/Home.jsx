import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Indracit Sivasamy.</span> <br/>
            Software Engineer
          </h1>

          <p className="home__description">
          Indracit Sivasamy is a passionate and motivated Software Engineer.
           Specializing in creating end-to-end applications using MongoDB, Express, React, and Node.js technologies. 
           Highly skilled in creating clean, efficient, and reusable code while ensuring maximum scalability and performance. 
           Experienced with designing and developing user-friendly web interfaces and developing complex algorithms. 
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

<div className="color__block"></div>

    </section>
  );
};

export default Home;
