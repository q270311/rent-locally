import { useSelector } from 'react-redux'
import { selectReservation } from '../../reservationSlice'
import { Button } from './styled'

const getDateRanges = (reservationsTable) => {
  const reservations=[...reservationsTable].sort()
  let start = reservations[0]
  let end = reservations[0]
  for (let i = 1; i < reservations.length; i++) {
    let date = reservations[i]
    let prevDate = reservations[i - 1]
    let prevDay = new Date(prevDate)
    let currentDay = new Date(date)
    prevDay.setDate(prevDay.getDate() + 1)
    if (prevDay.getTime() !== currentDay.getTime()) {
      console.log(start + ' - ' + end)
      start = date
    }
    end = date
  }
  console.log(start + ' - ' + end)
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
