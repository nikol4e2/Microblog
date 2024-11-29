import {useState} from 'react'



const Home = () =>{

    const [name, setName] = useState('Nikola')
    const [age, setAge] = useState(25);

    const handleClick=()=>{
        setName("Arsov");
        setAge(30);
    }
    
    return(
        <div className="home">
            <h2>Homepage</h2>
           <button onClick={handleClick}> Click me</button>
                 
          
        </div>
    );
}

export default Home;