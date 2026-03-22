import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



function SignUp() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        username: "",
        password: ""
    });
    const {email, username, password} = input;
    const handleError=(error)=>{
        toast.error(error.response.data.message, {
            position:"top-center",
            autoClose:5000,
            hideProgressBar:false,
        });
    };
    const handleSuccess=(msg)=>{
        toast.success(msg, {
            position:"top-center",});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, input,{
                withCredentials:true,
            });
            if(res.data.success){
                handleSuccess(res.data.message);
                navigate("/login");
            }else{
                handleError(res.data.message);
            }

        }catch(error){
            handleError(error);
        }
        setInput({
            email: "",
            username: "",
            password: ""
        });
    }
    return (
        <div className="container mt-3 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-center mb-3 text-primary">Sign Up</h1>
            <form className="row g-3 border mt-3 rounded p-4 shadow-lg border-primary-subtle" style={{ maxWidth: "750px", width: "100%" }} onSubmit={handleSubmit}>
                <div className="col-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your email"
                    value={email} onChange={(e)=>setInput({...input,email:e.target.value})}  required/>
                </div>
                <div className="col-12">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" placeholder="Enter your user name" value={username} onChange={(e)=>setInput({...input,username:e.target.value})} required />
                </div>
                <div className="col-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e)=>setInput({...input,password:e.target.value})} required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                <div className="col-12">
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default SignUp;