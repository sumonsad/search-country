import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;
    //console.log(props.country);
    const flagStyle= {height:'50px'};
    const countryStyle = {border:'2px solid gray', margin:'10px',padding:'10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
           <h2>{name}</h2>
           <img style={flagStyle}src={flag} alt="" />
           <h3>{population}</h3>
           <h4><small>{region}</small></h4>
           <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;