import React from 'react';

const ToolListItem = ({ name, description, websiteURL, imgURL }) => (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{websiteURL}</p>
        <p>{imgURL}</p>
    </div>
);

export default ToolListItem;