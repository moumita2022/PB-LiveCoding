import React from "react";

export default function EmojiItem(props) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        boxShadow: "2px 2px 5px gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:"20%",
        fontSize:"50px",
        margin:"20px"
      }}
    >
      {props.symbol}
    </div>
  );
}
