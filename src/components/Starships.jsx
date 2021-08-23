import useStarships from "../hooks/useStarships";
import { v4 as uuidv4 } from "uuid";

function ListStarships({ ships }) {
  return (
    <ul>
      {ships.map(({ name }) => (
        <li key={uuidv4()}>{name}</li>
      ))}
    </ul>
  );
}

export default function Starships({ urlForStarship }) {
  const ships = useStarships(urlForStarship);
  return (
    <td className="ComponentTableData">
      {ships.length !== 0 ? (
        <ListStarships ships={ships} />
      ) : (
        <span className="NotAvailable-span">
          <td>N/A</td>
        </span>
      )}
    </td>
  );
}
