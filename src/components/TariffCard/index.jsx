import "./index.scoped.css";

function TariffCard(props) {
    return (
        <div className="tariff__card" style={{background: props.color}}>
            <h3 className="card__title" >{props.title}</h3>
            <div className="line"></div>
            <div className="main__part">
                <div className="card__text">{props.text}</div>
                <div className="card__price">{props.price}</div>
            </div>
        </div>
    );
}

export default TariffCard;