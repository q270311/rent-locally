import { useState } from "react";
import { Label, Input } from "./styled";

const CardCalender = ({ day, setReservation }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Label
      disabled={day.reserved === 1}
      checked={day.reserved === 1 ? true : isChecked}
    >
      <Input
        type="checkbox"
        disabled={day.reserved === 1}
        checked={day.reserved === 1 ? true : isChecked}
        onChange={({ target }) => {
          if (day.reserved === 0) {
            setChecked(target.checked);
            setReservation(day.date.substring(0, 10));
          }
        }}
      />
      {day.date.substring(0, 10)}{" "}
      {day.reserved === 1 ? " - zajęty" : isChecked ? "Zarezerwuj" : ""}
    </Label>
  );
};

export default CardCalender;
