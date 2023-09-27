import { useState } from "react";


const Banner = (props) => {
const [value, setValue] = useState('')

    const handleChange = (e) =>{
        setValue(e.target.value)
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit(value)
    }

    
    return (
        <div className="hero h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/bRsjjSD/donation.jpg)' }}>
            <div className="hero-overlay bg-[#FFFFFFF3] opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" max-w-3xl">
                    <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>

                    <form onSubmit={handleSubmit} className="flex justify-center rounded">
                        <input onChange={handleChange} className="pl-3 py-1 rounded border text-gray-400" type="text" name="name" placeholder="Search here...."/>
                        <button type="submit" className="btn bg-[#FF444A] round text-white hover:text-black">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;