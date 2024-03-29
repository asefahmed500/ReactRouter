import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h2>Oppps</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found </h3>
                    <p>Go back whaere you from </p>
                    <Link to="/">Home</Link>
                </div>
            }
        </div>
    );
};

export default Errorpage;