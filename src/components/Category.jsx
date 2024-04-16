import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiBread, GiCoolSpices,  GiChopsticks, GiChiliPepper } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>

      <SLink to={"/cuisines/Asian"}>
        <GiChopsticks />
        <h4>Asian</h4>
      </SLink>

      <SLink to={"/cuisines/American"}>
        <FaHamburger  />
        <h4>American</h4>
      </SLink>

      <SLink to={"/cuisines/European"}>
        <GiBread  />
        <h4>European</h4>
      </SLink>
      
      <SLink to={"/cuisines/Indian"}>
        <GiCoolSpices />
        <h4>Indian</h4>
      </SLink>
      
      <SLink to={"/cuisines/Korean"}>
        <GiNoodles />
        <h4>Korean</h4>
      </SLink>

      <SLink to={"/cuisines/Mexican"}>
        <GiChiliPepper />
        <h4>Mexican</h4>
      </SLink>  
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: #ffffff;
  box-shadow: 0 0 6px 2px rgb(0 0 0 / 4%);

  cursor: pointer;
  transform: scale(0.8);
  transition: 1s;

  h4 {
    color: #606060;
    font-size: 0.8rem;
  }
  svg {
    color: #606060;
    font-size: 2.5rem;

  }

  &.active {
    background:linear-gradient(35deg, #000000, #4f5058);
    transform: scale(1);
    background: #ffffff;
    svg {
      color: #606060;
    }
    h4 {
      color: #606060;
    }
  }
`;
export default Category;
