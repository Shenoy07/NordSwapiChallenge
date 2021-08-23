import useChangeDate from "../hooks/useChangeDate";

export default function ReadableDate({ defaultDateFormat }) {
  const name = useChangeDate(defaultDateFormat);
  return <td>{name}</td>;
}
