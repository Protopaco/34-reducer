import React, { useState } from 'react';

export const useRecord = (init) => {
    const [before, setBefore] = useState([]);
    const [current, setCurrent] = useState(init);
    const [after, setAfter] = useState([]);

    const undo = () => {
        setAfter(after => [current, ...after]);
        setCurrent(before[before.length - 1]);
        setBefore(before => before.slice(0, -1));
    };

    const redo = () => {
        setBefore(before => [...before, current]);
        setCurrent(after[0]);
        setAfter(after => after.slice(1));
    };

    const record = val => {
        setBefore(before => [...before, current]);
        setCurrent(val);
    };

    return {
        undo,
        record,
        redo,
        current,
    };
};

export default useRecord;
