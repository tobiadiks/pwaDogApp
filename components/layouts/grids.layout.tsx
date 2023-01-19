import styled, { css } from 'styled-components'

export const Grid = styled.div`
display:grid;
height: 100vh;
grid-template-rows: repeat(4, 1fr);
grid-template-columns: repeat(4, 1fr);
grid-gap: 1rem;

@media screen and (min-width:320px) and (max-width: 480px) {
  display:flex;
  flex-direction:column;
}

@media screen and (min-width:481px) and (max-width: 768px) {
  grid-template-rows: repeat(4, 1fr);
grid-template-columns: repeat(4, 1fr);
}

@media screen and (min-width:769px) and (max-width: 1024px) {
  grid-template-rows: repeat(6, 1fr);
grid-template-columns: repeat(6, 1fr);
}

@media screen and (min-width:1025px) {
  grid-template-rows: repeat(8, 1fr);
grid-template-columns: repeat(8, 1fr);
}

`