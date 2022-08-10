import logo from './logo.svg';
import './App.css';
import Button from "./Button"
import Article from './Article';
import posts from "./data.json"
import Post from './Post';



function App() {

  // fetching data from external api in our react app
/* function getDataFromExternalApi(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response=>response.json())
  .then(result=>console.log(result))
} */

  return (
    <div className="App">
      <h1>Props and State</h1>
      <Button title="button 1" color="red"/>
      <Button title ="button 2" color="blue"/>
      <Button title ="button 3" color="green"/>
      <Button title ="button 4" color="black"/>
      <Button title ="button 5" color="brown"/>
      <Button title ="button 6" color="orange"/>
      <Button title ="button 7" color="yellow"/>
      <Button title ="button 8" color="pink"/>
      <Button title ="button 9" color="purple"/>

<div style={{display:"flex",flexWrap:"wrap"}}>
{/* <Post title={posts[0].title} userId={posts[0].userId} body={posts[0].body}/>
<Post title={posts[1].title} userId={posts[1].userId} body={posts[1].body}/>
 <Post title={posts[2].title} userId={posts[2].userId} body={posts[2].body}/> */}




  {posts.map(item=>{
    return(
      <Post title={item.title} userId={item.userId} body={item.body}/>
    )
  })}


{/*   <button onClick={getDataFromExternalApi}>fetch data</button> */}
</div>




     {/*  <Article title="React Intro" text="react is a javascript library for UI"/> */}
    </div>
  );
}

export default App;


