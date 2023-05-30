import { useEffect, useState } from "react";
import Button  from "react-bootstrap/Button";
import Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function MyRecipes({}){
    return(
        <Nav as="ul">
            <NavDropdown as="li" className="border-bottom container-fluid">Test1</NavDropdown>
            <Nav.Item as="li" className="border-bottom container-fluid">Test2</Nav.Item>
            <Nav.Item as="li" className="border-bottom container-fluid">Test3</Nav.Item>
        </Nav>
    )
}

export default function Sidebar({}){
    const [myRecipes, setMyRecipes]= useState<boolean>(false);
    

    return(
        <>
            <ul>
                <li>
                    <Button onClick={() => (setMyRecipes(!myRecipes))} > Personal Recipes</Button>
                    {
                        (myRecipes) ? <MyRecipes /> : <></>
                    }
                </li>
                <div>c`</div>
            </ul>
        </>
    );
}