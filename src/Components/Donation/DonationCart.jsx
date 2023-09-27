
import { BiDollar } from "react-icons/bi";

const DonationCart = ({ item }) => {

    // console.log(donation)
    const { img, category, title, card_bg, text_color, category_bg, price } = item

    return (

        <div style={{ background: card_bg }} className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2"><img className="h-full " src={img} alt="Movie" /></figure>
            <div className="py-2 pl-3 md:pl-5 w-1/2">
                <h2 className=""><button style={{ background: category_bg, color: text_color }} className="btn normal-case font-medium">{category}</button></h2>
                <h2 className=" text-2xl font-semibold">{title}</h2>
                <p className="flex items-center"  style={{ color: text_color }}><BiDollar></BiDollar> {price}</p>
                <div className="card-actions">
                    <button  style={{ background: text_color }} className="btn btn-primary text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCart;