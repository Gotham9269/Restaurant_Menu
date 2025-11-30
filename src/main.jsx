    import { createRoot } from "react-dom/client"
    import App from "./App"
    import data from  "./Data" 
    import { useState } from "react"

    const root = createRoot(document.getElementById("root")) 
          function RecipeMenu() {
                return (
                <>
                <div className="header">RCIPE MENU CARDS</div>
                <div className="main"> 
                {data.map((item,index) => (
                    <App key={index} {...item} />
                ))}
                </div>
            </>
                )
          }

root.render(<RecipeMenu />);
