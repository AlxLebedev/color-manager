import './index.scss';

const ConfirmColorDeletion = ({ colorId, confirmationToggle, delColorHandler = f => f}) => {
    return (
        <ul className="confirm-deletion">
            <li className="confirm-deletion__item confirm-deletion__item--cancel" onClick={() => confirmationToggle()}>Cancel</li>
            <li className="confirm-deletion__item confirm-deletion__item--delete" onClick={() => delColorHandler(colorId)}>Delete</li>
        </ul>
    );
};

export default ConfirmColorDeletion;