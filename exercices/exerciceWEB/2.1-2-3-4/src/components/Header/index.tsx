import React from "react";

interface HeaderProps {
  children: React.ReactNode;
  image: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.image} alt="header" className="drink-image" width="400" />
      <div>{props.children}
      </div>
    </header>
  );
};

export default Header;
