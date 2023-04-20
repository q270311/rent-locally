import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchStuff from './fetchStuff'
import Header from '../Header'
import { Wrapper, Tile, Img, StyledLink } from './styled'
import { nanoid } from '@reduxjs/toolkit'

const Page = ({ content }) => (
  <>
    <Header />
    <Wrapper> {content} </Wrapper>
  </>
)

const StuffList = () => {
  const { isLoading, error, data } = useQuery(['stuff'], fetchStuff)
  const [content, setContent] = useState(null)
  const BASE_URL = 'https://sharestuff.somee.com/img/stuff/'

  useEffect(() => {
    if (isLoading) {
      setContent(`Trwa ładowanie...`)
    } else if (error) {
      setContent(`Mamy błąd... ${error.message}`)
    } else if (data) {
      setContent(
        data.map((stuff) => (
          <StyledLink to={`/stuff/${stuff.id}`} key={nanoid()}>
            <Tile key={stuff.id}>
              <Img src={`${BASE_URL}${stuff.img}`} alt="stuff" />
              <p>{stuff.name}</p>
            </Tile>
          </StyledLink>
        ))
      )
    }
  }, [isLoading, error, data])

  return <Page content={content} />
}

export default StuffList
