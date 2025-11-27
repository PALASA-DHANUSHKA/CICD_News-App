import React, { useEffect, useState } from 'react';
import { fetchUserData } from "../services/UserService";

function UserDetails() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData().then(setUserData);
  }, []);

  console.log(userData);

  return (
    <div>UserDetails</div>
  );
}

export default UserDetails;
