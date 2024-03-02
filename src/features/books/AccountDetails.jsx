import React from "react";
import { useCheckoutListQuery } from "./bookSlice";
import ReservedBooks from "./ReservedBooks";
import { useGetUserQuery } from "../auth/authSlice";

export default function AccountDetails() {
  const { data: regUser } = useGetUserQuery();
  const { data: reservations } = useCheckoutListQuery();

  return (
    <>
      <h1>Account Details</h1>
      <p>EMAIL: {regUser?.email}</p>
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
