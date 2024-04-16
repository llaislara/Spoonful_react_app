import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&cuisine=${name}&number=10`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisines.map(({ id, title, image }) => (
        <Card key={id}>
          <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  text-align: -webkit-center;
`;

const Card = styled.div`
  img {
    width: min(400px, 100%);
    border-radius: 2rem;
    transition: transform 0.2s;
  }

  img:hover {
    transform: scale(1.07);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.4);
  }
  
  
  a {
    text-decoration: none;
  }
  h4 {
    max-width: 80%;
    color: rgb(255 255 255);
    text-align: center;
    padding: 0.65rem;
    background: rgb(96 96 96);
    border-radius: 16px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.15);
    border: 1px solid rgb(255 255 255 / 0%);
  }
`;

export default Cuisines;
