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
            Delicious <span>Dining Savor </span> the Flavor Delivered to Your{" "}
            <span>Door Step</span>
          </h1>
          <p>
            Discover a world of culinary delight right at your fingertips with
            Delicious Dining, where you can indulge in an array of mouthwatering
            dishes delivered directly to your doorstep. Experience gourmet
            cuisine from renowned restaurants, thoughtfully selected and
            conveniently brought to you.
          </p>
          <button>Order Now</button>
        </LeftSection>
        <RightSection>
          <img src={homeBanner} alt="Banner" />
        </RightSection>
      </ContainerSection>
    </HomeSection>
  );
};

export default Home;
