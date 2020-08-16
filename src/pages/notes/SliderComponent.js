import React, { useEffect } from 'react';
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
  const {  handleSetCssConfig, totalColumn, defaultValue, slideConfig } = props;
  useEffect(() => {
    handleSetCssConfig(totalColumn)
  },[])

  const valueLabelFormat = (value) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  const handleChange = (event, value) => {
    console.log('value', value, event)
    if(value === 100) {
      handleSetCssConfig(2)
    }
    if(value === 64) {
      handleSetCssConfig(3)
    }
    if(value === 32) {
      handleSetCssConfig(4)
    }
    if(value === 0) {
      handleSetCssConfig(5)
    }
  }
  return (
  <Box>
  <Typography gutterBottom variant="h6" align="center">Change Column Width</Typography>
  <WidthSlider valueLabelDisplay="auto" aria-label="pretto slider" valueLabelFormat={valueLabelFormat}  step={null} defaultValue={defaultValue} marks={marks} onChange={handleChange} />
  </Box>
  )
}
export default SliderComponent;
