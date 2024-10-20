import React from "react";

interface FooterProps {
  children: React.ReactNode;
  image: string;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.image} alt="header" className="drink-image" width="400" />
      <div>{props.children}
      </div>
    </footer>
  );
};

export default Footer;
