import axios from 'axios'

const pushReservation = async ({ stuffId, startDate, endDate }) => {
  await axios.post('https://sharestuff.onrender.com/api/reservation', {
    stuffId: stuffId,
    startDate: startDate,
    endDate: endDate,
  })
}

export default pushReservation
