import './index.scss';

const DeleteColor = ({ colorId, delColorHandler = f => f }) => {
    return (
        <div className="delete-color" onClick={() => delColorHandler(colorId)}></div>
    );
};

export default DeleteColor;