import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchReservations from "./fetchReservations";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper, Ul, Li, Label } from "./styled";

const Content = ({ content }) => (
  <div>
    <h1>Lista dostępności</h1>
    <Wrapper> {content} </Wrapper>
  </div>
);

const ReservationCheckbox = ({ reservation, setReservationHandler }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Label 
      disabled={reservation.reserved === 1}
      checked={reservation.reserved === 1 ? true : isChecked}
      >
      <input
        type="checkbox"
        disabled={reservation.reserved === 1}
        checked={reservation.reserved === 1 ? true : isChecked}
        onChange={({ target }) => {
          if (reservation.reserved === 0) {
            setChecked(target.checked);
            setReservationHandler(reservation.date.substring(0, 10));
          }
        }}
      />
      {reservation.date.substring(0, 10)}{" "}
      {reservation.reserved === 1 ? " - zajęty" : isChecked ? "Zarezerwuj" : ""}
    </Label>
  );
};

const Calender = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["reservations"], () =>
    fetchReservations({ stuffId: id })
  );
  const [content, setContent] = useState(null);
  const [selectedReservation, setReservation] = useState([]);

  const setReservationHandler = (date) => {
    const index = selectedReservation.findIndex(
      (reservation) => reservation === date
    );
    if (index === -1) {
      setReservation(selectedReservation.push(date));
    } else {
      setReservation(selectedReservation.splice(index, 1));
    }
  };

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie kalendarza...`);
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`);
    } else if (data) {
      setContent(
        data.map((reservation) => (
          <ReservationCheckbox
            key={nanoid()}
            reservation={reservation}
            setReservationHandler={setReservationHandler}
          />
        ))
      );
    }
  }, [isLoading, error, data, id]);

  return <Content content={content} />;
};

export default Calender;
