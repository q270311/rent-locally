import { useQueryClient } from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'

import {
  selectReservations,
  selectReservationsRange,
  selectStuffID,
  addDeleteReservation,
  deleteAllReservation,
} from '../../reservationSlice'
import pushReservations from './pushReservations'
import { Wrapper, Button } from './styled'

const ConfirmReservationButton = () => {
  const dispatch = useDispatch()
  const stuffId = useSelector(selectStuffID)
  const reservationNumber = useSelector(selectReservations).length
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
    dispatch(deleteAllReservation)
    queryClient.invalidateQueries('reservations')
  }

  return (
    <Wrapper>
      <Button onClick={sendReservations} isHidden={reservationNumber < 1}>
        Confirm reservation
      </Button>
    </Wrapper>
  )
}

export default ConfirmReservationButton
