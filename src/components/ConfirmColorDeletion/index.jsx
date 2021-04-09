import { useEffect } from 'react';
import './index.scss';

const ConfirmColorDeletion = ({ confirmationToggle =f => f }) => {

    const outsideListener = (e) => {
        confirmationToggle(e);
    }

    useEffect(() => {
        document.addEventListener('click', outsideListener);
        return function removeListener() {
            document.removeEventListener('click', outsideListener)
        }
    }, []);

    return (
        <ul className="confirm-deletion">
            <li id="cancel" className="confirm-deletion__item confirm-deletion__item--cancel">Cancel</li>
            <li id="delete" className="confirm-deletion__item confirm-deletion__item--delete">Delete</li>
        </ul>
    );
};

export default ConfirmColorDeletion;