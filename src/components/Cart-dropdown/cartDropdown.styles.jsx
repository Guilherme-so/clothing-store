import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../Button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  right: 40px;
  top: 80px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
