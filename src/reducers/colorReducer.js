export const initialState = {
    currentColor: "#0000FF",
    colorHistory: [],
    colorFuture: []
};

export default function reducer(state, action) {

    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                colorHistory: [...state.colorHistory, state.currentColor],
                currentColor: action.payload,
            };
        case 'UNDO_COLOR':
            return {
                ...state,
                colorFuture: [state.currentColor, ...state.colorFuture],
                currentColor: state.colorHistory[state.colorHistory.length - 1],
                colorHistory: state.colorHistory.slice(0, -1),
            };
        case 'REDO_COLOR':
            return {
                ...state,
                colorHistory: [...state.colorHistory, state.currentColor],
                currentColor: state.colorFuture[0],
                colorFuture: state.colorFuture.slice(1)
            }
        default:
            return state;
    }
}
