import React from 'react';
import useRecord from '../hooks/useRecord'

export const ColorPicker = () => {
    const { current, undo, redo, record } = useRecord('#FF0000');

    return (
        <>
            <button onClick={undo}>undo</button>
            <button onClick={redo}>redo</button>
            <input
                data-testid="colorInput"
                type="color"
                value={current}
                onChange={({ target }) => record(target.value)} />
            <div
                data-testid="colorDisplay"
                style={{ backgroundColor: current, width: '10rem', height: '10rem' }}>
            </div>
        </>
    );
}

export default ColorPicker;
