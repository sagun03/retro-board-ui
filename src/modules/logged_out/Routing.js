import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch, Redirect } from "react-router-dom";
import PropsRoute from "../shared/components/PropsRoute";
import Home from "./home/Home";

const Routing = (props) => {
  const { boardList, selectBoard, selectHome } = props;
  return (
    <Switch>
      {/* {boardList.map(post => (
        <PropsRoute
          path={post.url}
          component={individualBoard}
          title={post.title}
          key={post.title}
          src={post.imageSrc}
          date={post.date}
          content={post.content}
        />
      ))} */}
      )
      <PropsRoute exact path="/home" component={Home} selectHome={selectHome} />)
      <Redirect to="/home" />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired
};

export default memo(Routing);
