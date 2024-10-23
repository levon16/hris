import React from "react";

export const Button = ({ type, name, className, text }) => {
  const buttonProp = {
    type: type || "",
    names: name || "",
    className: className || "",
    texts: text || "",
  };

  const { texts, names, ...restButtonProp } = buttonProp;

  return <button {...restButtonProp}>{texts} </button>;
};
