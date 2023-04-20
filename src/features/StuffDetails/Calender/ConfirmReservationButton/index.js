import { useSelector } from 'react-redux'
import { selectReservation } from '../../reservationSlice'
import { Button } from './styled'

const ConfirmReservationButton = () => {
  const res = useSelector(selectReservation)

  return <Button onClick={() => console.log(res)}>Confirm reservation</Button>
}

export default ConfirmReservationButton
