import './index.scss';

const Color = ({ colorName = 'default', colorCode = '#000000', colorId = '0', delColorHandler = f => f }) => {
    const exapmpleStyle = {
        backgroundColor: colorCode
    };
    return (
        <div className="color">
            <div className="color__del" onClick={() => delColorHandler(colorId)}></div>
            <h3 className="color__name">{colorName}</h3>
            <p className="color__code">{colorCode}</p>
            <div className="color__expample" style={exapmpleStyle}></div>
        </div>
    );
};

export default Color;