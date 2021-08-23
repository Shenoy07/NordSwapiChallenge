import "./styles.css";
import "./table.css";
import "./listItems.css";
import "./navigation.css";
import Nav from "./components/Nav";
import Table from "./components/Table";
import { useCommonContext } from "./context/CommonContextProvider";

export default function App() {
  let { people } = useCommonContext();
  return (
    <div className="App">
      <div className="Heading"></div>
      <Nav />
      <Table people={people} />
    </div>
  );
}
