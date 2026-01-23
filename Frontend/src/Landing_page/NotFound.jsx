import {Link} from 'react-router-dom';
function NotFound() {
    return ( 
        <div className="container p-5 text-center mb-5">
            <div className="row">
                <h1 className="mt-5">404 Not Found</h1>
                <p className=' text-danger text-opacity-75'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}>Go Home</Link>
            </div>

        </div>
     );
}

export default NotFound;