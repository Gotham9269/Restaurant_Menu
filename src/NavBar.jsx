export default function NavBar(data){
    return (
        <nav className="recipe-header">
            <h1>{data.Recipe_Name}</h1> 
            <p>{data.PrepTime}</p>
        </nav>
    )
}