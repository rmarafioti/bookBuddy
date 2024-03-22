import { useCheckoutListQuery } from "./bookSlice";
import ReservedBook from "./ReservedBook";
import { useGetUserQuery } from "../auth/authSlice";

import "./accountDetails.css";

/**
 *
 * @component AccountDetails
 * @returns a list of the registered user's info via useGetUserQuery
 * A list of user's reserved books via useCheckoutListQuery if there are any.
 *
 */

export default function AccountDetails() {
  const { data: regUser } = useGetUserQuery();
  const { data: reservations } = useCheckoutListQuery();

  return (
    <main id="accountDetails">
      <section id="accountEmail">
        <h1 class="underline">Account Details</h1>
        <p id="email">EMAIL: {regUser?.email}</p>
      </section>
      <section id="reservations">
        <h2 class="underline">Reservations: </h2>
        {reservations.length ? (
          reservations.map((reservation) => (
            <ReservedBook key={reservation.id} reservation={reservation} />
          ))
        ) : (
          <p>Nothing Reserved</p>
        )}
      </section>
    </main>
  );
}
