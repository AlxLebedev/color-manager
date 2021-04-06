import './index.scss';

const Button = ({ buttonClassName = "button", buttonType = "button", buttonHandler = f => f, buttonText = "button" }) => {
    return (
        <button className={buttonClassName} type={buttonType} onClick={buttonHandler}>{buttonText}</button>
    );
};

export default Button;