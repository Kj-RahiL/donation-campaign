

const Banner = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value)
    }

    
    return (
        <div className="hero h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/bRsjjSD/donation.jpg)' }}>
            <div className="hero-overlay bg-[#FFFFFFF3] opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" max-w-3xl">
                    <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>

                    <form onSubmit={handleSubmit} className="flex justify-center rounded">
                        <input className="pl-3 py-1 rounded border" type="text" name="name" placeholder="Search here...."/>
                        <input className="btn bg-[#FF444A] round text-white hover:text-black" type="submit" value="search " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;