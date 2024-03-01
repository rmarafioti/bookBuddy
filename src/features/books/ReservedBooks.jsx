import { useDeleteReservationMutation } from "./bookSlice";

export default function ReservedBooks({ reservation }) {
  const [deleteReservation] = useDeleteReservationMutation();

  const resDelete = async (e) => {
    e.preventDefault();
    deleteReservation(reservation.id);
  };

  return (
    <li>
      <h3>{reservation.title}</h3>
      <h4>{reservation.author}</h4>
      <button onClick={resDelete}>Return Book</button>
    </li>
  );
}
