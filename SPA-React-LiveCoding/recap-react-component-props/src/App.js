import React from "react";
import Navbar from "./Navbar";
import Paragraph from "./Paragraph";

/* function printName(name){
  console.log("Hi ,"+name)
}
printName("Naqvi")
printName("Mosa") */

function App() {
  /*  let array = Array(5).fill(null) */ // [null,null,null,null,null]
  let data = [
    {
      text: "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
      image:"https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-and-why-reactjs/Images/React%20Properties.jpg"
    },
    {
      text: "If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos",
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--qa72YNaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/me6sbpz893h3a6ip5zsv.jpg"
    },
    {
      text: "As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqIPZJmlaBE4kxme6jQFsygCQ3abER_BL7w&usqp=CAU"
    },
    {text:"just new added text",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGFtlg92VvNFSSm3n_oNdWQ2PQmR2_fa1mA&usqp=CAU"}
  ];

  return (
    <div className="App">
      <Navbar />
      {data.map(item=>{
        return(<Paragraph text={item.text} image={item.image}/>)
      })}


     {/* Paragraph({text:"this is my first para"}) */}
      {/* <Paragraph text="this is my first paragraph" image="https://react.js/reactimage.jpeg" /> */}


      {/* Paragraph({text:"this is my first para"}) */}

      {/* {array.map(()=>{
       return( Paragraph({text:"this is my first paragraph"}) )
     })}  */}
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
} */
export default App;




/* btn.addEventListner("click", ()=>{

})
