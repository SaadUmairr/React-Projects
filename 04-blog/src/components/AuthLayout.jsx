import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication=true }) {
    const navigate = useNavigate();
    const [loader, setLoadere] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if(authentication && authStatus !== authentication)
            navigate("/login");
        else if(!authentication && authStatus !== authentication)
            navigate("/");
        setLoadere(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>LOADING.....</h1> :  <>{children}</>
}
