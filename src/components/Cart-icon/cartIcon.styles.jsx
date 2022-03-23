import styled from 'styled-components'
import Bag from '../../assets/shopping-bag.svg?component'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const ShoppingSvg = styled(Bag)`
  width: 30px;
  height: 30px;
`
export const CountItem = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`
