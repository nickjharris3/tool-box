import tools from "../reducers/tools";

// Get visible tools
export default (tools, { text, sortBy }) => {
    return tools.filter((tool) => {
        const textMatch = tool.name.toLowerCase().includes(text.toLowerCase());

    return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name < b.name ? 1 : -1;
        }
    })
};