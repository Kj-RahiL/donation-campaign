import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";
// import DonationCart from "./DonationCart";



const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
  
    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if (donationItem) {

            setDonations(donationItem)
        }
        else {
            setNoFound('No data found..!!')
        }
    }, [])

    // console.log(donations)
    console.log(isShow)


    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center text-4xl font-semibold">{noFound}</p> :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-2 md:mx-10 lg:mx-32">
                            {
                                isShow ? donations.map(item => <DonationCart key={item.id} item={item}></DonationCart>) : 
                                donations.slice(0, 4).map(item => <DonationCart key={item.id} item={item}></DonationCart>)
                            }

                        </div>
                        <div className={`flex justify-center items-center p-4 ${isShow ? 'hidden' : ''} `}>
                            {donations.length > 4 && 
                            <button
                                onClick={()=> setIsShow(!isShow)}
                                className="btn bg-[#009444] text-white normal-case hover:text-black">{!isShow ? "See All" : '' }</button>
                                }
                        </div>
                    </>
            }
        </div>
    );
};

export default Donation;

