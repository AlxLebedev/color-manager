import './index.scss';

const Heading = ({headingLevel = "1", headingText = "heading", headingClassName = "heading"}) => {
    const HeadingTag = `h${headingLevel}`;
    return (
        <HeadingTag className={`heading ${headingClassName}`}>{headingText}</HeadingTag>
    );
};

export default Heading;