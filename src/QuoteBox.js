import React from 'react';


const QuoteBox = ({quote, author, text, funcion, color}) => {




    
    return (
        <div className='container' style= {{backgroundColor:color}}>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-h' style= {{color: color}}>
                        <h2><i className="fas fa-quote-left"></i>{quote}</h2>
                    </div>
                    <p style={{color:color}}>{author}</p>
                    <div className='card-btn'>
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" ><i className="fab fa-twitter" style={{color: color}}></i></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        <button onClick={funcion} style={{backgroundColor: color}}>{text}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuoteBox;