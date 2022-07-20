export default function User(props){
    console.log(props)
    let {first_name, last_name,email, avatar} = props
    return(
        <div style={{width:"300px"}}>
            <h2>{first_name} {last_name}</h2>
            <img src={avatar} alt="" />
            <p>{email}</p>
        </div>
    )
}