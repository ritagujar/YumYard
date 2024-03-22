import styled from "styled-components";

export const NavbarSection = styled.div`
  width: 100%;
  height: 5rem;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeadingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const MenuSection = styled.div`
  button {
    width: 5.5rem;
    height: 2.2rem;
    border: none;
    font-size: 0.94rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    background-color: #262626;
    color: #ffffff;
    border-radius: 10px;
    letter-spacing: 0.7px;
    cursor: pointer;
  }

  button:hover {
    background-color: #f97316;
  }
`;
