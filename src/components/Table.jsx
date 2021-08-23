import Homeworld from "./Homeworld";
import Films from "./Films";
import Species from "./Species";
import Vehicles from "./Vehicles";
import Starships from "./Starships";
import ReadableDate from "./ReadableDate";
import { usePeople } from "../hooks/usePeople";
import { useCommonContext } from "../context/CommonContextProvider";

export default function Table() {
  usePeople();
  const { people } = useCommonContext();
  console.log(people);
  return (
    <div className="DivForTable">
      <table>
        <thead>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair Color</th>
          <th>Skin Color</th>
          <th>Eye Color</th>
          <th>Birth Year</th>
          <th>Gender</th>
          <th>Homeworld</th>
          <th>Films</th>
          <th>Species</th>
          <th>Vehicles</th>
          <th>Starships</th>
          <th>Created</th>
          <th>Edited</th>
          {/* <th>url</th> */}
        </thead>
        <tbody>
          {people.map(
            ({
              name,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
              homeworld,
              films,
              species,
              vehicles,
              starships,
              created,
              edited
            }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{height}</td>
                <td>{mass}</td>
                <td>{hair_color}</td>
                <td>{skin_color}</td>
                <td>{eye_color}</td>
                <td>{birth_year}</td>
                <td>{gender}</td>
                <Homeworld urlForHomeworld={homeworld} />
                <Films filmLinks={films} />
                <Species urlForSpecies={species} />
                <Vehicles urlForVehicles={vehicles} />
                <Starships urlForStarship={starships} />
                <ReadableDate defaultDateFormat={created} />
                <ReadableDate defaultDateFormat={edited} />
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
