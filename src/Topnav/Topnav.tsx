import Nav  from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Topnav({}){
    return(
        <Navbar className="bg-white">
            <Container>
                <Navbar.Collapse id="TopNav">
                    <Nav>
                        <NavDropdown title="Personal Recipes" id="MyRecipes">
                                
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topnav   