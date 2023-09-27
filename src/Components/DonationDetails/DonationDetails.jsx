import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const DonationDetails = () => {
    const donations = useLoaderData()
    // console.log(donations)
    const { id } = useParams();
    const idInt = parseInt(id)
    const donation = donations.find(donation => donation.id === idInt)
console.log(donation)

    const handleAdd = () => {
        const addDonationArray = []
        const donationItem = JSON.parse(localStorage.getItem('donation'))
        // console.log(donationItem)

        if (!donationItem) {
            addDonationArray.push(donation)
            localStorage.setItem('donation', JSON.stringify(addDonationArray))
            swal("Good job!", "Your donation has successful!", "success");
        } else {
            const isExists = donationItem.find(item => item.id == id)

            console.log(isExists)

            if (!isExists) {
                addDonationArray.push(...donationItem, donation)
                localStorage.setItem('donation', JSON.stringify(addDonationArray))
                swal("Good job!", "Your donation has successful!", "success");
            }else{
                swal("Error!", "You can't added duplicate!", "error");
            }

        }

        // localStorage.setItem('donation', JSON.stringify([{name:"rahil", age: 20}]))

    }

    return (
        <div >
            <div className="card bg-base-100 shadow-xl md:max-w-4xl mx-auto rounded-lg ">
                <figure className=" h-full"><img className="w-full " src={donation.img} alt="Shoes" /></figure>

                <div className="absolute left-0  bottom-0 bg-blend-overlay bg-[#0b0b0b7d]  w-full text-white text-xl font-semibold  px-8 py-6">

                    <button onClick={handleAdd} className=" bg-[#FF444A] normal-case btn text-white hover:text-gray-900">Donate ${donation.price}</button>

                </div>
            </div>

            <div className="bg-base-100 max-w-4xl mx-auto rounded-lg space-y-2 my-10 p-4">
                <h2 className=" text-4xl font-semibold">{donation.title}</h2>
                <p className="text-[#0B0B0BB3]">{donation.description}</p>
            </div>


        </div>
    );
};

export default DonationDetails;