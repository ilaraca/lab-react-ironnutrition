import React from "react";
import "bulma/css/bulma.css";

const FoodBox = props => {
    const buttonClick = (e) => {
        console.log('clicoasdasdasdasdu', e);
        // changeLastName('Silva');
    }

  return props.foods.map ((food) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={food.quantity} />
                </div>
                <div className="control">
                  <button className="button is-info" onClick={buttonClick}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
  })
}

export default FoodBox;
