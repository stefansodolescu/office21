import React from 'react'
import { Box, Container, Typography, Grid, Divider} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { StaticImage } from 'gatsby-plugin-image'


const useStyles = makeStyles(() => ({
    pricelist: {
      background: 'linear-gradient(to top, #000000, #434343)'

  },

}))

export default function Prices() {
  const styles = useStyles()
  return (
    <Box className={styles.pricelist} id='prices'>
      <br></br>  
      <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>     
      <br></br>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={4}>
              <Typography component='h2' variant='h4' color='white'>
                Preturi
              </Typography>
              <br></br>
            </Grid>  
            <Grid item xs={8}>
            </Grid>  
            <br></br>
          <Grid item xs={12}>
            <Container>
              <Box maxWidth='xl'>
                  <StaticImage src='https://images-squirfox.imgix.net/Pricing%20Menu%20-%20Made%20with%20PosterMyWall.png' alt='Pricing Menu - Made With PosterMyWall'/>
              </Box>
              <br></br>
              <br></br>
            </Container>
          </Grid> 
        </Grid>    
      </Container>  
    </Box>


  )
}
