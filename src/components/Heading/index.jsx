import './index.scss';

const Heading = ({headingLevel, headingText, headingClassName}) => {
    const HeadingTag = `h${headingLevel}`;
    return (
        <HeadingTag className={`heading ${headingClassName}`}>{headingText}</HeadingTag>
    );
};

export default Heading;