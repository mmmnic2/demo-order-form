import { Box } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
function InputGroup() {
  return (
    <>
      <Box component="form">
        <div className="m-1">
          <TextField
            sx={{ width: "50%", p: 1 }}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            size="small"
            InputProps={{
              style: {
                borderRadius: "10px",
                fontFamily: "Roboto",
                fontSize: "14px",
                paddingTop: "0px",
              },
            }}
            InputLabelProps={{
              style: {
                padding: "4px 4px",
                fontSize: "15px",
                marginLeft: "8px",
              },
            }}
          />
          <TextField
            sx={{ width: "50%", p: 1 }}
            id="outlined-basic"
            label="Fullname"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="m-1">
          <TextField
            sx={{ width: "50%", p: 1 }}
            id="outlined-basic"
            label="Employee"
            size="small"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%", p: 1 }}
            id="outlined-basic"
            label="Restaurant Id"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="m-1">
          <TextField
            fullWidth
            sx={{ p: 1 }}
            id="filled-multiline-static"
            label="Order Note"
            multiline
            rows={3}
            variant="outlined"
            size="small"
          />
        </div>
      </Box>
    </>
  );
}

export default InputGroup;
