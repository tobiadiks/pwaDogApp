import styled from 'styled-components'
import { Row } from '../layouts/rows.layout'



export const Card = styled.div`
display:block;
height: auto;
width:auto;

`

const Title = styled.h2`
  color: #000000;
  font-weight: 500;
`
const SubTitle = styled.div`
  color: #485562;
  font-weight: 300;
  margin: 0.25rem 0;
`

const Address = styled.div`
  color: #485562;
  font-weight: 300;
  margin: 0.25rem 0;
`
const Price = styled.div`
  color: #2ca551;
  font-weight: 700;
  font-size:1rem;
`

const Image = styled.img`
border-radius:0.5rem;
width:100%;
object-fit:cover;
`

const ProductCard = (props) => (
  <Card>
    <Image src='https://source.unsplash.com/600x400/?cat' alt='random cat' />
    <Row>
      <div>
    <Title>eliteboerboel</Title>
    <SubTitle>boerboel</SubTitle>
    <Price>
      $22,600
    </Price>
    </div>
    
    </Row>
    <Address>
      Beach Haven Jacksonville, FL
    </Address>
  </Card>
)
export default ProductCard