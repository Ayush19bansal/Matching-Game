import React from 'react'
import pink from "../images/pink-card.png"
import blue from "../images/blue-card.png"

function Logic({card, handleChoice, flipped}) {
  const handleClick = () => {
    // Call the handleChoice function passed from the parent component
    handleChoice(card);
};

// Render the SingleCard component
return (
    <div className={card.matched ? 'pcard vanish' : 'pcard'}>
        {/* Render the card with two sides: front and back */}
        <div className={flipped ? 'img-container flipped' : 'img-container'}>
            {/* Display the front side of the card */}
            <img className='front' src={card.src} alt='card front' />

            {/* Display the back side of the card */}
            <img
                className='backside'
                src={card.type === 'pink' ? pink : blue}
                onClick={handleClick} // Handle click event
                alt='card back'
            />
        </div>
    </div>
);
}

export default Logic
