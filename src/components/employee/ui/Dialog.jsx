// import React from "react";

export const Dialog = ({ open, children }) => {
  const props = {
    open: open || false,
    children: children || null,
  };
  return (
    <>
      <dialog
        className=" top-1/2 left-1/2 py-3 px-5 -translate-x-1/2 -translate-y-1/2 rounded w-1/2 backdrop:bg-black backdrop-blur-md"
        open={props.open}
      >
        {props.children}
      </dialog>
    </>
  );
};
