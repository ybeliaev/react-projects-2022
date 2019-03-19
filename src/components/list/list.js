import React, { useLayoutEffect } from "react";

import ListItem from "../list-item";
import "./list.css";

const List = ({ someData }) => {
  const elements = someData.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <ListItem
          {...itemProps}
          onImportant={() => onToggleImportant(id)}
          onDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};
