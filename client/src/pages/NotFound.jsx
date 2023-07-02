import React from 'react'
import NotFoundStyled, { Head404, MessageBox } from './style/NotFound.styled'


const NotFound = () => {
  return (
    <NotFoundStyled>
      <MessageBox>
        <Head404>
          404
        </Head404>
        Not Found
      </MessageBox>
    </NotFoundStyled>
  )
}

export default NotFound