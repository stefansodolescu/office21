import { Grid, Typography, Container, Paper, Box, ButtonGroup, IconButton, Link } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@mui/styles'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { StaticImage } from 'gatsby-plugin-image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';



const useStyles = makeStyles(() => ({

    googlemap: {
      width: "100%",
      height: "40vh",
      allowfullscreen: "",
      loading: "lazy",
      padding: '0',
      border: '15px solid black',
      margin: '10px'
      
    },
}));

export default function Contact() {
  const styles = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg' sx={{backgroundColor: 'white', padding:'20px'}}>
        <Grid container spacing={4} direction={{xs:'column', md:'row'}} alignItems='left' justifyContent='space-around'>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Paper className={styles.paper} elevation={24} variant='outlined' sx={{backgroundColor: 'black', color:'white'}}>
              <Typography component='h1' variant='h4'>Contact</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Box>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>
              <IconButton href='https://wa.me/767921555' target='_blank'  size='large'>
                    <WhatsAppIcon color='success' sx={{fontSize:40}}/>
                </IconButton>
                Telefon:<Typography variant='h6' component='p'><Link underline='hover' href='tel:0767921555' target='_blank' sx={{color: 'black'}}>0767921555</Link></Typography>
              </Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>  
                <IconButton href= 'https://ul.waze.com/ul?place=ChIJGaHc6LgBskARx7xzfiEQo5E&ll=44.45101810%2C26.05478720&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank' size='large'>
                    <StaticImage style={{height:'40px', width: '40px'}}src='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/icons/waze(2).png' alt='waze icon'/>
                </IconButton>
                Adresa:<Typography variant='h6' component='p'><Link underline='hover' href='https://ul.waze.com/ul?place=ChIJGaHc6LgBskARx7xzfiEQo5E&ll=44.45101810%2C26.05478720&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location' target='_blank' sx={{color: 'black'}}>Strada Inginer Cristian Pascal 34, București</Link></Typography>
              </Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>
              <IconButton href='mailto:contact@office21.ro' target='_blank' size='large'>
                    <EmailIcon sx={{fontSize: 40, color: 'black'}}/>
                </IconButton>
                E-mail:<Typography variant='h6' component='p'><Link underline='hover' href='mailto:contact@office21.ro' target='_blank' sx={{color: 'black'}}>contact@office21.ro</Link></Typography>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>Program:</Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>Luni-Vineri:<Typography variant='h6' component='p'>10:00-22:00</Typography></Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>Sambata:<Typography variant='h6' component='p'>10:00-18:00</Typography></Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>Duminica:<Typography variant='h6' component='p'>Inchis</Typography></Typography>
              <Typography component='h6' variant='h5' sx={{fontWeight:700}}>Urmareste-ne pe:</Typography>
              <ButtonGroup>
                <IconButton href='https://www.facebook.com/office21barbershop/' target='_blank' size='large'>
                  <FacebookIcon color='primary' sx={{fontSize: 40}}/>
                </IconButton>
                <IconButton href='https://www.instagram.com/office21barber/' size='large' target='_blank'>
                  <InstagramIcon color='secondary' sx={{fontSize: 40}}/>
                </IconButton>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid item xs={12}>
          <Box
              maxWidth='lg'
              display="flex"
              justifyContent="center"
              alignItems="center">
              <iframe className={styles.googlemap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.129385457258!2d26.052598615575068!3d44.45101807910205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201b8e8dca119%3A0x91a310217e73bcc7!2sOffice%2021%20BarberShop!5e0!3m2!1sen!2sro!4v1647696224567!5m2!1sen!2sro" ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
   
  )
}
