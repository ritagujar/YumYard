import React from "react";
import {
  ContainerSection,
  HomeSection,
  LeftSection,
  RightSection,
} from "./style";
import homeBanner from "../../images/home-banner.jpg";

const Home = () => {
  return (
    <HomeSection>
      <ContainerSection>
        <LeftSection>
          <h1>
            Delicious <span>Dining Savor</span>he Flavor Delivered to Your{" "}
            <span>Door Step</span>
          </h1>
        </LeftSection>
        <RightSection>
          <img src={homeBanner} alt="Banner" />
        </RightSection>
      </ContainerSection>
    </HomeSection>
  );
};

export default Home;
