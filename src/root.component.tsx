import { useState } from "react";
import "./global.css";

export default function Root(props) {
  const [ask, setAsk] = useState<string>("");

  return (
    <div className="mfe-eris-base">
      <div className="mfe-eris-conteudo scrollbar">conteudo</div>

      <div className="mfe-eris-search">
        <div className="mfe-eris-search-box mfe-eris-util-glass">
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
    </div>
  );
}
