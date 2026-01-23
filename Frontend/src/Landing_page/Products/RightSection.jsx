function RightSection({ imageUrl, productName, productDescription,  link }) {
    return ( 

        <div className="container">
            <div className="row  p-5">
                <div className="col-5 mt-5 p-5">
                    <h2 className="text-muted mb-4">{productName}</h2>
                    <p className="text-muted fs-5">{productDescription}</p>
                    <div className="mt-4">
                        <a href={link} style={{ textDecoration: "none",paddingRight:"75px",display:"inline-block"}}>{link}<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-7 p-5 ">
                    <img src={imageUrl} alt="altImage" style={{width:"85%"}}/>
                </div>
            </div>

        </div>
     );
}

export default RightSection;