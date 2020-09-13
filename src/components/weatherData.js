import React from 'react';

const Weather = ({city,country,description,temperature,error}) => {
    return (
        <div>
        {city && country && <p>{city}, {country}</p>}
        {temperature && <p>{temperature } Celsius</p>}
        {description && <p>Description:  {description}</p>}
        {error && <p>{error}</p>}
    </div>
    )
}

export default Weather;

