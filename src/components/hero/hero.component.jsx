import "./hero.css"
import ctaExperiences from "./../../assets/images/cta-experiences.png"

function Hero() {
    return (
        <div className="hero">
            <img alt="Experiences" className="hero__experiences-image" src={ctaExperiences} />
            <div className="hero__cta">
                <h1 className="hero__heading">Online Experiences</h1>
                <p className="hero_paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}

export default Hero