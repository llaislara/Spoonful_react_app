import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

const Random = () => {
  const [random, setRandom] = useState([]);

  const getRandom = async () => {
    const getData = localStorage.getItem("random");

    if (getData && getData !== "undefined") {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=3`
      );
      const data = await resp.json();
      setRandom(data.recipes);
      localStorage.setItem("random", JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getRandom();
  }, []);

  return (
    <Wrapper>
      <h3>Random Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {random.map(({ title, id, image }) => (
          <SplideSlide key={id}>
            <Card>
              <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  border-radius: 28px;
  box-shadow: 0 0 6px 2px rgb(0 0 0 / 4%);

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    background: rgba(255, 255, 255, 0.57);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(18.5px);
    -webkit-backdrop-filter: blur(18.5px);
    color: #080808;
    width: 100%;
    height: 20%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  border-radius: 16px;
`;

export default Random;


