import React, {useState, useEffect} from "react";
import Nav from '../Nav'

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;
  return (
    <header className="px-1">
      <h2>
        <a data-testid="link" href="/">KEESPARC</a>
      </h2>
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
    </header>
  );
}

export default Header;