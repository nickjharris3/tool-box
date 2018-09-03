// Tools Reducer

const toolsReducerDefaultState = [];

export default (state = toolsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TOOL':
      return [
        ...state,
        action.tool
      ];
    case 'REMOVE_TOOL':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TOOL':
      return state.map((tool) => {
        if (tool.id === action.id) {
          return {
            ...tool,
            ...action.updates
          };
        } else {
          return tool;
        };
      });
    default:
      return state;
  }
};
