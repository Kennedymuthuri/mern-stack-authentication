import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[pass, setPass]=useState('');

    const navigate=useNavigate();

    const handleName= function(e){
        setName(e.target.value);
    }
    const handleEmail= function(e){
        setEmail(e.target.value);
    }
    const handlePass= function(e){
        setPass(e.target.value);
    }

    const handleSubmit= function(e){
        e.preventDefault();
        console.log({name,email,pass});
        const newAuth=({
            name:name,
            email:email,
            pass:pass
        });
        axios.post('http://localhost:8081/register',newAuth)
        navigate('/login');
    }
    return ( 
        <div className="container">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="Username" value={name} onChange={handleName}/>
                <input required type="email" placeholder="Email address" autoComplete="off"value={email} onChange={handleEmail}/>
                <input required type="password" placeholder="*****" value={pass} onChange={handlePass}/>
                <button>Register</button>
            </form>
            <h4 style={{cursor:'pointer'}}>Have an account? Login</h4>
        </div>
     );
}
 
export default Register;