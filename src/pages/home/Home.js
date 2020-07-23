import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
      <HeadSection />
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
