import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () =>{
    const [blogs, setBlogs]= useState([
        {title:"My new website", body:"lorem ipsum...", author:"Nikola",id:1},
        {title:"Welcome party", body:"lorem ipsum...", author:"Nikola",id:2},
        {title:"Web dev top tips", body:"lorem ipsum...", author:"Slave",id:3}
    ])

    const [name, setName] =useState("Nikola");

    const handleDelete = (id) =>{
        const newBlogs=blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }
  
    useEffect(() => {
        console.log("use effect ran");
    },[name]);
    

    return(
        <div className="home">
            <h2>Homepage</h2>
                <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}></BlogList>
                <BlogList blogs={blogs.filter((blog)=> blog.author=== "Slave")} title="Slave's blogs"></BlogList>
                <button onClick={() => setName("Arsov")}>Change name</button> 

        </div>
    );
}

export default Home;