import { render } from "@czechitas/render";
import { Episode } from "../components/Episode/Episode";
import { episodes } from "./data";
import "../global.css";
import "./index.css";
import "../components/Episode/Episode.css"

document.querySelector("#root").innerHTML = render(
  <>
    <div className="episodes-list">
      {episodes.map(({num, title, guest}) => <Episode key={num} num={num} title={title} guest={guest}/>)}
    </div>
  </>
);