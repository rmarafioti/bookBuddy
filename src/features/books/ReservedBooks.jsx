import { useDeleteReservationMutation } from "./bookSlice";

export default function ReservedBooks({ reservation, onDeletionSuccess }) {
  const [deleteReservation, { isLoading, isSuccess }] =
    useDeleteReservationMutation();

  const resDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteReservation(reservation.id).unwrap();
      // Call the onDeletionSuccess callback if provided
      if (onDeletionSuccess) onDeletionSuccess();
    } catch (error) {
      console.error("Error deleting reservation:", error);
      // Handle the error appropriately
    }
  };

  return (
    <li>
      <h3>{reservation.title}</h3>
      <h4>{reservation.author}</h4>
      <button onClick={resDelete} disabled={isLoading}>
        {isLoading ? "Processing..." : "Return Book"}
      </button>
    </li>
  );
}
