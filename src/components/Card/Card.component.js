
const Card = ({card}) => {
    //<li key={i}>{card[oneKey]}</li>
    console.log(card)
    return (
        <table>
            <tr>
                <th>Index</th>
                <th>Value</th>
            </tr>
        
          {
            Object.keys(card).map((key, i)=>{
               {
                    if(i === 0){
                        return (
                            <tr>
                                <th>{key}</th>
                                <th>{String(card[key])}</th>
                                
                            </tr>
                            )

                    }
                    return (
                    <tr>
                        <th>{key}</th>
                        <th>{String(card[key])}</th>
                    </tr>
                    )
                }
                

            })
          }
  
         
        </table>
        
        
    )
}

export default Card