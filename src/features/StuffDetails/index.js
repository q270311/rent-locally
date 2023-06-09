import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { deleteAllReservation, setStuffID } from './reservationSlice'
import fetchStuffDetails from './fetchStuffDetails'
import Header from '../Header'
import Calendar from './Calendar'
import { Wrapper, StuffWrapper, Img, Description } from './styled'

const Page = ({ content }) => (
  <>
    <Header />
    <Wrapper> {content} </Wrapper>
  </>
)

const StuffDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { isLoading, error, data } = useQuery(['stuffDetails'], () =>
    fetchStuffDetails({ stuffId: id })
  )
  const [content, setContent] = useState(null)
  const BASE_URL = 'https://sharestuff.somee.com/img/stuff/'

  useEffect(() => {
    dispatch(deleteAllReservation())
    dispatch(setStuffID({ stuffID: id }))
  }, [dispatch, id])

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie...`)
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`)
    } else if (data) {
      setContent(
        <>
          <StuffWrapper>
            <h1>{data[0].name}</h1>
            <Img src={`${BASE_URL}${data[0].img}`} alt="stuff" />
          </StuffWrapper>
          <Calendar />
          <Description>{data[0].description}</Description>
        </>
      )
    }
  }, [isLoading, error, data, id])

  return <Page content={content} />
}

export default StuffDetails
