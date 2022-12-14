import styled from 'styled-components'

export const Form = styled.form`
  padding: 0 32px 32px;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Button = styled.button`
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

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  padding: 16px 0 16px;
  color: #8d00ff;
`

export const Error = styled.span`
  font-size: 14px;
  padding: 16px 0 0;
  color: #D32F2F;
  font-weight: 400;
`
