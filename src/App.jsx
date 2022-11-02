import axios from "axios"
import { useEffect, useState } from "react"
import "./style/app.css"
import Isloading from "./components/IsLoading"

function App() {
  const [adavice, setAdavice] = useState({})
  const [isloading, setIsloading] = useState(false)
  const getAdavice = () =>{
    axios.get("https://api.adviceslip.com/advice")
      .then(res => setAdavice(res.data.slip))
        .finally(setIsloading(true))
  }
    useEffect(() =>{
      getAdavice()
    },[])
  //console.log(adavice);

  return (
    <div className="App">
      {
        isloading ? (
          <div className="container" >
          <p className="adavice-id"><span>advice</span> #{adavice.id} </p>
          <h1 className="adaviceTex" > {adavice.advice}  </h1>
          <div className="decoration"> <span></span>||<span></span> </div>
          <div className="button-container" >
          <button onClick={getAdavice} > <i className="fa-solid fa-shuffle"></i> </button>
          </div>
        </div>
        ):(
      <Isloading />
        )
      }
    </div>
  )
}

export default App
