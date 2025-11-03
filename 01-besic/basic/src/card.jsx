import React from 'react';
import './card.css';

function Card({ day, post, path }) {
  return (
    <div className="main">
      <div className="up">
        <img src={path} alt={post} />
      </div>
      <div className="midd" id="midd-1">
        <h5>{day} Days ago</h5>
        <h1>{post}</h1>
        <p>hy, i am kavya patel. Voluptates qui est rerum dolordolor sit amet consectetur adipisicing elit. Voluptates qui est rerum dolor</p>
      </div>
      <div className="down" id="post-1">
        {/* down details */}
        <div className="d-d">
          <p>
            <b>4<sup>M</sup></b>
            <br />
            READ
          </p>
        </div>
        <div className="d-d">
          <p>
            <b>1152</b>
            <br />
            VIEWS
          </p>
        </div>
        <div className="d-d">
          <p>
            <b>52</b>
            <br />
            COMMENTS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;