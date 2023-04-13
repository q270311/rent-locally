import axios from "axios";

const fetchStuffDetails = async ({stuffId}) =>
  await axios
    .get(`https://sharestuff.onrender.com/api/stuff/${stuffId}`)
    .then((response) => response.data);

export default fetchStuffDetails;
