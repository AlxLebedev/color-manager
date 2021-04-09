import { useState } from 'react';
import ConfirmColorDeletion from '../ConfirmColorDeletion';
import './index.scss';

const DeleteColor = ({ colorId, delColorHandler = f => f }) => {
    const [state, setState] = useState({ confirmationMenuOpened: false });

    const confirmationToggle = (e) => {
        const { target } = e;
        if (target.id === 'delete') {
            delColorHandler(colorId);
        }
        const isConfirmationMenuOpened = state.confirmationMenuOpened;
        setState({ confirmationMenuOpened: !isConfirmationMenuOpened })
    }
    return (
        <div className="delete-color" onClick={(e) => { confirmationToggle(e) }}>
            {
                state.confirmationMenuOpened ?
                <ConfirmColorDeletion confirmationToggle={confirmationToggle} /> : ''
            }
        </div>
    );
};

export default DeleteColor;