import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    );
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    let isMounted = true;

    fetchDetails().then((data) => {
      if (isMounted) setDetails(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.id]);

  return (
    <Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} className="img"/>
      </div>
      <Info>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;

  img {
    border-radius: 16px;
    box-shadow: 0 0 6px 2px rgb(0 0 0 / 14%);
  }

  @media (max-width: 1068px) {
    flex-direction: column;
  }

  .active {
    background: #606060;
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;

    &:first-child {
      margin-top: 2rem;
    }


  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #606060;
  background: #fff;
  border: 0px solid #000;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 16px;
  box-shadow: 0 0 6px 2px rgb(0 0 0 / 10%);
`;

const Info = styled.div`
  width: 40%;
  margin: auto;

  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

export default Recipe;
