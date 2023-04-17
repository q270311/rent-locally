import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchReservations from "./fetchReservations";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper, Button } from "./styled";
import CardCalender from "./CardCalender";

const Content = ({ content }) => (
  <div>
    <h1>Lista dostępności</h1>
    {content}
  </div>
);

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
    console.log(selectedReservation.length===0);
  };

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie kalendarza...`);
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`);
    } else if (data) {
      setContent(
        <>
          <Wrapper>
            {data.map((day) => (
              <CardCalender
                key={nanoid()}
                day={day}
                setReservation={setReservationHandler}
              />
            ))}
          </Wrapper>
          <Button
            isHidden={selectedReservation.length===0}
          >Potwierdź rezerwację
          </Button>
        </>
      );
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error, data, id]);

  return <Content content={content} />;
};

export default Calender;
