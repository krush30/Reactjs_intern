import React, { useEffect, useState } from 'react'
import BeerCard from './BeerCard';
import Shimmer from './Shimmer';

const Home = () => {
    const [beerCard, setBeerCard] = useState([]);
    const [filterBeerCard, setFilterBeerCard] = useState([]);

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://api.punkapi.com/v2/beers');
        const json = await data.json();
        console.log(json);
        setBeerCard(json);
        setFilterBeerCard(json);
    }

    if (beerCard === null) return <Shimmer ></Shimmer>;






    return (
        (beerCard && <div>
            <input
                type='text'
                placeholder='Search'
                className="mx-4 mt-5 py-2 px-4 border border-black rounded-md focus:outline-none focus:border-blue-500"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value.toLowerCase()); // Convert to lowercase
                }}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                onClick={() => {
                    console.log(searchText);
                    const filterBeerCard = beerCard.filter((item) =>
                        item.name.toLowerCase().includes(searchText)
                    );
                    setFilterBeerCard(filterBeerCard);
                }}
            >
                Search
            </button>
            <div className='flex flex-wrap'>

                {filterBeerCard.map((item) => (
                    <div key={item.id} className="mb-4 p-4 border rounded-lg shadow-md">
                        <BeerCard
                            name={item.name}
                            img={item.image_url}
                            ph={item.ph}
                            tagline={item.tagline}

                        /></div>

                ))}
            </div>


        </div >)
    )
}

export default Home;
