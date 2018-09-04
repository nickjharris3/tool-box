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
          id="with-placeholder"
          label="Name"
          placeholder="Slack"
          fullWidth
          margin="normal"
        />
        <TextField
          id="with-placeholder"
          label="Description"
          placeholder="A cloud-based team collaboration tool."
          fullWidth
          margin="normal"
        />
        <TextField
          id="with-placeholder"
          label="Website URL"
          placeholder="https://slack.com"
          fullWidth
          margin="normal"
        />
        <TextField
          id="with-placeholder"
          label="Image URL"
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