import React, { useEffect, useState } from 'react';
import 'devextreme/data/odata/store';
import Characters from "../../components/my-components/Characters";

async function postData(url = '', data = {}) {
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    referrerPolicy: "strict-origin-when-cross-origin",
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    window:window,
    headers: {
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// postData('http://intranet.taionline.net:14036/api/loadtfunction', {  
// "FuncName": "Tai.Backend.Qplant",
// "ActiveActor": "WKU11",
// "FuncParam01": "OEEMONITOR2",
// "FuncParam02": "SPAIN",
// "FuncParam03": "",
// "FuncParam04": "",
// "FuncParam05": "",
// "TraceLog": "Y" 
// })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

// function fetchFact(type) {
//   const inibody = {
//     "FuncName": "Tai.Backend.Qplant",
//     "ActiveActor": "WKU11",
//     "FuncParam02": "SPAIN",
//     "FuncParam03": "",
//     "FuncParam04": "",
//     "FuncParam05": "",
//     "TraceLog": "Y", 
//     "FuncParam01": "OEEMONITOR2",
// }
// }


export default function Task() {


  const [characters, setCharacters] = useState([])

  // const initiaurl = `https://63ea67dbceb46e005c73d32b--neon-pie-587ff5.netlify.app/#/tasks/api/${type}`
  // const initiaurl = `http://intranet.taionline.net:14036/api/loadtfunction`
//   const inibody = {
//     "FuncName": "Tai.Backend.Qplant",
//     "ActiveActor": "WKU11",
//     "FuncParam02": "SPAIN",
//     "FuncParam03": "",
//     "FuncParam04": "",
//     "FuncParam05": "",
//     "TraceLog": "Y", 
//     "FuncParam01": "OEEMONITOR2",
// }

  const fetchChraracter = (type) => {
    // console.log(`${url} : ${body}`)
    // postData(url, body)
    // .then((res) => res.text())
    //   .then(data => {setCharacters(data.Payload); // JSON data parsed by `data.json()` call
    //   })
    //   .catch(rejected => {
    //     console.log(rejected);
    // });

    fetch(`https://63ea67dbceb46e005c73d32b--neon-pie-587ff5.netlify.app/#/tasks/api/${type}`, inibody)
  .then((res) => res.text())
  .then((data) => setCharacters(data.Payload))
  .catch((error) => console.log(error))

  }
   useEffect(() => {
    // console.log(fetchChraracter(initiaurl, inibody))
    fetchChraracter(type)


   }, []);
   
   

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Monitor de Produccion</h2>

      <div className='row'>
        <Characters characters={characters}/>
      </div>
    </React.Fragment>
)}
