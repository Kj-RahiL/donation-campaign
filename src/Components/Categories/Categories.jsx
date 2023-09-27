import { useEffect, useState } from "react";
import Category from "../Catagory/Category";


const Categories = (props) => {

    // console.log(props)
       const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const filteredCategories = props.searchCategory
        ? categories.filter(category => category.category.toLowerCase().startsWith(props.searchCategory))
        : categories;
console.log(props, filteredCategories)
    return (

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 mx-10 md:mx-32">
            {
                filteredCategories.map(category => (
                <Category key={category.id} category={category} /> ))
            }
            </div>
        
    );
};

export default Categories;