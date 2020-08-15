import React from 'react';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


  const WidthSlider = withStyles({
    root: {
      color: '#3453D6',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  const marks = [
    {
      value: 0,
    },
    {
      value: 32,
    },
    {
      value: 64,
    },
    {
      value: 100,
    },
  ];
const SliderComponent = (props) => {
  const { setSlideCssConfig } = props;
  const valueLabelFormat = (value) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  const handleChange = (event, value) => {
    if(value === 100) {
      setSlideCssConfig({gridColsValue: 2, columnNameVariant: "h4", columnNameButtonSize: "medium", noteMainBoxWidth: '45rem', cardMainBoxWidth: '44rem' })
    }
    if(value === 64) {
      setSlideCssConfig({gridColsValue: 3, columnNameVariant: "h4", columnNameButtonSize: "medium", noteMainBoxWidth: '29rem', cardMainBoxWidth: '28rem' })
    }
    if(value === 32) {
      setSlideCssConfig({gridColsValue: 4, columnNameVariant: "h5", columnNameButtonSize: "small", noteMainBoxWidth: '21.5rem', cardMainBoxWidth: '20.5rem' })
    }
    if(value === 0) {
      setSlideCssConfig({gridColsValue: 5, columnNameVariant: "h5", columnNameButtonSize: "small", noteMainBoxWidth: '16.5rem', cardMainBoxWidth: '15.5rem' })
    }
  }
  return (
  <Box>
  <Typography gutterBottom variant="h6" align="center">Change Column Width</Typography>
  <WidthSlider valueLabelDisplay="auto" aria-label="pretto slider" valueLabelFormat={valueLabelFormat}  step={null} defaultValue={100} marks={marks} onChange={handleChange} />
  </Box>
  )
}
export default SliderComponent;
