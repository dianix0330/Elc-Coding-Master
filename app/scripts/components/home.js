/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";

const Home = ({ data }) => {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */
  return (
    <section id="home">
      <div className="home__products">
        {data.map((product) => (
          <div key={product._id} className="home__products__item">
            <img src={product.picture} />
            <div className="home__products__item__detail">
              <div className="item--name">{product.name}</div>
              <div className="item--about">{product.about}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export out the React Component
module.exports = Home;
