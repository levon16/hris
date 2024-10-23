import React from "react";

export const Input = ({ type, className,name, placeholder, text,value, onChange }) => {
  const inputProp = {
    type: type || "text",
    className: className || "",
    name: name || "",
    placeholder: placeholder || "",
    text: text || "",
    value: value ||"",
    onChange: onChange || (() => {}),
  };
  return (
    <>
      <input {...inputProp} />
    </>
  );
};
