import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(Boolean);


    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            console.log("No hay token");
            setIsAuthenticated(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.ok) {
                console.log("token valido");
                setIsAuthenticated(true);
            } else {
                console.log("token invalido");
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.log("Error");
            setIsAuthenticated(false);
        }
    };

    verifyToken();


    return isAuthenticated ? true : <Navigate to={'/login'}/>;
}
export default ProtectedRoute