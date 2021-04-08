import './index.scss';
import ColoursList from '../ColoursList';

const Colors = ({ colors, delColorHandler = f => f }) => {
    return (
        <section className="App__colors colors">
            {
                colors.length ?
                <ColoursList colors={colors} delColorHandler={delColorHandler}/> :
                <p className="colors__empty">No colours yet...</p>
            }
        </section>
    );
};

export default Colors;