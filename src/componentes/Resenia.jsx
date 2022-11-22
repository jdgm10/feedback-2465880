
import{ useState } from 'react'

const Resenia =({ resenia }) => {

//Definir estados iniciales 
const [rating , setRating ] = useState(resenia.rating)
const [comment , setComment ] = useState(resenia.text)
const CambiarNota = ()=>{
setRating((prev)=>{
return prev +1

})
}
const addNota = ()=>{
    setRating((prev)=>{
    return prev -1
    
    })
    }

return(
        <div className="card">
 <div className="num-display">
      {
        rating
      }
 </div>
 <div className="text-display">
      {
        comment
      }
 </div>
 <button onClick={CambiarNota}>
    sumar nota
 </button>
 <button onClick={addNota}>
    Resta nota
 </button>

        </div>
    )
}

export default Resenia 