function App(){

    const bootcamps=[
        {
           id:1, 
           name:'messi',
           average_rating: 10
        },
        {
            id:2, 
            name:'cr7',
            average_rating: 7  
        }
    ]
return(
    
    <div>
        <h1>
        listado de bootcamps
    </h1>
    <ul>
    {
    bootcamps.map((bootcamps, index) =>(
        <li key={index} >
            {
            bootcamps.name
        }
        </li>
    ))    
    }
    </ul>
    </div>
)
}

export default App