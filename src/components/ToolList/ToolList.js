import React from 'react';
import { connect } from 'react-redux';
import ToolListItem from './ToolListItem';
import selectTools from '../../selectors/tools';

const ToolList = (props) => (
    <div>
        <h1>Tool List</h1>
        {props.tools.map((tool) => {
            return <ToolListItem key={tool.id}{...tool}/>
        })}
    </div>

);

const mapStateToProps = (state) => {
    return {
        tools: selectTools(state.tools, state.filters)
    };
};

export default connect(mapStateToProps)(ToolList);