import { useDeleteReservationMutation } from "./bookSlice";

export default function ReservedBooks({ reservation }) {
  const [deleteReservation] = useDeleteReservationMutation();

  const resDelete = async (e) => {
    e.preventDefault();
    deleteReservation(reservation.id);
  };

  return (
    <li id="reservationInfo">
      <h3>{reservation.title}</h3>
      <h5 id="author">{reservation.author}</h5>
      <button id="returnBook" onClick={resDelete}>
        Return Book
      </button>
    </li>
  );
}
