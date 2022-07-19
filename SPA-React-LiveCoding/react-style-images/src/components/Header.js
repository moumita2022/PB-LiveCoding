import "./Header.css"

export default function Header(){

    let styleObject = { backgroundColor:"red",color:"white",fontSize:"20px",border:"5px solid green" }
    return(
        <header style={ styleObject }>
        <ul className="navbar">
          <li>Home</li>
          <li>Profile</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </header>
    )
}