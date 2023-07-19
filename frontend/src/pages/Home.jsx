import CatchyText from "../components/CatchyText/CatchyText";
import Objective from "../components/Objective/Objective";
import "./home.scss";

export default function Home() {
  return (
    <div className="homeContainer">
      <CatchyText />
      <Objective />
    </div>
  );
}
