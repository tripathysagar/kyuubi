import './CardList.componets.css'
import Card  from "../Card/Card.component";
const CardsList = ({cardName, cardDetails}) => {

    //const val = localStorage.getItem('k8Details')
    
    console.log("from card list : ", cardName , cardDetails)
    return (
        <div>
            <h2> {cardName}</h2>
            <div  key={cardName}>
                <table  className="paragraph-container">
                    {/*
                    <tr>
                        <th>Index</th>
                        <th>Value</th>
                    </tr> */}
                    {
                        cardDetails.map(
                            (card) => {return <Card card={card}/>})
                    }
                </table>
            </div>
            
            
        </div>
    )


}

export default CardsList;