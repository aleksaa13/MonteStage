import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <React.Fragment>
      <div>
        <button>
          <Link to="/groups" id="band">
            Band
          </Link>
        </button>
        <button>
          <Link to="/groups" id="acoustic">
            Acoustic
          </Link>
        </button>
        <button>
          <Link to="/groups" id="vocal">
            Vocal
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
