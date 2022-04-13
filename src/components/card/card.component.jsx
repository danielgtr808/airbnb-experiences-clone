import "./card.css"
import cardStaticPhoto from "./../../assets/images/card-static-photo.png"

function Card() {
    return (
        <div className="card">
            <span className="card__status">SOLD OUT</span>
            <img alt="" className="card__image" src={cardStaticPhoto} />
            <div className="card__experience-details">
                <div className="card__rating-row">
                    <div className="star-icon"></div>
                    <span className="card__rating">5.0</span>
                    <span>(6)</span>
                    <div className="dot"></div>
                    <span>USA</span>
                </div>
                <span>Life lessons with Katie Zaferes</span>
                <span><span className="card__price">From $136</span> / person</span>
            </div>
        </div>
    )
}

export default Card