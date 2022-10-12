import styled from 'styled-components'

export const UserContainer = styled.div`
  padding: 0 32px 0;
`

export const UserTitle = styled.h2`
  font-size: 21px;
  font-weight: 400;
  padding: 16px 0 16px;
  color: #8d00ff;
`

export const UserButton = styled.button`
  margin-top: 32px;
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`
