import React from 'react'

const BeerCard = ({ name, tagline, img, ph }) => {
    return (
        <div>
            <div className="m-4 p-4 w-[250px] shadow-lg hover:bg-slate-200 hover:rounded-lg bg" style={{}}>
                <img className="rounded-lg w-9 " alt='img' src={img} />
                <h3 className="m-2 py-4 border-solid font-bold" >Name: {name}</h3>
                <h4 className="m-2 py-2 font-semibold" >Our Tagline {tagline}</h4>
                <h4 className="m-2 py-2 font-semibold" >PH: {ph}⭐</h4>

            </div>
        </div>
    )
}

export default BeerCard;
