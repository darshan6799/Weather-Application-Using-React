import React from 'react';

const Input = (props) => {

    return(
        <form onSubmit={props.getWeather}>
            <input type='text' placeholder='city' name='city' ></input>
            <input type='text' placeholder='country' name='country'></input>
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default Input;