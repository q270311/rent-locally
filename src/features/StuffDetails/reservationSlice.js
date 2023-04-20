import { createSlice } from '@reduxjs/toolkit'

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservation: [],
  },
  reducers: {
    addRemoveReservation: (state, { payload }) => {
      const index = state.reservation.findIndex((date) => date === payload)
      if (index === -1) {
        state.reservation.push(payload)
      } else {
        state.reservation.splice(index, 1)
      }
    },
    deleteReservation: (state) => {
      state.reservation = []
    },
  },
})

export const { addRemoveReservation, deleteReservation } =
  reservationSlice.actions

export const selectReservationState = (state) => state.reservation
export const selectReservation = (state) =>
  selectReservationState(state).reservation

export default reservationSlice.reducer
