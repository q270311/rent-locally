import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectStuffID } from '../reservationSlice'
import { useQuery } from '@tanstack/react-query'
import fetchReservations from './fetchReservations'
import { nanoid } from '@reduxjs/toolkit'
import { Wrapper } from './styled'
import CardCalendar from './CardCalendar'
import ConfirmReservationButton from './ConfirmReservationButton'

const CalendarContent = ({ title, content, extraContent }) => (
  <div>
    <h1>{title}</h1>
    {content}
    {extraContent}
  </div>
)

const Calendar = () => {
  const id = useSelector(selectStuffID)
  const { isLoading, error, data } = useQuery(['reservations'], () =>
    fetchReservations({ stuffId: id })
  )
  const [content, setContent] = useState(null)

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie kalendarza...`)
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`)
    } else if (data) {
      setContent(
        <Wrapper>
          {data.map((day) => (
            <CardCalendar key={nanoid()} day={day} />
          ))}
        </Wrapper>
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, error, data, id])

  return (
    <CalendarContent
      title={`Booking calendar`}
      content={content}
      extraContent={<ConfirmReservationButton />}
    />
  )
}

export default Calendar
