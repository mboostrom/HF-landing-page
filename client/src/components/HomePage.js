import React from "react";

const HomePage = (props) => {
  return (
    <>
      <div className="home-page">
        <div className="app-bar" />
        <div className="header">
          <h1>
            THE FLAVOR STARTS
            <br />
            <span className="cursive">at home with Hatfield</span>
          </h1>
          <div className="header-box">
            <p>We have smoked bacon ready for your turkey sandwich!</p>
          </div>
          <div className="header-button">
            <p>Find a store near you!</p>
          </div>
        </div>
        <div className="pork">
          <div className="pork-left" />
          <div className="pork-right">
            <h2>Premium Pork With a Pledge</h2>
            <p className="pork-p">
              For over 125 years, Hatfield has always kept the same promise: Simple to cook, simple
              to enjoy. That’s because we’re driven by a conviction that our business is about more
              than great-tasting products. It’s about creating a higher quality of life for our
              animals, farmers, community and you.
            </p>
            <div className="mid-button">
              <p>Learn more about Our Pledge</p>
            </div>
          </div>
        </div>
        <div className="middle-img" />
        <div className="page-info">
          <h2>Find Inspiration For Your Next Meal</h2>
          <p className="page-info-p">
            At Hatfield, we believe mealtime should be spent not only enjoying delicious tasting
            food, but also spending quality time with the whole family. Whether you’re looking for
            your next weeknight dinner or your new favorite holiday tradition, our premium pork is
            sure to have everyone asking for seconds.
          </p>
          <div className="mid-button">
            <p>Check out our tasty recipes!</p>
          </div>
        </div>
        <div className="img-section">
          <div className="img-left" />
          <div className="img-right" />
        </div>
        <div className="start-cooking">
          <div className="cooking-box">
            <h2>
              One Ingredient,
              <br />
              Endless Possibilities
            </h2>
            <p className="cooking-p">Make meals a breeze with Hatfield Recipe Essentials.</p>
            <div className="mid-button">
              <p>Start cooking!</p>
            </div>
          </div>
        </div>
        <div className="page-info">
          <h2>Bringing A World of Flavor to Your Table</h2>
          <p className="page-info-p">
            Hatfield is a family-owned, American-made company driven by a conviction that our
            business isn’t just about quality pork products. It’s about accountability to our
            animals, farmers, community and — of course — you and your family!
          </p>
          <div className="mid-button">
            <p>Explore the history of Hatfield</p>
          </div>
        </div>
        <div className="footer" />
      </div>
    </>
  );
};

export default HomePage;
