import { useRef } from 'react';
import Button from '../Button';
import './index.scss';

const AddColorForm = ({ addColorHandler }) => {
    const colorName = useRef();
    const colorCode = useRef();
    return (
        <form className="App__add-color-form add-color-form">
            <label className="add-color-form__name-input-label" htmlFor="color-name">Color name</label>
            <input className="add-color-form__name-input" type="text" id="color-name" ref={colorName} placeholder="For example - deep purple"/>
            <input className="add-color-form__color-picker" type="color" ref={colorCode} defaultValue="#D1A1FF"/>
            <Button
                buttonClassName="add-color-form__add-button button"
                buttonText="add"
                buttonHandler={() => addColorHandler(
                    colorName.current.value ? colorName.current.value : colorName.current.placeholder,
                    colorCode.current.value
                )}
            />
        </form>
    );
};

export default AddColorForm;