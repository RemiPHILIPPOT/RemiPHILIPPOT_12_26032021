import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Main = styled.main`
  max-width: 1240px;
  margin: auto;
  a{
      margin-top:1em;
      display:flex;
      flex-direction:column;
  }
`
const Title = styled.h2`
margin: 1em 0em;
`

const ErrorPage = () => {
    return (
        <Main>
				<Title>404</Title>
				<p>Oups ! La page que vous demandez n'existe pas.</p>
				<Link to='/'>Retourner sur la page d’accueil</Link>
			</Main>
    )
}
export default ErrorPage;