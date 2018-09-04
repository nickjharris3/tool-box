import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

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

const ToolListFilters = (props) => (
        <form noValidate autoComplete="off">
            <TextField
                id="search"
                label="Search tools"
                type="search"
                margin="normal"
                value={props.filters.text}
                onChange={(e) => {
                  props.dispatch(setTextFilter(e.target.value))
              }}
            />
        </form>
  );

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

ToolListFilters.propTypes = {
  classes: PropTypes.object,
};

export default connect(mapStateToProps)(ToolListFilters); withStyles(styles)(ToolListFilters);