import React, { useReducer } from 'react';
// import useRecord from '../hooks/useRecord'
import reducer, { initialState } from '../reducers/colorReducer'

export const ColorPicker = () => {
    // const { current, undo, redo, record } = useRecord('#FF0000');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (type, payload) => {
        dispatch({
            type,
            payload
        })
    }

    return (
        <>
            <button
                onClick={() => handleChange('UNDO_COLOR', "")}>
                undo
            </button>
            <button
                onClick={() => handleChange('REDO_COLOR', "")}>
                redo
            </button>
            <input
                data-testid="colorInput"
                type="color"
                value={state.currentColor}
                onChange={({ target }) => handleChange('CHANGE_COLOR', target.value)} />
            <div
                data-testid="colorDisplay"
                style={{ backgroundColor: state.currentColor, width: '10rem', height: '10rem' }}>
            </div>
        </>
    );
}

export default ColorPicker;
