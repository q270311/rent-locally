import { createSlice } from '@reduxjs/toolkit'

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    stuffID: null,
    reservations: [],
  },
  reducers: {
    addReservation: (state, { payload }) => {
      state.reservations.push(payload)
      console.log([...state.reservations])
    },
    deleteReservation: (state, { payload }) => {
      const index = state.reservations.findIndex((date) => date === payload)
      state.reservations.splice(index, 1)
      console.log([...state.reservations])
    },
    addDeleteReservation: (state, { payload }) => {
      const index = state.reservations.findIndex((date) => date === payload)
      if (index === -1) {
        state.reservations.push(payload)
      } else {
        state.reservations.splice(index, 1)
      }
    },
    deleteAllReservation: (state) => {
      state.reservations.splice(0, state.reservations.length)
      console.log([...state.reservations])
    },
    setStuffID: (state, { payload }) => {
      state.stuffID = payload.stuffID
    },
  },
})

export const { addReservation, deleteReservation, addDeleteReservation, deleteAllReservation, setStuffID } =
  reservationSlice.actions

export const selectReservationState = (state) => state.reservation
export const selectReservations = (state) =>
  selectReservationState(state).reservations
export const isReservationDate = (state, searchedDate) => {
  return selectReservationState(state).reservations.findIndex(
    (date) => date === searchedDate
  ) === -1
    ? false
    : true
}

export const selectStuffID = (state) => selectReservationState(state).stuffID
export const selectReservationsRange = (state) => {
  if(selectReservationState(state).reservations.length===0)
    return []

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
  console.log([...reservationsRanges])

  return reservationsRanges
}
export default reservationSlice.reducer
