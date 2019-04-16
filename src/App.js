import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 275,
  },
});

class SimpleApp extends React.Component {

  updateTrackingAndBarCode = (e) => {
    e.preventDefault();


  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div style={{ maxWidth: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <form onSubmit={this.updateTrackingAndBarCode}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Quality Translations
                  </Typography>
                  <TextField
                    id="unit_of_measure"
                    name="unit_of_measure"
                    label="Unit of Measure"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="qube_per_unit"
                    name="qube_per_unit"
                    label="Cube/Unit"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="cube_divisor"
                    name="cube_divisor"
                    label="Cube Divisor"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="weight_pet_unit"
                    name="weight_pet_unit"
                    label="Weight/Unit"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="weight_divisor"
                    name="weight_divisor"
                    label="Weight Divisor"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="units_per_case"
                    name="units_per_case"
                    label="Units per Case"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="units_per_layer"
                    name="units_per_layer"
                    label="Units per Layer"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="units_per_pallet"
                    name="units_per_pallet"
                    label="Units per Pallet"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="units_per_unit"
                    name="units_per_unit"
                    label="Units per Unit"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="sales_pack"
                    name="sales_pack"
                    label="Sales Pack"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="order_quantity_divisor"
                    name="order_quantity_divisor"
                    label="Order Quantity Divisor"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="order_unit_of_measure"
                    name="order_unit_of_measure"
                    label="Order Unit of Measure"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="weight_divisor"
                    name="weight_divisor"
                    label="Weight Divisor"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />
                  <TextField
                    id="weight_divisor"
                    name="weight_divisor"
                    label="Weight Divisor"
                    type="number"
                    className={classes.textField}
                    isRequired
                    margin="dense"
                    fullWidth
                  />


                </CardContent>
              </Card>
            </form>
          </div>
        </Paper>
      </div>
    );
  }
}

SimpleApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(SimpleApp));