import { useEffect, useState } from "react";
import DonationDetails from "../DonationDetails/DonationDetails";
import DonationCart from "./DonationCart";
// import DonationCart from "./DonationCart";



const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false)
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if (donationItem) {

            setDonations(donationItem)
        }
        else {
            setNoFound('No data found..!!')
        }
    }, [])

    console.log(donations)


    return (
        <div>
            {
                noFound ? <p className="h-[80vh] flex justify-center items-center text-4xl font-semibold">{noFound}</p> :
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-10 md:mx-32">
                            {
                                donations.slice(0, dataLength).map(item => <DonationCart key={item.id} item={item}></DonationCart>)
                            }

                        </div>
                        <div className={`flex justify-center items-center p-4  ${dataLength === donations.length ? 'hidden' : ''}`}>
                            <button
                                onClick={() => setDataLength(donations.length)}
                                className="btn bg-[#009444] text-white normal-case hover:text-black">See All</button>
                        </div>
                    </>
            }
        </div>
    );
};

export default Donation;