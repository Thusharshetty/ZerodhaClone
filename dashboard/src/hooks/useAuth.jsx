import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const[username, setUsername] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios
      .get("http://localhost:3002/auth/verify", {
        withCredentials: true, // sends cookie with request
      }).then((res)=>{
        if(res.data.status){
             // Token is valid
            setIsAuthenticated(true);
            setUsername(res.data.user);
        }else{
            setIsAuthenticated(false);
        }
         setLoading(false);
      }).catch(()=>
      {
        setIsAuthenticated(false);
        setLoading(false);
      });
    },[]);

    return { isAuthenticated, username, loading };
};

export default useAuth;