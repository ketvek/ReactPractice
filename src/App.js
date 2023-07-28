import "./styles.css";
import Hellofun from "./components/Hellofun";
import HelloCla from "./components/HelloCla";
import HelloProp from "./components/HelloProp";

export default function App() {
  return (
    <div className="App">
      <Hellofun />
      <HelloCla />
      <HelloProp name="Mango" weight="20gm" />
    </div>
  );
}
