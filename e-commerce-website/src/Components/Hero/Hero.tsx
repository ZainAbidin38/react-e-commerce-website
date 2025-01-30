

function Hero() {

    return (
        <>
            <section className="hero">
                <div className="intro">
                    <h2 className="intro-title">Welcome to Kick It</h2>
                    <p className="intro-text">Where Every Step Begins with Style</p>
                </div>
                <div className="intro-btn" title="Learn More">
                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>
                <a href='#products' title="Jump to Products">
                    <div className="arrow">
                        <div className="arrow-top"></div>
                        <div className="arrow-bottom"></div>
                    </div>
                </a>
            </section>
        </>
    )
}

export default Hero