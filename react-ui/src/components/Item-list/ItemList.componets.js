import { useState } from "react";
import CardsList from "../Card-list/CardList.componets";
import './ItemList.componets.css'

const ItemList = ({k8Details, userInput}) => {

    console.log("the valus of  k8Details in item-list", k8Details)
    console.log("the valus of  userInput in item-list", userInput)

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
            <div  className="container">
                
                <nav className="nav-container">
                {
                    Object.keys(k8Details).map((key)=>{
                            
                        return (
                                    <ul key={key}><button onClick={thisClicked} name={key}>{key} </button></ul>
                                )
                    })
                }
                </nav>
                
                <div className="div-container">
                {
                    Object.keys(userInput).map((key)=>{
                            
                        return (
                                    <ul key={key}>{key} : {userInput[key]}</ul>
                                )
                    })
                }
                </div>
            </div>
            {   
                (buttonClicked.length !== 0 ) &&
                <CardsList cardName={buttonClicked} cardDetails={k8Details[buttonClicked]} />
            }
            
             
            
        </div>
    )
    // <CardsList cardName={keys[0]} cardDetails={k8Details[keys[0]]} />


}

export default ItemList;