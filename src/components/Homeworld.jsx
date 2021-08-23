import useHomeworld from "../hooks/useHomeworld";

export default function Homeworld({ urlForHomeworld }) {
  const { name } = useHomeworld(urlForHomeworld);
  return <td>{name}</td>;
}
