import './index.scss';

const AddColorForm = () => {
    return (
        <form className="App__add-color-form add-color-form">
            <label className="add-color-form__name-input-label" for="color-name">Color name</label>
            <input className="add-color-form__name-input" type="text" id="color-name" placeholder="For example - deep purple"/>
            <input className="add-color-form__color-picker" type="color" defaultValue="#D1A1FF"/>
            <button className="add-color-form__add-button" type="button">ADD</button>
        </form>
    );
};

export default AddColorForm;