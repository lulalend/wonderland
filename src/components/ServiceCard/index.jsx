import "./index.scoped.css";

function ServiceCard(props) {
    var image = require(`assets/${props.content.url}`)
    console.log(image)
    return (
        <div className="service__card">
            <div className="card__img" style={{backgroundImage: `url(${image})`}}></div>
            <h3 className="card__title">{props.content.title}</h3>
            <div className="line"></div>
            <div className="card__text">{props.content.text}</div>
        </div>
    );
}

export default ServiceCard;