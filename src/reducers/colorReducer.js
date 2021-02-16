export const initialState = {
    currentColor: "#0000FF",
    colorHistory: [],
    colorFuture: []
};

export default function reducer(state, action) {

    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                colorHistory: [...state.colorHistory, state.currentColor],
                currentColor: action.payload,
                colorFuture: []
            };
        case 'UNDO_COLOR':
            return {
                colorFuture: [state.currentColor, state.future],
                currentColor: state.colorHistory[state.colorHistory.length - 1],
                colorHistory: state.colorHistory.slice(state.colorHistory.length - 1),
            };
        case 'REDO_COLOR':
            return {
                colorHistory: [...state.colorHistory, state.currentColor],
                currentColor: state.colorFuture[0],
                colorFuture: state.colorFuture.slice(state.colorFuture.length - 1)
            }
        default:
            return state;
    }
}