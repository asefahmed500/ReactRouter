import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const post =useLoaderData();
    const navigate = useNavigate();
    const {id,title,body}= post;

    const handleGoBack = () =>{
        navigate(-1); 

    }

    return (
        <div>
            <h2>Post detail</h2>
            <div>
                <h3>Post detail about:{id}</h3>
                <p>Title: {title}</p>
                <p><small>{body}</small></p>
                <button onClick={handleGoBack}>Go back </button>
            </div>
        </div>
    );
};

export default PostDetail;