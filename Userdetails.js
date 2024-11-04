
        import React, { useState, useEffect } from 'react';
        import { useParams } from 'react-router-dom';
        
        export default function Userdetails() {
            const { userId } = useParams(); // Get userId from URL
            const [user, setUser] = useState(null);
        
            useEffect(() => {
                const fetchUserDetails = async () => {
                    try {
                        const response = await fetch(`http://localhost:4000/inbox/${userId}`);
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        const result = await response.json();
                        setUser(result); // Set the user data
                    } catch (error) {
                        console.error('Error fetching user details:', error);
                        alert('An error occurred while fetching user details.');
                    }
                };
        
                fetchUserDetails();
            }, [userId]); // Fetch user details when userId changes
        
            if (!user) {
                return <p>Loading...</p>; // Show loading state if user data is not yet fetched
            }
        
            return (
                <div className="user-details">
                    <div className="container">
                        <h3>User Details</h3>
                        <table className="table table-bordered table-secondary table-hover p-5">
                            <tbody>
                            
                                <tr>
                                    <th>ID</th>
                                    <td>{user.Id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{user.Name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.Email}</td>
                                </tr>
                                <tr>
                                    <th>Phone Number</th>
                                    <td>{user.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>{user.Subject}</td>
                                </tr>
                                <tr>
                                    <th>Message</th>
                                    <td>{user.Message || 'No message available.'}</td>
                        
                                </tr>
                                   
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
