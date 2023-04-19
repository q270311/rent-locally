import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchReservations from "./fetchReservations";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper } from "./styled";
import CardCalender from "./CardCalender";
import ConfirmReservationButton from "./ConfirmReservationButton";

const CalenderContent = ({ title, content, extraContent }) => (
  <div>
    <h1>{title}</h1>
    {content}
    {extraContent}
  </div>
);

const Calender = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["reservations"], () =>
    fetchReservations({ stuffId: id })
  );
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie kalendarza...`);
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`);
    } else if (data) {
      setContent(
        <Wrapper>
          {data.map((day) => (
            <CardCalender
              key={nanoid()}
              day={day}
            />
          ))}
        </Wrapper>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error, data, id]);

  return (
    <CalenderContent
      title={`Booking calendar`}
      content={content}
      extraContent={        
        <ConfirmReservationButton />
      }
    />
  );
};

export default Calender;
