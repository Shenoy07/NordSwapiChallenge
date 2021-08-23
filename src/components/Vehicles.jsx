import useVehicles from "../hooks/useVehicles";
import { RiSpaceShipLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

function ListVehicles({ vehicles }) {
  return (
    <ul className="vehicles-space">
      {vehicles.map(({ name }) => (
        <li key={uuidv4()}>
          <RiSpaceShipLine />
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function Vehicles({ urlForVehicles }) {
  const vehicles = useVehicles(urlForVehicles);
  return (
    <td className="ComponentTableData">
      {urlForVehicles.length !== 0 ? (
        <ListVehicles vehicles={vehicles} />
      ) : (
        <span className="NotAvailable-span">
          <td>N/A</td>
        </span>
      )}
    </td>
  );
}
