import { useState } from "react";

const K8Connect = ({connectToK8}) => {
   
    const [input, setInput] = useState({
        cluster : '',
        user: '',
        namespace: '',
        k8Name: '',
    
      })
    
      const userInput = {}
      
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        userInput[name] = value
        //console.log(userInput)
      }
    
      const handleSubmit = (event) => {
        event.preventDefault(); //for preventing auto reloading
        //console.log("got user input",userInput)
        
        const notEnteredArr = []
    
        for (const i in input){
          //console.log(i)
          if (userInput[i] === undefined){
            notEnteredArr.push(i)
          }
        }
        console.log(notEnteredArr)
    
        if (Object.keys(userInput).length === 0  || notEnteredArr.length !== 0 ){
          alert("missisng mandetory fields")
          return
        }
    
        //console.log(notEnteredArr.length)
        input.cluster = userInput.cluster
        input.user = userInput.user
        input.namespace = userInput.namespace
        input.k8Name = userInput.k8Name
    
        
        
          
        setInput({...input})
        //console.log(input)
    
        connectToK8(input)
    
        }
        
      
    
      return (
        <form onSubmit={handleSubmit}>
          
          <label>Enterkubernates connection details :
            <br />
              <input 
                type="text" 
                name="cluster" 
                placeholder="cluster"
                onChange={handleChange} />
            <br />
              <input 
                type="text" 
                name="user"
                placeholder="user"
                onChange={handleChange}
              />
            <br />
              <input 
                type="text" 
                name="namespace"
                placeholder="namespace"
                onChange={handleChange}
              />
            <br />
              <input 
                type="text" 
                name="k8Name"
                placeholder="k8Name"
                onChange={handleChange}
              />
            <br />
          </label>
          <input type="submit" />
        </form>
      )
      
    
}

export default K8Connect;