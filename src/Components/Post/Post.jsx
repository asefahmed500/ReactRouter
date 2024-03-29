/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    const UserStyle = {
        border : '2px solid black',
        padding : '20px',
        borderRadius : '15px'
        
    }
    const handleShowDetail = () =>{
        navigate(`/post/${id}`)

    }

    return (
        <div style={UserStyle}>
            <h4>Post  ID:{id}</h4>
            <p>Post title : {title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show detals</button></Link>
            <button onClick={handleShowDetail}>Click to show details</button>
        </div>
    );
};

export default Post;