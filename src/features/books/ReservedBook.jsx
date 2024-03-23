import { useDeleteReservationMutation } from "./bookSlice";

/**
 *
 * @component ReserveredBook child component of the AccountDetails component
 * @param {Object} reservation - the book that has been checked out by the user
 * @returns a list with some info about a reserved book & a button for the user to delete reserved book via useDeleteReservationMutation.
 */

export default function ReservedBook({ reservation }) {
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
