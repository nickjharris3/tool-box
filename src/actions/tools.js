import uuid from 'uuid';

// ADD_TOOL
export const addTool = (
    { 
        name = '', 
        description = '', 
        websiteUrl = '', 
        imgUrl = ''
    } = {}
) => ({
    type: 'ADD_TOOL',
    tool: {
        id: uuid(),
        name,
        description,
        websiteUrl,
        imgUrl
    }
});

// REMOVE_TOOL
export const removeTool = ({ id } = {}) => ({
    type: 'REMOVE_TOOL',
    id
});

// EDIT_TOOL
export const editTool = (id, updates) => ({
    type: 'EDIT_TOOL',
    id,
    updates
});