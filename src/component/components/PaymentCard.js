import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import ToggleButton from "@mui/material/ToggleButton";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  radioChecked: {
    border: "1px solid #2f5acf !important",
    opacity: "1 !important",
  },
  payment_method_item: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    border: "1px solid #D9D9D9",
    borderRadius: "16px",
    padding: "15px 20px",
    cursor: "pointer",
    transition: "0.3s all",
    opacity: "0.5",
    margin: "2px",
    "&:hover": {
      border: "1px solid #2f5acf",
      opacity: "1",
    },
  },
}));
function PaymentCard({ options, value, onChange }) {
  const classes = useStyles();
  return (
    <FormControl sx={{ width: "100%", margin: "5px" }} component="fieldset">
      <RadioGroup sx={{ width: "100%" }} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            className={` ${
              value === option.value ? classes.radioChecked : ""
            } ${classes.payment_method_item} `}
            // className={classes.payment_method_item}
            value={option.value}
            control={<Radio />}
            label={
              <div className="d-flex">
                <Image
                  src={option.image}
                  alt={option.title}
                  width={20}
                  height={15}
                />
                <Typography variant="body1">{option.title}</Typography>
              </div>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default PaymentCard;
