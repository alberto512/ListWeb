import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'   
import SignUp from '../components/SignUp/SignUp'
import Login from '../components/Login/Login'
import NavBarGroup from "../components/NavBar/NavBarGroup";
import useToken from '../useToken';
import "./FormAuthPage.css"

function Text(props) {
    const url = props.url;
    if (url.includes("sign")) {
      return <SignUp setToken={props.setToken}/>;
    }

    return <Login setToken={props.setToken}/>;
  }

const FormAuthPage = () => {
  const { setToken } = useToken();
  useEffect(() => {
    document.body.style.backgroundColor = "#D2A5FF"
  });
  return (
    <React.Fragment>
      <NavBarGroup />
      <div className="container">
        <Card>
            <Card.Header>
                <Nav fill className="justify-content-center" variant="tabs" defaultActiveKey="#login">
                    <Nav.Item>
                        <Nav.Link href="#login">Log in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#sign">Sign up</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Text url={window.location.href} setToken={setToken} />
            </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default FormAuthPage;