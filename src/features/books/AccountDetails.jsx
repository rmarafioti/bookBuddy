import React from "react";
import { useCheckoutListQuery } from "./bookSlice";
import ReservedBooks from "./ReservedBooks";
import { useGetUserQuery } from "../auth/authSlice";

/*return a list of the registered user's info & that user's reserved books
 *information is returned via the specfic queries to the api if there is info to be returned
 *.map over the reserved books in order to return a list the reserved books if there are any
 */

export default function AccountDetails() {
  const { data: regUser } = useGetUserQuery();
  const { data: reservations } = useCheckoutListQuery();

  return (
    <main id="accountDetails">
      <section id="accountInfo">
        <div id="accountEmail">
          <h1 id="underline">Account Details</h1>
          <p id="email">EMAIL: {regUser?.email}</p>
        </div>
        <div id="reservations">
          <h2 id="underline">Reservations: </h2>
          {reservations ? (
            reservations.map((reservation) => (
              <ReservedBooks key={reservation.id} reservation={reservation} />
            ))
          ) : (
            <p>Nothing Reserved</p>
          )}
        </div>
      </section>
    </main>
  );
}
