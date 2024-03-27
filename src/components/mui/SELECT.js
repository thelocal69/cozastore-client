import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { dark, light } from "../../shared/Theme";
import { mainColor } from "../../shared/Theme";

const SELECT = (props) => {

  const { returnVal, label, options } = props;
  const themeToggel = useSelector((state) => state.theme);

  const theme = createTheme({
    backgroundColor: themeToggel
      ? dark.backgroundColor
      : light.backgroundColor,
    color: themeToggel ? dark.color : light.color,
    border: `1px solid  ${mainColor.purple}`,
    outlineColor: `${mainColor.purple}`,
    palette: {
      mode: themeToggel ? "dark" : "light",
    },
  });

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    returnVal(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label={"label"}
              onChange={handleChange}
            >
              {options.map((el, index) => (
                <MenuItem key={index} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default SELECT;
