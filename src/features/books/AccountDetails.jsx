import React from "react";
import { useCheckoutListQuery } from "./bookSlice";
import ReservedBooks from "./ReservedBooks";
import { useGetUserQuery } from "../auth/authSlice";

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
