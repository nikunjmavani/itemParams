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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';

import './App.css';

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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const FORECAST_PERIODICITY = [
  {
    value: '1',
    label: '13 - 4 - WEEKLY',
  },
  {
    value: '2',
    label: '13 - 5 - WEEKLY',
  },
]

const FORECAST_METHODS = [
  {
    value: '1',
    label: 'R - E3 Refular AVS',
  },
  {
    value: '2',
    label: 'R - E4 Refular AVS',
  },
]

class SimpleApp extends React.Component {

  state={
    forecast_method: '1',
    forecast_periodicity: '1'
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <form onSubmit={this.updateTrackingAndBarCode}>
            <div className="form-div">
              <div className="flex-column">
                <div className="column-276">
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
                      </CardContent>
                    </Card>
                </div>
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service level Controls
                        </Typography>
                        <div style={{ display: 'flex' }}>
                        <TextField
                            id="service_level_goal"
                            name="service_level_goal"
                            label="Unit of Measure"
                            type="number"
                            className={classes.textField}
                            defaultValue={99.00}
                            isRequired
                            margin="dense"
                            fullWidth
                          />
                          <Checkbox
                            value="checkedB"
                            color="primary"
                          />
                        </div>
                        <TextField
                          id="suggested_service_level"
                          name="suggested_service_level"
                          label="Suggested Service Level"
                          type="number"
                          className={classes.textField}
                          defaultValue={99.00}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="out_of_stock_point"
                          name="out_of_stock_point"
                          label="Out of Stock Point"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 8px' }}>
                          <div>
                            <div> - </div>
                            <div> R - Regular </div>
                            <div> R - Regular </div>
                          </div>

                          <div>
                            <div> Buyer ID </div>
                            <div> Buyer Class </div>
                            <div> System Class </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                </div>
              </div>

              <div className="flex-column">
                <div className="column-480">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Ordering Restrictions
                        </Typography>
                        <div className="flex-column" > 
                        <TextField
                          id="minimum_quantity"
                          name="minimum_quantity"
                          label="Minimum Quantity"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="buying_multiple"
                          name="buying_multiple"
                          label="Buying Multiple"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="convenience_pack"
                          name="convenience_pack"
                          label="Convenience Pack"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="conv_pk_brpt"
                          name="conv_pk_brpt"
                          label="Conv Pk Breakpoint %"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="no_conv_packs"
                          name="no_conv_packs"
                          label="Number of Conv. Packs"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="shelf_life_days"
                          name="shelf_life_days"
                          label="Shelf Life Days"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="ti_hi"
                          name="ti_hi"
                          label="Ti-Hi"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="transfer_multiple"
                          name="transfer_multiple"
                          label="Transfer Multiple"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="exclude_from_auto_transfer"
                              color="primary"
                            />
                          }
                          label="Exclude from Auto Transfer"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="exclude_from_alternate_source"
                              color="primary"
                            />
                          }
                          label="Exclude from Alternate Source"
                        />
                        </div>
                      </CardContent>
                    </Card>
                </div>
                <div className="column-480">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Other Attributes
                        </Typography>
                        <TextField
                          id="item_class"
                          name="item_class"
                          label="Item Class"
                          type="text"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                      </CardContent>
                    </Card>
                </div>
                <div className="column-480">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Item Group Codes
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'wrap' }}>
                        <TextField
                          id="item_group_1"
                          name="item_group_1"
                          label="Item Group 1"
                          type="number"
                          className={classes.textField}
                          defaultValue={101}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_2"
                          name="item_group_2"
                          label="Item Group 2"
                          type="number"
                          className={classes.textField}
                          defaultValue={999}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_3"
                          name="item_group_3"
                          label="Item Group 3"
                          type="number"
                          className={classes.textField}
                          defaultValue={111}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_4"
                          name="item_group_4"
                          label="Item Group 4"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_5"
                          name="item_group_5"
                          label="Item Group 5"
                          type="number"
                          className={classes.textField}
                          defaultValue={998}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_6"
                          name="item_group_6"
                          label="Item Group 6"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_7"
                          name="item_group_7"
                          label="Item Group 7"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_8"
                          name="item_group_8"
                          label="Item Group 8"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_9"
                          name="item_group_9"
                          label="Item Group 9"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_10"
                          name="item_group_10"
                          label="Item Group 10"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_11"
                          name="item_group_11"
                          label="Item Group 11"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_group_12"
                          name="item_group_12"
                          label="Item Group 12"
                          type="number"
                          className={classes.textField}
                          isRequired
                          margin="dense"
                          fullWidth
                        />
                        </div>
                      </CardContent>
                    </Card>
                </div>
              </div>

              <div className="flex-column">
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Quality Translations
                        </Typography>
                        <div style={{ display: 'flex' }}>
                          <Checkbox
                              value="lead_time_forcase_cb"
                              color="primary"
                            />
                          <TextField
                              id="lead_time_forecast"
                              name="lead_time_forecast"
                              label="Lead time forecast"
                              type="number"
                              className={classes.textField}
                              defaultValue={99.00}
                              isRequired
                              margin="dense"
                              fullWidth
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                        <Checkbox
                            value="lt_variance_cb"
                            color="primary"
                          />
                        <TextField
                            id="lt_variance"
                            name="lt_variance"
                            label="LT Variance"
                            type="number"
                            className={classes.textField}
                            defaultValue={99.00}
                            isRequired
                            margin="dense"
                            fullWidth
                          />
                          
                        </div>
                        
                      </CardContent>
                    </Card>
                </div>
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service level Controls
                        </Typography>
                        <TextField
                          id="standard-select-currency"
                          select
                          label="Forcast Periodicity"
                          className={classes.textField}
                          value={this.state.forecast_periodicity}
                          onChange={this.handleChange('forecast_periodicity')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                        >
                          {FORECAST_PERIODICITY.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="demand_for_weekly"
                          name="demand_for_weekly"
                          label="Demand For Weekly"
                          className={classes.textField}
                          defaultValue={'6,5556,57'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="vendor_cycle_units"
                          name="vendor_cycle_units"
                          label="Vendor cycle units"
                          className={classes.textField}
                          defaultValue={'234'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="item_cycle_units"
                          name="item_cycle_units"
                          label="Item Cycle Units"
                          className={classes.textField}
                          defaultValue={'234'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="standard-select-currency"
                          select
                          label="Forcast Periodicity"
                          className={classes.textField}
                          value={this.state.forecast_method}
                          onChange={this.handleChange('forecast_method')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          margin="normal"
                        >
                          {FORECAST_METHODS.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <div style={{ display: 'flex' }}>
                          <Checkbox
                              value="checkedB"
                              color="primary"
                            />
                          <TextField
                              id="forecasting_demand_limit"
                              name="forecasting_demand_limit"
                              label="Forecasting demand Lmt"
                              type="number"
                              className={classes.textField}
                              defaultValue={0}
                              isRequired
                              margin="dense"
                              fullWidth
                            />
                        </div>
                      </CardContent>
                    </Card>
                </div>
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service level Controls
                        </Typography>
                        
                        <TextField
                          id="purchase_price"
                          name="purchase_price"
                          label="Pusales_pricerchase Price"
                          className={classes.textField}
                          defaultValue={'111.00'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="purchase_price_devisor"
                          name="purchase_price_devisor"
                          label="Purchase Price Devisor"
                          className={classes.textField}
                          defaultValue={'1'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="sales_price"
                          name="sales_price"
                          label="Sales Price"
                          className={classes.textField}
                          defaultValue={'222.00'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                      </CardContent>
                    </Card>
                </div>
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service level Controls
                        </Typography>
                        
                        <TextField
                          id="carrying_cost"
                          name="carrying_cost"
                          label="Carrying Cost"
                          className={classes.textField}
                          defaultValue={'0'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                        <TextField
                          id="handling_cost"
                          name="handling_cost"
                          label="Handling Cost"
                          className={classes.textField}
                          defaultValue={'0.00'}
                          disabled
                          margin="dense"
                          fullWidth
                        />
                      </CardContent>
                    </Card>
                </div>
                <div className="column-276">
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service level Controls
                        </Typography>
                        
                        <TextField
                          id="daily_profile"
                          name="daily_profile"
                          label="Daily Profile"
                          type="file"
                          className={classes.textField}
                          margin="dense"
                          fullWidth
                        />
                      </CardContent>
                    </Card>
                </div>
              </div>

            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

SimpleApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(SimpleApp));