import styled from "styled-components";

export const HomeSection = styled.div`
  padding: 4rem 4rem 2rem 4rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 590px) {
    padding: 4rem 2rem 2rem 2rem;
  }
`;

export const ContainerSection = styled.div`
  display: flex;

  @media screen and (max-width: 590px) {
    width: 100%;

    flex-direction: column;
    gap: 1rem;
  }
`;

export const LeftSection = styled.div`
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  gap: 2rem;
  h1 {
    line-height: 4rem;
    font-size: 3.1rem;
    letter-spacing: 0.8px;
    font-weight: 500;
  }

  span {
    color: #f97316;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.7px;
    line-height: 2rem;
  }

  button {
    width: 7.5rem;
    height: 2.5rem;
    font-size: 1rem;
    border: none;
    background-color: #f97316;
    color: #ffffff;
    font-weight: 600;
    letter-spacing: 0.7px;
    border-radius: 10px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  @media screen and (max-width: 800px) {
    h1 {
      line-height: 3rem;
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.7px;
    }
  }
`;

export const RightSection = styled.div`
  width: 50%;
  align-items: center;
  /* text-align: center; */
  img {
    width: 15rem;
    border-radius: 5px;
    object-fit: cover;
    height: 25rem;
  }

  @media screen and (max-width: 590px) {
    img {
      width: 10rem;

      height: 20rem;
    }
  }
`;
