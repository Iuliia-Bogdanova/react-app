import React, { useState } from "react";

const Words = () => {
    const [id, setId] = useState(0);
    const [word, setWord] = useState("");
    const [translate, setTranslate] = useState("");
    const [cards, setCards] = useState([]);

    const updateInput = (key, value) => {
        switch (key) {
        case "word":
            setWord(value);
            break;
        case "translate":
            setTranslate(value);
            break;
        case "cards":
            setCards(value);
            break;
        default:
            break;
        }
    };

    const addCard = () => {
        const newCard = {
        id: 1 + id,
        value: {
            word: word.slice(),
            translate: translate.slice(),
            overturned: false,
        },
        };
        setId(newCard.id);
        setWord("");
        setTranslate("");
        setCards([...cards, newCard]);
    };

    const turnCard = (id) => {
        const updatedCards = [...cards];
        const index = updatedCards.findIndex((card) => card.id === id);
        updatedCards[index].value.overturned =
        !updatedCards[index].value.overturned;
        setCards(updatedCards);
    };

    return (
        <div className="container__words">
        <h1>Add card...</h1>
        <input
            type="text"
            placeholder="english"
            value={word}
            onChange={(e) => updateInput("word", e.target.value)}
        />
        <input
            type="text"
            placeholder="russian"
            value={translate}
            onChange={(e) => updateInput("translate", e.target.value)}
        />
        <button className="btn" 
            onClick={addCard}>
            Add
        </button>
        <div>
            {cards.map((card) => (
            <div
                key={card.id}
                className={"card" + (card.value.overturned ? " overturned" : "")}
                onClick={() => turnCard(card.id)}
            >
                {card.value.overturned ? card.value.translate : card.value.word}
            </div>
            ))}
        </div>
        </div>
    );
};

export default Words;
