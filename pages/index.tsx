import Head from 'next/head'
import Image from 'next/image'
import Button, { PrimaryButton } from '../components/buttons/button.buttons'
import { Grid } from '../components/layouts/grids.layout'

import ProductCard from '../components/cards/product.card'

const Index = () => (
  <>
    <Head>
      <title>pwa-dog</title>
    </Head>
    
    
 <Grid>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
 </Grid>
  </>
)

export default Index