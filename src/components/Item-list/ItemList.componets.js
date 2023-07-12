import { useState } from "react";
import CardsList from "../Card-list/CardList.componets";

const ItemList = ({k8Details}) => {
    const [buttonClicked, setButtonClicked] = useState('')

    //const val = localStorage.getItem('k8Details')

    const keys = Object.keys(k8Details)
    console.log(keys)

    const thisClicked = (event) => {
        event.preventDefault()
        console.log(event.target.name)
        setButtonClicked(event.target.name)

    }
    return (
        <div>
            <nav>
            {
                Object.keys(k8Details).map((key)=>{
                        
                    return (
                                <ul key={key}><button onClick={thisClicked} name={key}>{key} </button></ul>
                            )
                })
            }
            </nav>
            
            
                {   
                    (buttonClicked.length !== 0 ) &&
                    <CardsList cardName={buttonClicked} cardDetails={k8Details[buttonClicked]} />
                }
            
             
            
        </div>
    )
    // <CardsList cardName={keys[0]} cardDetails={k8Details[keys[0]]} />


}

export default ItemList;