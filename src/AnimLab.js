import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./main.css";

export default function AnimLab(){
    const [cards, setCards] = useState([]);
    
    // on mount
    useEffect(() => {

    let suits = ["A", "B", "C"];
    let genCards = suits.flatMap((suit) => {
        return [1, 2, 3, 4, 5, 6, 7].map((val) => {
            return {val: suit + val, active: true};
        });
    });
    console.log(cards)
    setCards(genCards);
    }, [cards])

    // rendering stuff
    let cardEls = cards.map((card, index) => {
        let delay = index * 100;
        return (
            <CSSTransition 
                key={card.val} 
                appear={true} 
                in={card.active} 
                timeout={{ enter: delay, exit: 400 }} 
                classNames="card" 
            >
                <div 
                    className="card" 
                    style={{transitionDelay: `${delay}ms`}}
                    onClick={() => { 
                        cards[index].active = false;
                        setCards([...cards]);
                    }}
                >
                     {card.val}
                </div>
            </CSSTransition>
        );
    });

    return (
        <div>
            <div className="cardStack">{cardEls}</div>
        </div>
    );
}