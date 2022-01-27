import React, {useEffect, useState} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  
  return (
    <nav>
      <ul className="flex-row-wrap">
        {categories.map((category) => (
          <li
            className={`mx-2 ${
              currentCategory === category && 'navActive'
            }`}
            key={category}
          >
            <a href={`#${category}`} onClick={() => {setCurrentCategory(category)}}>
              {capitalizeFirstLetter(category)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;