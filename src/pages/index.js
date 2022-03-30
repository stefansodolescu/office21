import React from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Button, Box, Divider} from '@mui/material'
import BackgroundImage from 'gatsby-background-image'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';






const useStyles = makeStyles(() => ({
  

  banner: {
    backgroundImage: 'url(https://images-squirfox.imgix.net/yearone-1vyT0nfGK3k-unsplash.jpg?auto=format&auto=compress&fit=clip)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '80vh',
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
    backgroundColor: 'rgba(0,0,0,.6)',
    color: 'white',
    alignItems: 'left',
    justifyContent: 'center',
    paddingTop: '60px',
    paddingBottom: '80px'

 
  
  },
  
}));


export default function Home() {
  const styles = useStyles();
  return (
    <Layout>
      <BackgroundImage className={styles.banner} fluid='banner image'>
        <div className={styles.overlay}>
          <Container maxWidth='lg' sx={{display:'flex', justifyContent:'center', flexDirection:'column'}} >
              <Typography className={styles.header} component= 'h1' variant='h2'>
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
    </Layout>

  )
}


