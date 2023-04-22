import { useState } from "react";
import "./global.css";

export default function Root(props) {
  const [ask, setAsk] = useState<string>("");

  return (
    <div className="mfe-eris-base">
      <div className="mfe-eris-navbar">MFE Éris</div>

      <div className="mfe-eris-conteudo">conteudo</div>

      <div className="mfe-eris-search">
        <input
          className="mfe-eris-search-input"
          type="text"
          value={ask}
          onChange={(event) => setAsk(event.target.value)}
        />
        <button className="mfe-eris-search-button" type="button">
          Perguntar
        </button>
      </div>
    </div>
  );
}
