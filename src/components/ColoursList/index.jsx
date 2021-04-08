import Color from '../Color';
import './index.scss';

const ColoursList = ({ colors = [], delColorHandler = f => f }) => {
    return (   
        <ul className="colours-list">
            {
                colors.map((color, index) => {
                    return (
                        <li className="colours-list__item" key={index}>
                            <Color delColorHandler={delColorHandler} {...color}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ColoursList;