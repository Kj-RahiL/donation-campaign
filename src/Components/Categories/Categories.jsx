import { useEffect, useState } from "react";
import Category from "../Catagory/Category";


const Categories = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch('donation.json')
        .then(res=> res.json())
        .then(data=> setCatagories(data))
    },[])

    return (

            
            <div className="grid grid-cols-4 gap-5 mt-20 mx-32">
                {
                    catagories.map(catagory => <Category key={catagory.id} catagory={catagory}></Category>)
                }
            </div>
        
    );
};

export default Categories;