import "./styles.css";
import "./table.css";
import "./listItems.css";
import Nav from "./components/Nav";
import Table from "./components/Table";
import { useCommonContext } from "./context/CommonContextProvider";

export default function App() {
  let { people } = useCommonContext();
  return (
    <div className="App">
      <Nav />
      <Table people={people} />
    </div>
  );
}
