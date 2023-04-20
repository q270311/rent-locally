import axios from 'axios'

const fetchReservations = async ({ stuffId }) =>
  await axios
    .get(`https://sharestuff.onrender.com/api/reservations/${stuffId}`)
    .then((response) => response.data)

export default fetchReservations
