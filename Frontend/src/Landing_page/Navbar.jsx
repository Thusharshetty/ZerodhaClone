import {Link} from 'react-router-dom';


function Navbar() {
    return ( 
    
    <nav class="navbar navbar-expand-lg border-bottom sticky-lg-top " style={{backgroundColor:"#fff"}}>
  <div class="container-fluid d-flex justify-content-around">
    <Link class="navbar-brand" to="/">
       <img src="media/images/logo.svg" alt="logo"  style={{width:"25%"}}/>
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent">
      <form role="search">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item mx-2">
          <Link class="nav-link active" to="/about">About</Link>
        </li>
        <li class="nav-item mx-2 ">
          <Link class="nav-link active" to="/product">Products</Link>
        </li>
        <li class="nav-item mx-2 ">
          <Link class="nav-link active" to="/pricing">Pricing</Link>
        </li>
        <li class="nav-item mx-2">
          <Link class="nav-link active" to="/support">Support</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>
        
);
}

export default Navbar;