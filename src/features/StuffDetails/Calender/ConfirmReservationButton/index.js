import { useSelector } from 'react-redux'
import { selectDateRanges } from '../../reservationSlice'
import { Wrapper, Button } from './styled'

const ConfirmReservationButton = () => {
  const reservations = useSelector(selectDateRanges)

  return (
    <Wrapper>
      <Button onClick={() => console.log(reservations)}>
        Confirm reservation
      </Button>
      <p>info</p>
    </Wrapper>
  )
}

export default ConfirmReservationButton
