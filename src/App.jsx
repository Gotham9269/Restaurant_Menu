import NavBar from "./NavBar"
import "./index.css";
import Body from "./assets/body";
import Footer from "./assets/Footer";

export default function App(data){
  return(
  <div className="container">
  <div className="recipe-card">
  <NavBar {...data}/>
  <Body{...data}/>
  <Footer{...data}/>
  </div>
  </div>
  )
}
