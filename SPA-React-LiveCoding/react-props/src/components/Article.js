export default function Article(props){
    return(
        <div style={{width:"350px"}}>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <p>{props.para2}</p>
        </div>
    )
}

