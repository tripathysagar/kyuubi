import {useState} from 'react';
import './App.css';
import K8Connect from './components/K8Connect/k8-connect-form.components'
import ItemList from './components/Item-list/ItemList.componets';

import { useEffect } from 'react';

function App() {
  const url = 'http://127.0.0.1:8000/K8Connect/'
  
  const [respFlag, setRespFlag] = useState(false)

  const [input, setInput] = useState({
    cluster : '',
    user: '',
    namespace: '',
    k8Name: '',
  })

  const [error, setError] = useState({
    status: 0,
    body: '', 
  })
        
  const  connectToK8 = async(input) => {
    setInput({...input})
    /*
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
    */
    const response = await fetch(url,{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'mode': '*cors',
      },
      
      body: JSON.stringify(input)
    })
    const respStatus = response.status

    switch (respStatus){
      case 200: //for hangling 200 from the fetch api
        const resp = await response.json()
        localStorage.setItem('k8Details', JSON.stringify(resp)  )
        setRespFlag(true)
        break
      default:

        const respBody = await response.json() 
        //console.log(respBody)
        
        error.status = respStatus
        error.body = JSON.stringify(respBody)


        setError({...error})
        console.log(response)
        break
    }

    
    //console.log(k8Details)
  }

  useEffect(() => {
    if(respFlag){
      console.log('inside use effect true')
    }else{
      console.log('inside use effect false')
    }
  },[respFlag])

  useEffect(() => {
    if(error.status != 0){ // for not triggering the when error.status = 0
      alert("status : " + error.status + "\nMsg from the backend is " + error.body+ "\nPlease check the console!!!")
  }},[error])
  
  if (!respFlag){
  return <K8Connect connectToK8={connectToK8}/>
  }
  else{

    const val = JSON.parse(localStorage.getItem('k8Details'))
   //console.log(val)

  return <ItemList k8Details={val} userInput={input}/>
  } 
}

export default App;
