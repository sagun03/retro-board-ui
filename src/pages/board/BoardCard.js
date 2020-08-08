import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, withStyles, Divider } from "@material-ui/core";
import './css/BoardCard.css';

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5,
  }
});

function shadeColor(hex, percent) {
  const f = parseInt(hex.slice(1), 16);

  const t = percent < 0 ? 0 : 255;

  const p = percent < 0 ? percent * -1 : percent;

  const R = f >> 16;

  const G = (f >> 8) & 0x00ff;

  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

function BoardCard(props) {
  const { classes, Icon, color, name, status } = props;
  return (
    // <Fragment>
    //   <div class="card" style={{
    //       color: color,
    //       // backgroundColor: shadeColor(color, 0.5),
    //     }}>
    //   <div
    //     // We will set color and fill here, due to some prios complications
    //     className={classes.iconWrapper}
    //     style={{
    //       color: color,
    //       backgroundColor: shadeColor(color, 0.5),
    //       fill: color
    //     }}

    //   >
    //     {Icon}
    //   </div>
    //   <Typography variant="h5" paragraph class="a">
    //     {name}
    //   </Typography>
    //   <Typography variant="body1" color="textSecondary">
    //     {status}
    //   </Typography>
    //   <div class="cta-container transition"><a href="#" class="cta">Call to action</a></div>
    //   </div>
    // </Fragment>
    // boxShadow: `0px 0px 25px 2px ${shadeColor(color, 0.5)}`
    <div class="card transition" >
  <h2 class="transition">Board Name: {name}</h2>
  <Divider variant='middle' style={{ backgroundColor: shadeColor(color, 0.5) }}/>
  <p>Board Status: {status}</p>
  <div class="cta-container transition"><a href="#" class="cta">GO TO BOARD</a></div>
  <div class="card_circle transition"></div>
</div>
  );
}

BoardCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(BoardCard);
