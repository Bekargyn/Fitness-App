import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import axios from 'axios';
import MealList from '../components/MealList';

export function Nutrition() {
    const [mealsState, setMealsState] = useState([]);
    const [category, setCategory] = useState("chicken");
    useEffect(() => {
    
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => {
        console.log(res)
        setMealsState(res.data.meals);
        });
    }, [category]);




    return (
        <div class="Whole-page">
            <div class="header">
                <h1>Meals</h1>
            </div>
            <div>
                <Nav variant="tabs" defaultActiveKey="link-arms">
                <Nav.Item>
                      <Nav.Link eventKey="link-arms" onClick={() => setCategory("beef")}>Beef</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-legs" onClick={() => setCategory("chicken")}>Chicken</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-abs" onClick={() => setCategory("dessert")}>Dessert</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-chest" onClick={() => setCategory("lamb")}>Lamb</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-back" onClick={() => setCategory("Miscellaneous")}>Miscellaneous</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-shoulders" onClick={() => setCategory("pasta")}>Pasta</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("pork")}>Pork</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("seafood")}>Seafood</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("side")}>Side</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("starter")}>Starter</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("vegan")}>Vegan</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("vegetarian")}>Vegetarian</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("breakfast")}>Breakfast</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="link-calves" onClick={() => setCategory("goat")}>Goat</Nav.Link>
                  </Nav.Item>
  
                </Nav>
                <MealList meals={mealsState}/>
  
            </div>
  
        </div>
    )
  }
  
  export default Nutrition;
  
  
  