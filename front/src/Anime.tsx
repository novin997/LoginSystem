import React from "react";
import { Icon } from "semantic-ui-react";
import "./Anime.scss";

export default function Anime({ toggle }: { toggle: () => void }) {
  return (
    <div>
      <div className="sidebar-icon">
        <Icon circular name="sidebar" size="large" onClick={toggle} />
      </div>
      <h1>Anime</h1>
    </div>
  );
}
