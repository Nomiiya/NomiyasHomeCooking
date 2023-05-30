import ListGroup from 'react-bootstrap/ListGroup'
import { useState } from 'react';

export default function Recipes({recipes}: {recipes: Array<Object>}){
    const [recipeId, setRecipeId] = useState<number>(0);

    const sidenav = recipes.map((recipe) => {
        return (
        <ListGroup.Item action>
            {recipe.name}
        </ListGroup.Item>)
    })

    
    console.log("recipe array", recipes)

    return(
        <ListGroup as="ul">
            {sidenav}
        </ListGroup>
    );
}