import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="text-center h-[80vh] flex flex-col items-center justify-center space-y-2">
            <h2 className=" text-4xl font-bold">Oopss!!!</h2>
            <h2 className=" text-3xl font-semibold">No Data Found</h2>
            <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default ErrorElement;