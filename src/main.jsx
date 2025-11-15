import { createRoot } from "react-dom/client"
import App from "./App"
createRoot(document.getElementById("root"))
    .render
    (
        <>
            <div className="header">RCIPE MENU CARDS</div>
            <div className="main">
                <App
                    Recipe_Name="MASALA CHAI"
                    Serves="2 people"
                    Difficulty="Easy"
                    Type="Beverage"
                    ChefName="Tea by Harshith"
                    PrepTime="Prep Time: 5 minutes | Cook Time: 10 minutes"
                    image="https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg?s=612x612&w=is&k=20&c=lupk7Uqlsk3q_PSEoUoCMhSmHe6H_E9ePJ3knAqhLqk="
                />
                <App
                    Recipe_Name="PANEER BUTTER MASALA"
                    Serves="3 people"
                    Difficulty="Medium"
                    Type="Main Course"
                    ChefName="Chef Arvind"
                    PrepTime="Prep Time: 15 minutes | Cook Time: 25 minutes"
                    image="https://tse2.mm.bing.net/th/id/OIP.Nb54wct_8wHAjVmFOPuchQHaHa?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="VEG BIRYANI"
                    Serves="4 people"
                    Difficulty="Hard"
                    Type="Rice Dish"
                    ChefName="Chef Zoya"
                    PrepTime="Prep Time: 20 minutes | Cook Time: 40 minutes"
                    image="https://tse1.mm.bing.net/th/id/OIP.9Ukx4bH1XJkL2KWy9ffn3gHaFj?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="CHICKEN 65"
                    Serves="2–3 people"
                    Difficulty="Medium"
                    Type="Starter"
                    ChefName="Chef Rishi"
                    PrepTime="Prep Time: 10 minutes | Cook Time: 20 minutes"
                    image="https://tse3.mm.bing.net/th/id/OIP.Z_PSdfeHKcjCiF7Lp4tU2wHaE8?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="COLD COFFEE"
                    Serves="1 person"
                    Difficulty="Easy"
                    Type="Beverage"
                    ChefName="Cafe Dev"
                    PrepTime="Prep Time: 2 minutes | Cook Time: 3 minutes"
                    image="https://tse3.mm.bing.net/th/id/OIP.xcXN3inLvxQ8xeLfFaGX2wHaEJ?pid=Api&P=0&h=180"
                />

                <App
                    Recipe_Name="CHOCOLATE BROWNIE"
                    Serves="2 people"
                    Difficulty="Easy"
                    Type="Dessert"
                    ChefName="Chef Renu"
                    PrepTime="Prep Time: 10 minutes | Cook Time: 25 minutes"
                    image="https://tse4.mm.bing.net/th/id/OIP.EknqqMj31NFgfE-zMdWdLQHaE8?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="PASTA ALFREDO"
                    Serves="1–2 people"
                    Difficulty="Easy"
                    Type="Main Course"
                    ChefName="Chef Laura"
                    PrepTime="Prep Time: 10 minutes | Cook Time: 15 minutes"
                    image="https://tse1.mm.bing.net/th/id/OIP.CDEekrviQMT8-oBQP9RM5gHaHa?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="VEG NOODLES"
                    Serves="1 person"
                    Difficulty="Easy"
                    Type="Chinese"
                    ChefName="Chef Wang"
                    PrepTime="Prep Time: 8 minutes | Cook Time: 7 minutes"
                    image="https://tse4.mm.bing.net/th/id/OIP.1ZOyvs21tSlaVeUoPvLApAHaFj?pid=Api&P=0&h=180"
                />
                <App
                    Recipe_Name="CLASSIC BURGER"
                    Serves="1 person"
                    Difficulty="Medium"
                    Type="Fast Food"
                    ChefName="Chef Barry"
                    PrepTime="Prep Time: 10 minutes | Cook Time: 10 minutes"
                    image="https://tse3.mm.bing.net/th/id/OIP.iTnflSl4YDI6mtrql9Ds3AHaEt?pid=Api&P=0&h=180"
                />
            </div  >
        </>
    )  
