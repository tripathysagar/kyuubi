import './Card.component.css'
const Card = ({card}) => {
    //<li key={i}>{card[oneKey]}</li>
    console.log(card)
    return (
        <p>
        
          {
            Object.keys(card).map((key, i)=>{
                if(key !== "id"){
                    return (
                        <tr>
                            <th>{key}</th>
                            <th>{String(card[key])}</th>
                        </tr>
                    )
                }
                return {}
                
            })
          }
  
         
        </p>
        
        
    )
}

export default Card