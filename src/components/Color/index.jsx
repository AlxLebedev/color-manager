import './index.scss';

const Color = ({ colorName = 'default', colorCode = '#000000', colorId = '0', delColorHandler = f => f }) => {
    return (
        <div className="color">
            <div className="color__del" onClick={() => delColorHandler(colorId)}></div>
            <h3 className="color__name">{colorName}</h3>
            <p className="color__code">{colorCode}</p>
        </div>
    );
};

export default Color;