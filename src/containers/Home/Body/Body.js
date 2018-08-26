import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
  });

function Body(props) {
    const { classes } = props;
    return (
        <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Body);