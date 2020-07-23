import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const TemplateBoard = props => {
  // TODO: need to be fetched from server or discuss with it how to deal with template data
  const templateList = [
    {
      name: `4L's of retrospective`,
      value: ["Liked", "Learned", "Lacked", "Longed for"]
    },
    {
      name: "Went Well - To Improve - Action Items",
      value: ["Went Well", "To Improve", "Action Items"]
    },
    { name: "Start - Stop - Continue", value: ["Start", "Stop", "Continue"] }
  ];
  // TODO: Look for better state management strategy
  const [selectedTemplate, handleSelectTemplate] = useState({
    name: "",
    value: null
  });
  return (
    <div>
      <FormControl>
        <Select
          value={selectedTemplate.name}
          onChange={({ target: { value } }) =>
            handleSelectTemplate(
              templateList.find(({ name }) => name === value)
            )
          }
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {templateList.map(({ name }) => (
            <MenuItem value={name}>{name}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Select template</FormHelperText>
      </FormControl>
      {selectedTemplate.name !== "" && (
        <div>
          <Typography
            component="i"
            variant="body1"
            color="textSecondary"
            gutterBottom
          >
            List of items in selected template
          </Typography>
          <ul>
            {selectedTemplate.value.map(value => (
              <li>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TemplateBoard;
