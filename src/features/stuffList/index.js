import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Wrapper, Tile, Img } from "./styled";

const fetchStuff = async () =>
  await axios
    .get("https://sharestuff.onrender.com/api/stuff")
    .then((response) => response.data);

const StuffList = () => {
  const { isLoading, error, data } = useQuery(["contributors"], fetchStuff);

  if (isLoading) {
    return <Wrapper>Trwa ładowanie...</Wrapper>;
  }

  if (error) {
    return <Wrapper>{`Mamy błąd... ${error.message}`}</Wrapper>;
  }

  return (
    <Wrapper>
      {data.map((stuff) => (
        <Tile key={stuff.id}>
          <Img
            src={`https://sharestuff.somee.com/img/stuff/${stuff.img}`}
            alt="stuff"
          />
          <p>{stuff.name}</p>
        </Tile>
      ))}
    </Wrapper>
  );
};

export default StuffList;
