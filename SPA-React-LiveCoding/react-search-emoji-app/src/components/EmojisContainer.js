import React from "react";
import emojis from "../json/emoji.json";
import EmojiItem from "./EmojiItem";

export default function EmojisContainer() {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <input
        type="text"
        name="search"
        style={{ fontSize: "20px", borderRadius: "10px",width:"50%" }}
      />
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {emojis.map((emoji) => {
          return <EmojiItem symbol={emoji.symbol} />;
        })}
      </div>
    </div>
  );
}
