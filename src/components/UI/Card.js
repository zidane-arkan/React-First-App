import './Card.css';

const Card = (props) => {
    const classNames = `card ${props.className}`;
    const idNames = `${props.id}`;
    return (
        <div id={idNames} className={classNames}>
            {props.children}
        </div>
    );
};

export default Card;