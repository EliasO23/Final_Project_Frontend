import { User } from '../shared/interfaces/User.interfaces';
import { useEffect, useState } from "react";
import UserServices from "../shared/services/userServices";
import styles from './ListUsers.module.css';

const ListUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userService = new UserServices();
                const usersData = await userService.listUsers();
                setUsers(usersData);
            } catch (err) {
                setError((err as any).message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Cargando usuarios...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.container}>
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.disabled ? "Deshabilitado" : "Activo"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers