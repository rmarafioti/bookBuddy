import { useCheckoutListQuery } from "./bookSlice";
import ReservedBooks from "./ReservedBooks";
import { useGetUserQuery } from "../auth/authSlice";

//display logged in users info with useLoginMutation
//display the books the logged in user currently has checked out.
//create a button to return a checkedout book using useDeleteMutation
export default function AccountDetails() {
  const { data: userData } = useGetUserQuery();
  const { data: reservations } = useCheckoutListQuery();

  return (
    <>
      <h1>Account Details</h1>
      <h2>Checked Out Books:</h2>
      {reservations ? (
        reservations.map((reservation) => (
          <ReservedBooks key={reservation.id} reservation={reservation} />
        ))
      ) : (
        <p>Nothing Reserved</p>
      )}
    </>
  );
}
