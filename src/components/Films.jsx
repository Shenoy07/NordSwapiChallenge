import useFilms from "../hooks/useFilms";
import { v4 as uuidv4 } from "uuid";
// import { BiCameraMovie } from "react-icons/bi";

function ListFilms({ films }) {
  return (
    <ul>
      {films.map(({ name }) => (
        <li key={uuidv4()}>
          {/* <BiCameraMovie /> */}
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function Films({ filmLinks }) {
  const films = useFilms(filmLinks);
  return (
    <td className="ComponentTableData">
      {films.length !== 0 ? <ListFilms films={films} /> : "N/A"}
    </td>
  );
}
