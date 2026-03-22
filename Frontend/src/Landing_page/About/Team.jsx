function Team() {
    return (
        <div className="container">
            <div className="row p-3 p-md-5 border-top">
                <h1 className="text-center mt-3">People</h1>
            </div>
            <div className="row px-3 px-md-5 pb-5 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                <div className="col-md-6 px-3 px-md-5 text-center">
                    <img 
                        src="media/images/me.png" 
                        alt="founder" 
                        className="rounded-circle w-75 w-md-50" 
                    />
                    <h4 className="mt-4">Thushar Shetty</h4>
                    <h6>Founder & CEO</h6>
                </div>
                <div className="col-md-6 px-3 px-md-5 fs-5 mt-4 mt-md-0">
                    <p>
                        I am a Computer Science student who enjoys solving problems and building things that matter. From developing web applications to exploring AI-based solutions, 
                        I am always looking for ways to apply my knowledge in practical scenarios.


                    </p>
                    <p>
                       I believe in continuous learning, discipline, and pushing my limits every day—both in tech and in life.
                    </p>
                    <p>Consistency is my superpower.</p>
                    <p>
                        Connect on <a href="#" style={{ textDecoration: "none" }}>Homepage</a> / 
                        <a href="#" style={{ textDecoration: "none" }}> TradingQnA</a> / 
                        <a href="#" style={{ textDecoration: "none" }}> Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;