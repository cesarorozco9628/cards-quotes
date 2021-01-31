import React, { useState } from 'react'
import Data from './Quotes.json'
import QuoteBox from './QuoteBox'
import Colors  from './Color.json'


function Next (value) {
    value =  Math.floor(Math.random()*(0-102)+102);
    return value;

}

function PrintColor (element) {
    element = Math.floor(Math.random()*(0-16)+16);
    return element;
}

const Value = () => {
    const [inValue, setInValue] = useState(0);
    const [inColor, setIncolor] = useState(0);

    const Handlervovo = () => {
        setInValue(Next(inValue));
        setIncolor(PrintColor(inColor));
    }
    return(
        <QuoteBox quote={Data.quotes[inValue].quote} author={Data.quotes[inValue].author} text='Next' color={Colors.colors[inColor].color} funcion={Handlervovo}/>
    );
} 

export default Value;