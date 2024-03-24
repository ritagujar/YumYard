import styled from "styled-components";

export const HomeSection = styled.div`
  padding: 4rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
`;

export const ContainerSection = styled.div`
  display: flex;
`;

export const LeftSection = styled.div`
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  max-width: 70%;
  gap: 2rem;
  h1 {
    line-height: 4rem;
    font-size: 3rem;
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
`;

export const RightSection = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
  img {
    width: 15rem;
    border-radius: 5px;
    object-fit: cover;
    height: 25rem;
  }
`;
