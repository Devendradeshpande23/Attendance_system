import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
const navigate = useNavigate();
const name = localStorage.getItem("name");
const [attendance, setAttendance] = useState([]);


useEffect(() => {
const id = JSON.parse(atob(localStorage.getItem("token").split('.')[1])).id;


axios.get(`http://localhost:5000/attendance/${id}`).then(res => setAttendance(res.data));
}, []);


const logout = () => {
localStorage.clear();
navigate('/');
};


return (
<div className="min-h-screen bg-gray-900 text-white p-10">
<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-bold">Welcome, {name}</h1>
<button onClick={logout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
</div>


<h2 className="text-2xl mb-4 font-semibold">Your Attendance</h2>


<div className="bg-gray-800 p-6 rounded-xl">
{attendance.map(a => (
<p key={a.id} className="border-b border-gray-700 py-2">{a.date} — {a.status}</p>
))}
</div>
</div>
);
}