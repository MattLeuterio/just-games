import React from "react";
import PropTypes from "prop-types";

import { SelectContainer } from "./style";
//Material/UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const FilterSelect = ({
  label,
  list,
  onChange,
  value,
  noSelectionLabel = "All",
}) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    colorLight: {
      color: "#eceaef",
    },
  }));

  const classes = useStyles();

  return (
    <SelectContainer>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          className={classes.colorLight}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          className={classes.colorLight}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          label={label}
        >
          <MenuItem value={null}>
            <em>{noSelectionLabel}</em>
          </MenuItem>
          {list?.map((elem) => (
            <MenuItem key={elem.id} value={elem.id}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectContainer>
  );
};

FilterSelect.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
};

export default FilterSelect;
