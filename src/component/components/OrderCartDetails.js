import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    flex: "1 0 auto",
  },
  media: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
}));

const CartItem = ({ item, onDelete }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Options: {item.options.join(", ")}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Quantity: {item.quantity}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Total: ${item.total}
        </Typography>
        <IconButton aria-label="delete" onClick={() => onDelete(item.id)}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

const CartReview = ({ cartItems, onDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} key={item.id}>
            <CartItem item={item} onDelete={onDelete} />
          </Grid>
        ))}
      </Grid>
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Proceed to Checkout
        </Button>
      </Box>
    </div>
  );
};

export default CartReview;
