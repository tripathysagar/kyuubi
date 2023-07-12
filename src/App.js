import {useState} from 'react';
import './App.css';
import K8Connect from './components/K8Connect/k8-connect-form.components'
import ItemList from './components/Item-list/ItemList.componets';

import { useEffect } from 'react';

function App() {
  const url = 'http://127.0.0.1:8000/K8Connect/'
  
  const [respFlag, setRespFlag] = useState(false)

  
        
  const connectToK8 = (input) => {
    fetch(url,{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'mode': '*cors',
      },
      
      body: JSON.stringify(input)
    })
    .then((response) => response.json())
    .then((resp) => (localStorage.setItem('k8Details', JSON.stringify(resp)  )))
    .then(setRespFlag(true)  )

    //console.log(k8Details)
  }
  useEffect(() => {
    if(respFlag){
    console.log('inside use effect true')
    
    }else{
    
      console.log('inside use effect false')
  
    }

},[respFlag])
  
  if (!respFlag){
  return <K8Connect connectToK8={connectToK8}/>
  }
  else{

    const val = JSON.parse(localStorage.getItem('k8Details'))
   //console.log(val)

  return <ItemList k8Details={val}/>
  } 
}

export default App;
