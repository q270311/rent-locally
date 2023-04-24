import { useSelector } from 'react-redux'
import { selectReservation } from '../../reservationSlice'
import { Button } from './styled'

const getDateRanges = (reservations) => {
  const sortedReservations = [...reservations].sort()
  let rangesReservations = []
  let start = sortedReservations[0]
  let end = sortedReservations[0]
  for (let i = 1; i < sortedReservations.length; i++) {
    let date = sortedReservations[i]
    let prevDate = sortedReservations[i - 1]
    let prevDay = new Date(prevDate)
    let currentDay = new Date(date)
    prevDay.setDate(prevDay.getDate() + 1)
    if (prevDay.getTime() !== currentDay.getTime()) {
      rangesReservations = [...rangesReservations, { start, end }]
      console.log(start + ' - ' + end)
      start = date
    }
    end = date
  }
  rangesReservations = [...rangesReservations, { start, end }]
  console.log(rangesReservations)
}

const ConfirmReservationButton = () => {
  const reservations = useSelector(selectReservation)

  return (
    <Button onClick={() => getDateRanges(reservations)}>
      Confirm reservation
    </Button>
  )
}

export default ConfirmReservationButton
