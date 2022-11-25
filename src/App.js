//dependecias necesarias 
import { useState } from "react"
//data
import Resenias from "./data/Resenias"

//componentes
import Header from "./componentes/Header"
import ReseniaList from "./componentes/ReseniaList"

function App(){

   //Crear estado para los datos de reseñas  
    const [listaresenias, setListaResenias]= useState(Resenias)
   

    const deleteResenia = id =>{
      window.confirm("estas seguro de borrar la resenia")
    }
return(
    
   <div className="container">
   <ReseniaList 
   deleteResenia={deleteResenia}
   listaresenias={listaresenias}/> 

   </div >
)
}

export default App