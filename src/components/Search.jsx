import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </Form>
  );
};

const Form = styled.form`
  margin: 0 2rem;

  div {
    position: relative;
    width: min(550px, 100%);
    margin: 0 auto;
  }

  input {
    color: #525252;
    font-size: 18px;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    width: 100%;
    box-shadow: 0 0 14px 1px rgb(0 0 0 / 8%);
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: #6b6b6b;
  }
`;
export default Search;
