import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handleLogin = async () => {
try {
const res = await axios.post("http://localhost:5000/auth/login", { email, password });
localStorage.setItem("token", res.data.token);
localStorage.setItem("name", res.data.name);
navigate("/dashboard");
} catch (err) {
alert("Invalid Credentials");
}
};


return (
<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
<div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
<h1 className="text-3xl mb-6 text-center font-bold">Student Login</h1>


<input className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
<input type="password" className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />


<button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded">Login</button>


<p onClick={()=>navigate('/register')} className="mt-4 text-center cursor-pointer text-blue-400">Create Account</p>
</div>
</div>
);
}