import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


const handleRegister = async () => {
await axios.post("http://localhost:5000/auth/register", { name, email, password });
navigate("/");
};


return (
<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
<div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
<h1 className="text-3xl mb-6 text-center font-bold">Create Account</h1>


<input className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
<input className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
<input type="password" className="w-full p-3 mb-4 rounded bg-gray-700" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />


<button onClick={handleRegister} className="w-full bg-green-600 hover:bg-green-700 p-3 rounded">Register</button>
</div>
</div>
);
}