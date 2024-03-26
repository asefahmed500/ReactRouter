/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const User = ({user}) => {
    const UserStyle = {
        border : '2px solid black',
        padding : '20px',
        borderRadius : '15px'
        
    }
    // eslint-disable-next-line react/prop-types
    const {id,name,email,phone} = user;
    return (
        <div style={UserStyle}>
          <h3>{name}</h3>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>   
          <Link to={`/user/${id}`}>Show Details</Link>
          <Link to={`/user/${id}`}>
            <button>click me</button>
          </Link>
        </div>
    );
};

export default User;