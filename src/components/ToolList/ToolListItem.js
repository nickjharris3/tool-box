import React from 'react';
import { connect } from 'react-redux';
import { removeTool } from '../../actions/tools';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    }
  });

const ToolListItem = ({ dispatch, id, name, description, websiteURL, imgURL, props }) => (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{websiteURL}</p>
        <p>{imgURL}</p>
        <Button variant="fab" aria-label="Delete" onClick={() => {
            dispatch(removeTool({ id }))
        }}>
            <DeleteIcon />
        </Button>
    </div>
);

ToolListItem.propTypes = {
    classes: PropTypes.object,
  };

export default connect()(ToolListItem); withStyles(styles)(ToolListItem);