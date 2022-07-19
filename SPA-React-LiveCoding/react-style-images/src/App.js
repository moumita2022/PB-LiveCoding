
import "./App.css"
import Header from "./components/Header";
import image1 from "./images/download.jpeg"
import image2 from "./images/download (1).jpeg"



function App() {

 

  return (
    <div className="App">
    <Header/>
     <h1>My React Application</h1>
      <section>
          <article>
            <img src={image1} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente inventore, asperiores doloremque aut nostrum facere placeat aliquam quam omnis quasi illum similique aspernatur maxime commodi! Accusamus vitae sed ratione. Aperiam obcaecati, cumque unde sequi ab minus reiciendis voluptatem incidunt suscipit officiis voluptatum tempore quam accusantium laborum itaque aliquid ducimus in delectus optio consequuntur sit. Tenetur earum, debitis itaque, laboriosam nesciunt porro tempora, exercitationem sit temporibus asperiores officia consectetur illo. Optio obcaecati veniam nam at reprehenderit reiciendis repudiandae. Nam nulla illum iste voluptate unde reiciendis fugit eius quasi quibusdam ipsam eligendi harum animi voluptates incidunt, suscipit voluptatibus. Consequatur, deleniti tempora!</p>
          </article>
          <article>
            <img src={image2} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente inventore, asperiores doloremque aut nostrum facere placeat aliquam quam omnis quasi illum similique aspernatur maxime commodi! Accusamus vitae sed ratione. Aperiam obcaecati, cumque unde sequi ab minus reiciendis voluptatem incidunt suscipit officiis voluptatum tempore quam accusantium laborum itaque aliquid ducimus in delectus optio consequuntur sit. Tenetur earum, debitis itaque, laboriosam nesciunt porro tempora, exercitationem sit temporibus asperiores officia consectetur illo. Optio obcaecati veniam nam at reprehenderit reiciendis repudiandae. Nam nulla illum iste voluptate unde reiciendis fugit eius quasi quibusdam ipsam eligendi harum animi voluptates incidunt, suscipit voluptatibus. Consequatur, deleniti tempora!</p>
          </article>
           <article>
            <img src={ require("./images/photo-1488590528505-98d2b5aba04b.jpeg") } width="300" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente inventore, asperiores doloremque aut nostrum facere placeat aliquam quam omnis quasi illum similique aspernatur maxime commodi! Accusamus vitae sed ratione. Aperiam obcaecati, cumque unde sequi ab minus reiciendis voluptatem incidunt suscipit officiis voluptatum tempore quam accusantium laborum itaque aliquid ducimus in delectus optio consequuntur sit. Tenetur earum, debitis itaque, laboriosam nesciunt porro tempora, exercitationem sit temporibus asperiores officia consectetur illo. Optio obcaecati veniam nam at reprehenderit reiciendis repudiandae. Nam nulla illum iste voluptate unde reiciendis fugit eius quasi quibusdam ipsam eligendi harum animi voluptates incidunt, suscipit voluptatibus. Consequatur, deleniti tempora!</p>
          </article>
          <article>
            <img src="https://media.istockphoto.com/photos/businessman-using-a-computer-to-document-management-concept-online-picture-id1335050732?b=1&k=20&m=1335050732&s=170667a&w=0&h=ZixERs8xGjy-XF8vYmf60sBwEwE-p3omcoffv8PWMBQ=" width={300} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sapiente inventore, asperiores doloremque aut nostrum facere placeat aliquam quam omnis quasi illum similique aspernatur maxime commodi! Accusamus vitae sed ratione. Aperiam obcaecati, cumque unde sequi ab minus reiciendis voluptatem incidunt suscipit officiis voluptatum tempore quam accusantium laborum itaque aliquid ducimus in delectus optio consequuntur sit. Tenetur earum, debitis itaque, laboriosam nesciunt porro tempora, exercitationem sit temporibus asperiores officia consectetur illo. Optio obcaecati veniam nam at reprehenderit reiciendis repudiandae. Nam nulla illum iste voluptate unde reiciendis fugit eius quasi quibusdam ipsam eligendi harum animi voluptates incidunt, suscipit voluptatibus. Consequatur, deleniti tempora!</p>
          </article>
      </section>
     <footer>
       <ul>
         <li>github</li>
         <li>facebook</li>
       </ul>
     </footer>
    </div>
  );
}

export default App;
