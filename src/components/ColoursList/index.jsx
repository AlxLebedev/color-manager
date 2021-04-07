import Color from '../Color';
import './index.scss';

const ColoursList = ({ colors = [], delColorHandler = f => f }) => {
    return (   
        colors.length === 0 ?
        <p className="App__colours-list App__colours-list--empty">No colours yet...</p> :
        <ul className="App__colours-list colours-list">
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