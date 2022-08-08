export default function Paragraph(props){
    console.log(props)
    return(
        <div>
           <p>{props.text}</p> 
           <img src={props.image} alt="" />
        </div>
        
    )
}

/* Paragraph({text:"this is my first para"}) */