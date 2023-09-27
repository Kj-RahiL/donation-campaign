import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
// import { useLoaderData } from "react-router-dom";
// import { useState } from "react";


const Home = () => {
    
    // const cards = useLoaderData()
   

    const handleSearch = e => {
        e.preventValue()
        // let value = e.target.value.toLowerCase();

        console.log('from sdj',e.target.value)
        console.log('frm submit')

        // const searchFilter = filtersDatas.filter(card => card.Title.toLowerCase().startsWith(value));
        // setSearchCards(searchFilter);
    }


    return (
        <div >
            
            <Banner onSubmit={handleSearch}></Banner>
            <Categories ></Categories>
        </div>
    );
};

// cards={searchCards}

export default Home;


