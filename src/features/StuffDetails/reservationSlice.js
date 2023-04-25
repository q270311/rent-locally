import { createSlice } from '@reduxjs/toolkit'

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservations: [],
  },
  reducers: {
    addDeleteReservation: (state, { payload }) => {
      const index = state.reservations.findIndex((date) => date === payload)
      if (index === -1) {
        state.reservations.push(payload)
      } else {
        state.reservations.splice(index, 1)
      }
    },
    deleteAllReservation: (state) => {
      state.reservations = []
    },
  },
})

export const { addDeleteReservation, deleteAllReservation } =
  reservationSlice.actions

export const selectReservationState = (state) => state.reservation
export const selectReservations = (state) =>
  selectReservationState(state).reservations
export const selectDateRanges = (state) => {
  const sortedReservations = [
    ...selectReservationState(state).reservations,
  ].sort()
  let reservationsRanges = []
  let start = sortedReservations[0]
  let end = sortedReservations[0]
  for (let i = 1; i < sortedReservations.length; i++) {
    let date = sortedReservations[i]
    let prevDate = sortedReservations[i - 1]
    let prevDay = new Date(prevDate)
    let currentDay = new Date(date)
    prevDay.setDate(prevDay.getDate() + 1)
    if (prevDay.getTime() !== currentDay.getTime()) {
      reservationsRanges = [...reservationsRanges, { start, end }]
      start = date
    }
    end = date
  }
  reservationsRanges = [...reservationsRanges, { start, end }]

  return reservationsRanges
}
export default reservationSlice.reducer
