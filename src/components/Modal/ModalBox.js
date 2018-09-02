import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class ModalBox extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
    <div>
        <Typography variant="title" id="modal-title">
            Add New Tool
        </Typography>  
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="full-width"
          label="Name"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Slack"
        //   helperText="Slack"
          fullWidth
          margin="normal"
        />
        <TextField
          id="full-width"
          label="Description"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="A cloud-based team collaboration tool."
        //   helperText="Full width!"
          fullWidth
          margin="normal"
        />
        <TextField
          id="full-width"
          label="Website URL"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="https://slack.com"
        //   helperText="Full width!"
          fullWidth
          margin="normal"
        />
        <TextField
          id="full-width"
          label="Image URL"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="data:image/png;base64,iVBORw0KGgoAAA..."
          helperText="Right click image then 'Copy Image Address'"
          fullWidth
          margin="normal"
        />
      </form>
    </div>
    );
  }
}

ModalBox.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalBox);