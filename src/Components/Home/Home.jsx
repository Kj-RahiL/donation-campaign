
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";


const Home = () => {
    const [searchCategory, setSearchCategory] =useState([])
    
    const cards = useLoaderData();
   

    const handleSearch = category => {
        
       
        setSearchCategory(category.toLowerCase()); 
    };
    
 

    return (
        <div >
            
            <Banner onSubmit={handleSearch}></Banner>
            <Categories categories={cards} searchCategory={searchCategory}></Categories>
        </div>
    );
};

export default Home;


