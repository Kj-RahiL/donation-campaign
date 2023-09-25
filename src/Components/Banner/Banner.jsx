

const Banner = () => {
    return (
        <div className="hero h-[80vh] " style={{ backgroundImage: 'url(https://i.ibb.co/bRsjjSD/donation.jpg)' }}>
            <div className="hero-overlay bg-[#FFFFFFF3] opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" max-w-3xl">
                    <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center rounded">
                        <input className="pl-3 py-1 rounded border" type="text" placeholder="Search here...."/>
                        <button className="btn bg-[#FF444A] rounded text-white hover:text-black">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;