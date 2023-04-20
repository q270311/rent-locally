import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../features/StuffDetails/reservationSlice'

const store = configureStore({
  reducer: {
    reservation: reservationReducer,
  },
})

export default store
