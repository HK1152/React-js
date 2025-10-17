import React, { useState } from 'react';

function Form() {

    const [select, setSelect] = useState(''); 
    
    function selection(e) {
        setSelect(e.target.value);
    }

    return (
        <>  
            <select name="options" id="options" value={select} onChange={selection}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <h1>Selected option is: {select}</h1>
        </>
    );
}

export default Form;