import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchStuffDetails from "./fetchStuffDetails";
import Header from "../Header";
import Calender from "./Calender";
import { Wrapper, Img } from "./styled";

const Page = ({ content }) => (
  <>
    <Header />
    <Wrapper> {content} </Wrapper>
  </>
);

const StuffDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["stuffDetails"], () =>
    fetchStuffDetails({ stuffId: id })
  );
  const [content, setContent] = useState(null);
  const BASE_URL = "https://sharestuff.somee.com/img/stuff/";

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie...`);
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`);
    } else if (data) {
      setContent(
        <>
          <div>
            <h1>{data[0].name}</h1>
            <Img src={`${BASE_URL}${data[0].img}`} alt="stuff" />
            <p>{data[0].description}</p>
          </div>
          <Calender />
        </>
      );
    }
  }, [isLoading, error, data, id]);

  return <Page content={content} />;
};

export default StuffDetails;
