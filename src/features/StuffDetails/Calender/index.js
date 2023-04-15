import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchReservations from "./fetchReservations";

import { Wrapper } from "./styled";

const Content = ({ content }) => (
  <div>
    <h1>Calender</h1>
    <Wrapper> {content} </Wrapper>
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
        <ul>
          {data.map((reservation) => (
            <li>
              {(reservation.date).substring(0, 10)} {(reservation.reserved===1? ' - zajęty' : '')}
            </li>
          ))}
        </ul>
      );
    }
  }, [isLoading, error, data, id]);

  return <Content content={content} />;
};

export default Calender;
