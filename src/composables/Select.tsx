import { useState } from "react";
import { InputLabel, MenuItem, FormControl } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Items {
  items: string[];
}

export const SelectSmall: React.FC<Items> = ({ items }) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    console.log("first");
  };

  return (
    <FormControl sx={{ width: "200px", m: "20px 0" }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
