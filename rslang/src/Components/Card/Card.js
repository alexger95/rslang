import React from 'react';
import { Link } from "react-router-dom";

import './Card.scss';

const Card = (props) => {
  return (
    <Link className="Card border-primary rounded" to={props.href}>
      <div className="row no-gutters">
        <div className="Card-Left col-md-4 d-flex justify-content-center align-items-center">
          <div className={"Card-Image " + props.class} style={{ backgroundColor: 'white' }}>
            <img src={props.pic} className="card-img" ></img>
          </div>
        </div>
        <div className="col-md-8">
          <div className="Card-Right card-body" style={{ color: 'white' }}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
