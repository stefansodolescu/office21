import React from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Button, Box, Grid, Avatar, Divider} from '@mui/material'
import BackgroundImage from 'gatsby-background-image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { StaticImage } from 'gatsby-plugin-image'







const useStyles = makeStyles(() => ({
  

  banner: {
    backgroundImage: 'url(https://res.cloudinary.com/squirfox-com/image/upload/f_auto,q_100/v1647891339/banneroff21_ukmwdc.png)',
    backgroundSize: 'cover',
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  header: {
    padding: '5',

  },
  overlay: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.8)',
    color: 'white',
    alignItems: 'left',

 
  
  },
  content: {
    backgroundImage: 'url(https://res.cloudinary.com/squirfox-com/image/upload/dpr_4.0,f_auto,fl_fast_scale.force_dpi,q_auto/v1647891636/yearone-1vyT0nfGK3k-unsplash_uz5gd5.jpg)',
    backgroundSize: 'cover',
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },

  overlayContent: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    color: 'black',
    alignItems: 'left',

 
  
  },
  
}));


export default function Home() {
  const styles = useStyles();
  return (
    <Layout>
      <BackgroundImage className={styles.banner} fluid='https://res.cloudinary.com/squirfox-com/image/upload/f_auto,q_100/v1647891339/banneroff21_ukmwdc.png'>
        <div className={styles.overlay}>
          <Container maxWidth='lg'>
              <Typography className={styles.header} component= 'h1' variant='h2' sx={{root: {xs: 'h4'}}}>
                  More than just a haircut
              </Typography>
              <Typography className={styles.header}  component= 'h2' variant='h5' >
                Welcome to the best part of your day!
              </Typography>
              <Typography className={styles.header} component= 'h2' variant='h5'  >
               Welcome to Office21!
              </Typography>
              <Box my={4}>
                <Button href='https://wa.me/767921555' size='large' variant='contained' color='success' endIcon={<WhatsAppIcon sx={{fontSize: 60}} />}>Programeaza-te!</Button>
              </Box>

          </Container>
        </div>
      </BackgroundImage>
      <Divider sx={{backgroundColor: 'black'}}/>
      
      <BackgroundImage className={styles.content} fluid='https://res.cloudinary.com/squirfox-com/image/upload/dpr_4.0,f_auto,fl_fast_scale.force_dpi,q_auto/v1647891636/yearone-1vyT0nfGK3k-unsplash_uz5gd5.jpg'>
        <div className={styles.overlayContent}>
            <Container  maxWidth='lg' >
                  <Grid container spacing={4} direction='column' justifyContent='space-around' alignItems='left'>
                      <Grid item xs={12}>
                          <Avatar 
                              sx={{
                                zIndex: 1,
                                mr:'auto',
                                bgcolor: 'transparent',
                                borderRadius: 0,
                                height: '100px',
                                width: '100px',
                                marginBottom: '8px'
                            }}>   
                            <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/scissor-and-comb.png' alt='Scissor icons created by Freepik' />
                          </Avatar>
                          <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Tuns</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                          </Box>
                      </Grid>
                    <Grid item xs={4}>
                        <Avatar 
                        sx={{
                          zIndex: 1,
                          mr:'auto',
                          bgcolor: 'transparent',
                          borderRadius: 0,
                          height: '100px',
                          width: '100px',
                          marginBottom: '8px'
                      }}>
                          <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/barber.png' alt='Barber icons created by Freepik - Flaticon' />
                        </Avatar>
                        <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Spalat</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar 
                        sx={{
                          zIndex: 1,
                          mr:'auto',
                          bgcolor: 'transparent',
                          borderRadius: 0,
                          height: '100px',
                          width: '100px',
                          marginBottom: '8px'
                      }}>
                          <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/beard.png' alt='Beard icons created by Triangle Squad - Flaticon' />
                        </Avatar>
                        <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Aranjat Barba</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar 
                        sx={{
                          zIndex: 1,
                          mr:'auto',
                          bgcolor: 'transparent',
                          borderRadius: 0,
                          height: '100px',
                          width: '100px',
                          marginBottom: '8px'
                      }}>
                          <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/beard-oil.png' alt='Beard oil icons created by Smashicons - Flaticon' />
                        </Avatar>
                        <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Vopsit Barba</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar 
                        sx={{
                          zIndex: 1,
                          mr:'auto',
                          bgcolor: 'transparent',
                          borderRadius: 0,
                          height: '100px',
                          width: '100px',
                          marginBottom: '8px'
                      }}>
                          <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/razor.png' alt='Barbershop icons created by Kiranshastry - Flaticon'/>
                        </Avatar>
                        <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Ras Capilar</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar 
                        sx={{
                          zIndex: 1,
                          mr:'auto',
                          bgcolor: 'transparent',
                          borderRadius: 0,
                          height: '100px',
                          width: '100px',
                          marginBottom: '8px'
                      }}>
                          <StaticImage src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/short-male-hair-shape.png' alt='Beard icons created by DinosoftLabs' />
                        </Avatar>
                        <Box maxWidth='sm'> 
                            <Typography variant='h5' component='h3' gutterBottom>Stilizat</Typography>
                            <Typography variant='body1' component='h4' gutterBottom> cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvintecuvinte cuvinte cuvinte cuvinte cuvinte cuvinte cuvinte</Typography>
                        </Box>
                    </Grid>
                  </Grid>
            </Container>
          </div>
      </BackgroundImage>

              
    </Layout>

  )
}


