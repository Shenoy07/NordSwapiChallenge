import useSpecies from "../hooks/useSpecies.js";

export default function Species({ urlForSpecies }) {
  const { name } = useSpecies(urlForSpecies);

  const questionSymbol = "fa fa-question fa-lg";
  const droidSymbol = "fa fa-android fa-lg";
  // const userCircle = "fas fa-user-circle";

  return (
    <td className="Species-logo">
      <span>{name ? "" : ""}</span>
      <i className={name === "Droid" ? droidSymbol : questionSymbol}></i>
    </td>
  );
}
