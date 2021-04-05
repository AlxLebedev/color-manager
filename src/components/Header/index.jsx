import logo from '../../images/logo.svg';
import Heading from '../Heading';
import './index.scss';

const Header = () => {
    return (
        <header className="App__header header">
            <img src={logo} className="header__logo" alt="logo" />
            <Heading headingLevel='1' headingText='Color Manager' headingClassName='header__title' />
        </header>
    );
};

export default Header;