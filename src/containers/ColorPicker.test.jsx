import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker container', () => {
    it('changes the color', async () => {
        render(<ColorPicker />);

        const colorInput = await screen.findByTestId('colorInput');
        const colorDisplay = await screen.findByTestId('colorDisplay');

        fireEvent.change(colorInput, {
            target: { value: '#000000' }
        })

        expect(colorDisplay).toHaveStyle({ backgroundColor: '#000000' })

    })

    it('clicks "undo" button', async () => {
        render(<ColorPicker />);

        const colorInput = await screen.findByTestId('colorInput');
        const undoButton = await screen.findByText('undo');

        fireEvent.change(colorInput, {
            target: { value: '#000000' }
        })


        fireEvent.change(colorInput, {
            target: { value: '#FFFFFF' }
        })

        fireEvent.click(undoButton);

        const colorDisplay = await screen.findByTestId('colorDisplay');

        expect(colorDisplay).toHaveStyle({ backgroundColor: '#000000' })

    });

    it('clicks "redo" button', async () => {
        render(<ColorPicker />);

        const colorInput = await screen.findByTestId('colorInput');
        const undoButton = await screen.findByText('undo');
        const redoButton = await screen.findByText('redo');

        fireEvent.change(colorInput, {
            target: { value: '#000000' }
        })


        fireEvent.change(colorInput, {
            target: { value: '#FFFFFF' }
        })

        fireEvent.click(undoButton);
        fireEvent.click(redoButton);

        const colorDisplay = await screen.findByTestId('colorDisplay');

        expect(colorDisplay).toHaveStyle({ backgroundColor: '#FFFFFF' });
    })
})