import { useQueryClient } from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'

import {
  selectReservationsRange,
  selectStuffID,
  addDeleteReservation
} from '../../reservationSlice'
import pushReservations from './pushReservations'
import { Wrapper, Button } from './styled'

const ConfirmReservationButton = () => {
  const dispatch = useDispatch()
  const stuffId = useSelector(selectStuffID)
  const reservations = useSelector(selectReservationsRange)
  const queryClient = useQueryClient()

  const sendReservations = async () => {
    Promise.all(
      reservations.map((reservation) =>
        pushReservations({
          stuffId: stuffId,
          startDate: reservation.start,
          endDate: reservation.end,
        })
          .then(() => {
            dispatch(addDeleteReservation(reservation.start))
            dispatch(addDeleteReservation(reservation.end))
          })
          .catch((error) => {
            console.error(
              `Błąd podczas zapisywania rezerwacji: ${error}
              Rezerwacja ${reservation.start} - ${reservation.end} nie jest potwierdzona`
            )
          })
      )
    )
    queryClient.invalidateQueries('reservations')
  }

  return (
    <Wrapper>
      <Button 
      onClick={sendReservations}
      visible=hidden
      >Confirm reservation</Button>
    </Wrapper>
  )
}

export default ConfirmReservationButton
