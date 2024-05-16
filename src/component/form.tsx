import React, { useState } from 'react';

const NameForm = () => {
    const [value, setValue] = useState("");
    const [color, setColor] = useState("");

    return (
        <form>
            <label htmlFor="nom">Nom :</label>
            <input type="text" name="nom" id="nom" onChange={e=>setValue(e.target.value)} value={value}/>
            <input type="color" name="color" id="color" onChange={e=>{setColor(e.target.value)}} value={color}/>
            {value !== '' && <p>{value}</p>}
            {color !== '' && <p>{color.toUpperCase()}</p>}
        </form>
    );
}

export default NameForm;
