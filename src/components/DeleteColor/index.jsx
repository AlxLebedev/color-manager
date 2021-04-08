import { useState } from 'react';
import ConfirmColorDeletion from '../ConfirmColorDeletion';
import './index.scss';

const DeleteColor = ({ colorId, delColorHandler = f => f }) => {
    const [state, setState] = useState({ confirmationMenuOpened: false });

    const confirmationToggle = () => {
        const isConfirmationMenuOpened = state.confirmationMenuOpened;
        setState({ confirmationMenuOpened: !isConfirmationMenuOpened })
    }
    return (
        <div className="delete-color" onClick={() => { confirmationToggle() }}>
            {
                state.confirmationMenuOpened ?
                <ConfirmColorDeletion colorId={colorId} confirmationToggle={confirmationToggle} delColorHandler={delColorHandler}/> : ''
            }
        </div>
    );
};

export default DeleteColor;