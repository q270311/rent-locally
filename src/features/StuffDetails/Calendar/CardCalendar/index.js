import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isReservationDate, deleteReservation, addReservation} from '../../reservationSlice'
import { Label, Input } from './styled'

const CardCalendar = ({ day }) => {
  const dispatch = useDispatch();
  const reserved = useSelector((state) =>
    isReservationDate(state, day.date.substring(0, 10))
  );
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    reserved
      ? dispatch(deleteReservation(day.date.substring(0, 10)))
      : dispatch(addReservation(day.date.substring(0, 10)));
  };

  return (
    <Label disabled={day.reserved === 1} checked={day.reserved === 1 ? true : isChecked}>
      <Input
        type="checkbox"
        disabled={day.reserved === 1}
        checked={day.reserved === 1 ? true : isChecked}
        onChange={handleCheckboxChange}
      />
      {day.date.substring(0, 10)} {day.reserved === 1 ? " - zajęty" : isChecked ? "Zarezerwuj" : ""}
    </Label>
  );
};

export default CardCalendar
