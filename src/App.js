import { Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import logo from "./logoSpoonfulWhite.png"; 

const App = () => {
  return (
    <div>
      <Nav className="Top">
        <Logo to={"/"}>
          <img src={logo} alt="Spoonful Logo" />
        </Logo>
      </Nav>
      {!process.env.REACT_APP_FOOD_API_KEY ? (
        <p>
          Please get the API key from{" "}
          <strong>
            <a href="https://spoonacular.com/food-api/">Spoonacular Food Api</a>
          </strong>
          <br />
          <br />
          and add it in your env file with{" "}
          <strong>"REACT_APP_FOOD_API_KEY"</strong> name and restart the app
        </p>
      ) : (
        <>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
};

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  img {
    width: 100px; /* Ajuste o tamanho conforme necessário */
    height: auto;
  }
`;

export default App;
