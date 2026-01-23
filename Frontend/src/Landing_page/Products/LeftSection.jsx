

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-7 p-5 ">
                    <img src={imageUrl} alt="altImage" style={{width:"85%"}}/>
                </div>
                <div className="col-5 mt-5 p-5">
                    <h2 className="text-muted mb-4">{productName}</h2>
                    <p className="text-muted fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={tryDemo} style={{ textDecoration: "none",paddingRight:"75px",display:"inline-block"}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                       <a href={learnMore} style={{ textDecoration: "none" }}>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay} style={{paddingRight:"35px",display:"inline-block"}} ><img src="media/images/googlePlayBadge.svg" alt="playstore" /></a>
                       <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="appstore" /></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LeftSection;