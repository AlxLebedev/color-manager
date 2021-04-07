import './index.scss';

const ColoursList = ({ colors = [] }) => {
    return (
        <>
            {
                colors.length === 0 ? <p className="App__colours-list App__colours-list--empty">No colours yet...</p> :
                <ul className="App__colours-list colours-list">
                    {
                        colors.map((color, index) => {
                            return (
                                <li key={index}>{color.colorName}</li>
                            )
                        })
                    }
                </ul>
            }
        </>
    );
};

export default ColoursList;