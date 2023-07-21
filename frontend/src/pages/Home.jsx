import CatchyText from "../components/CatchyText/CatchyText";
import Objective from "../components/Objective/Objective";
import ShowClass from "../components/ShowClass/ShowClass";
import "./home.scss";
import "../utils.scss";

export default function Home() {
  return (
    <div className="homeContainer">
      <CatchyText />
      <Objective />
      <ShowClass />
    </div>
  );
}
