import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import DropDown from "./layout/Dropdown";
import Card from "./layout/Card";

const Body = ({ loading, posts }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__grid">
          <Card posts={posts} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Body;
