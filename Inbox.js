
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inbox() {
   
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const handleGoBack = () => {
        window.history.back(); // Navigate back to the previous page
      };
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:4000/inbox');

            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the response as JSON
            const result = await response.json();
            console.log("Fetched users:", result); // Debugging: Log the response

            // If result is an object, convert it to an array
            const userArray = Array.isArray(result) ? result : [result];

            // Set users
            setUsers(userArray);
        } catch (error) {
            console.error('Error fetching users:', error);
            alert('An error occurred while fetching users.');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRowClick = (userId) => {
       
        navigate(`/inbox/${userId}`);
    };


    return (
        <div className="inbox">
            <div className="container-fluid">
                <section className="section-card-shadow m-3">
                    <div className="card p-3 no-border dropdown">
                        <h5 className="card-header no-border">Inbox
                        <span className='float-end' onClick={handleGoBack} ><i class="fa-solid fa-circle-xmark"></i></span></h5>
                        <div className="card-body">
                            <table id="datatable" className="table table-striped hover">
                                <thead>
                                    <tr>
                                 
                                    </tr>
                                </thead>
                                {/* <tbody>
                                    {Array.isArray(users) && users.length > 0 ? (
                                        users.map((user) => (
                                            <tr key={user.Id}>
                                                <td>{user.Id}</td>
                                                <td>{user.Name}</td>
                                                <td>{user.Email}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" style={{ textAlign: 'center' }}>
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody> */}

 <tbody>
                                    {users.map((user) => (
                                        <tr key={user.Id} onClick={() => handleRowClick(user.Id)} style={{ cursor: 'pointer' }}>
                                            {/* <td>{user.Id}</td> */}
                                            {/* <td>{user.Name}</td> */}
                                            {/* <td>{user.Email}</td> */}
                                            <td className='fs-5 fw-semibold'><i class="fa-light fa-star px-3 text-secondary"></i>{user.Message}</td>
                                            <td className='fs-5 fw-semibold'> {user.Subject}</td>
                                            {/* <td className='fs-5 fw-semibold text-secondary'>{user.Email}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            







                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}