import { Routes, Route, Navigate } from 'react-router-dom'
import { toStuffList, toStuffDetails } from './routes'
import StuffList from '../features/StuffList'
import StuffDetails from '../features/StuffDetails'

function App() {
  return (
    <Routes>
      <Route path={toStuffList()} element={<StuffList />} />
      <Route path={toStuffDetails()} element={<StuffDetails />} />
      <Route path="/" element={<Navigate to={toStuffList()} />} />
      {/* <Route path='*' element={<Error />} /> */}
    </Routes>
  )
}

export default App
