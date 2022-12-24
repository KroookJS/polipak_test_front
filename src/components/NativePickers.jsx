import * as React from "react";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";

export default function NativePickers({ getDataFormat, date }) {
  const [value, setValue] = React.useState(Date.now());

  /* const handleChange = (newValues) => {
    setValue(newValues);
  }; */

  const dataFormat = `${value.$y}-${value.$M + 1}-${value.$D}`;
  getDataFormat(dataFormat);

  console.log(dataFormat);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Дата начало"
          inputFormat="MM/DD/YYYY"
          value={date ? date : value}
          onChange={(data) => setValue(data)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
