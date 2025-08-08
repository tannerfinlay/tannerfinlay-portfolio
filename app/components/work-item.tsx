import React from "react";

export default function WorkItem({ items }) {
  return (
    <div>
      {items.map((item) => {
        return <div className="pt-4">{item}</div>;
      })}
    </div>
  );
}
