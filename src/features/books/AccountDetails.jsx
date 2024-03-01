import React from "react";
import { useCheckoutListQuery } from "./bookSlice";
import ReservedBooks from "./ReservedBooks";

export default function AccountDetails() {
  const { data: reservations, refetch } = useCheckoutListQuery();

  const handleDeletionSuccess = () => {
    refetch();
  };

  return (
    <>
      <h1>Account Details</h1>
      {reservations ? (
        reservations.map((reservation) => (
          <ReservedBooks
            key={reservation.id}
            reservation={reservation}
            onDeletionSuccess={handleDeletionSuccess}
          />
        ))
      ) : (
        <p>Nothing Reserved</p>
      )}
    </>
  );
}
