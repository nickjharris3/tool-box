import React from 'react';
import { connect } from 'react-redux';
import { checkPropTypes } from 'prop-types';

const ToolList = (props) => (
    <div>
        <h1>Tool List</h1>
        {props.tools.length}
    </div>

);

const mapStateToProps = (state) => {
    return {
        tools: state.tools,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ToolList);