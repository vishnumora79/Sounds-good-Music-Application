import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // const response = await axios.post("http://localhost:3000/api/auth/logout");
            // console.log(response.data);
            localStorage.removeItem("token");
            navigate("/login");
        }
        catch(error) {
            console.error(error);
        }
    };

    return (
        <button type="submit" onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700">Logout</button>
    );
};

export default Logout;