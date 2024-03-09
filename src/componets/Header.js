import React, { useEffect, useState } from 'react'

const Header = () => {
    const [beerCard, setBeerCard] = useState();

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://api.punkapi.com/v2/beers');
        const json = await data.json();
        console.log(json);
        setBeerCard(json);
    }
    return (
        <div>

        </div>
    )
}

export default Header;
