import { useDeleteReservationMutation } from "./bookSlice";

/*Reserved book component is a childs component of the account details component
 *create a function to return a list with some info about a reserved book
 *&& a button to delete reserved book via delete reservation mutation
 */

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
