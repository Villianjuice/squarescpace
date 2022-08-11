import React from "react";
import { InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectSmallProps {
  sizes: string[] | number[];
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>
}

export const SelectSmall: React.FC<SelectSmallProps> = ({ sizes, size, setSize }) => {

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
    console.log("render");
  };

  return (
    <FormControl sx={{ width: "200px", m: "20px 0" }} size="small">
      <InputLabel id="demo-select-small">Size</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={size}
        label="Size"
        onChange={handleChange}
      >
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectSize = React.memo(SelectSmall);
