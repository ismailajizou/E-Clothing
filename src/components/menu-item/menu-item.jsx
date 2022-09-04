import React from "react";
import { useHistory } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <div
      className={`${size ? size : ""} menu-item`}
      onClick={() => history.push(linkUrl)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
