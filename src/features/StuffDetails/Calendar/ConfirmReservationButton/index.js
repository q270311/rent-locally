import { useQueryClient } from '@tanstack/react-query'
import { useSelector, useDispatch } from 'react-redux'

import {
  selectReservationsRange,
  selectStuffID,
  deleteAllReservation,
} from '../../reservationSlice'
import pushReservations from './pushReservations'
import { Wrapper, Button } from './styled'

const ConfirmReservationButton = () => {
  const dispatch = useDispatch()
  const stuffId = useSelector(selectStuffID)
  const reservationsRange = useSelector(selectReservationsRange)
  const queryClient = useQueryClient()

  const sendReservations = () => {
    Promise.all(
      reservationsRange.map((reservation) =>
        pushReservations({
          stuffId: stuffId,
          startDate: reservation.start,
          endDate: reservation.end,
        }).catch((error) => {
          console.error(
            `Błąd podczas zapisywania rezerwacji: ${error}
              Rezerwacja ${reservation.start} - ${reservation.end} nie jest potwierdzona`
          )
        })
      )
    )
    dispatch(deleteAllReservation)
    console.log(`removed All`)
    queryClient.invalidateQueries('reservations')
  }
  return (
    <Wrapper>
      <Button onClick={sendReservations} isHidden={reservationsRange.length < 1}>
        Confirm reservation
      </Button>
    </Wrapper>
  )
}

export default ConfirmReservationButton
