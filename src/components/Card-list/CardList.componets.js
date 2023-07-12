import { useState } from "react";
import Card  from "../Card/Card.component";
const CardsList = ({cardName, cardDetails}) => {

    //const val = localStorage.getItem('k8Details')
    
    console.log("from card list : ", cardName , cardDetails)
    return (
        <div>
            <h1> {cardName}</h1>
            <div className={cardName} key={cardName}>
                {
                    cardDetails.map(
                        (card) => {return <Card card={card}/>})
                }
            </div>
            
            
        </div>
    )


}

export default CardsList;