import { Link } from "react-router-dom";



const Category = ({ catagory }) => {
    const { id, img, category, title, card_bg, text_color, category_bg } = catagory




    return (
    
            <Link to={`/catagory/${id}`} className="card card-compact bg-base-100 shadow-xl" style={{ background: card_bg }} >
                
                    <figure><img src={img} alt="donation image" /></figure>
                    <div style={{ color: text_color }} className="card-body">

                        <h2 style={{ color: text_color }}  ><button style={{ background: category_bg, color: text_color }} className="btn normal-case font-medium ">{category}</button></h2>

                        <h2 className=" text-xl font-semibold " >{title}</h2>

                    </div>
               

            </Link>
        

    );
};

export default Category;