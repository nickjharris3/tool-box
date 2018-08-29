import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
  });

class FAB extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
    );
  }
};

FAB.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object,
  };

export default withStyles(styles)(FAB);