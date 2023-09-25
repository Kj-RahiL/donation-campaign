import { NavLink } from "react-router-dom";



const Navbar = () => {

    const list = <>
        <li ><NavLink to='/'
        
        style={({ isActive }) => {
            return {
              color: isActive ? "#FF444A" : "black",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "white" : "white",
              fontWeight: isActive ? "bold" : ""
            };
          }}
        >Home</NavLink></li>

        <li><NavLink to='/donation' 
        style={({ isActive }) => {
            return {
              color: isActive ? "#FF444A" : "black",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "white" : "white",
              fontWeight: isActive ? "bold" : ""
            };
          }}
          >Donation</NavLink></li>

        <li><NavLink to='/statistics'
        style={({ isActive }) => {
            return {
              color: isActive ? "#FF444A" : "black",
              textDecoration: isActive ? "underline" : "none",
              backgroundColor: isActive ? "white" : "white",
              fontWeight: isActive ? "bold" : ""
            };
          }}
        >Statistics</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {list}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <img src="https://i.ibb.co/R2Ghnk6/Logo.png" alt="logo" />

                </div>
            </div>
            <div className="navbar-end">
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>

                <div className=" lg:hidden">
                    <img src="https://i.ibb.co/R2Ghnk6/Logo.png" alt="logo" />

                </div>
            </div>

        </div>
    );
};

export default Navbar;