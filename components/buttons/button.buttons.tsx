import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  padding: 0.25em 1em;
`

export const PrimaryButton = styled(Button)`
  background: #000000;
  color: #ffffff;
`

export default Button;