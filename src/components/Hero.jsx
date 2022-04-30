import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Button, Box, Divider, Grid} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image'





const useStyles = makeStyles(() => ({
  

  banner: {
    backgroundColor: '#706B6B',
    height: '60vh',
    backgroundImage: 'url(https://images-squirfox.imgix.net/Untitled%20design.png?fit=clamp&auto=format&auto=compress&auto=enhance)',
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    padding: '5',
    color: 'white',
    textShadow: '5px 5px 10px black',

  },
}));


export default function Home() {
  const styles = useStyles();
  return (
    <Box>
      <BackgroundImage fluid='bannerImage' className={styles.banner}>
            <Container maxWidth='lg' sx={{display:'flex', justifyContent:'center', alignItems: 'left', flexDirection:'column'}} >
                <Typography className={styles.header} component= 'h1' variant='h2'>
                    More than <br></br>just a haircut...
                </Typography>
                <Box my={4}>
                  <Button href='https://wa.me/767921555' size='large' variant='contained' color='success' endIcon={<WhatsAppIcon sx={{fontSize: 60}} />}>Programeaza-te!</Button>
                </Box>
            </Container>
      </BackgroundImage>
      <br></br>
      <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>        
      <br></br>
      <Container maxWidth='lg'>
        <Grid container spacing={4}   justifyContent="center" alignItems="left">
          <Grid item xs={4}>
            <Typography component='h2' variant='h4' color='white'>
              Despre Noi
            </Typography>
          </Grid>  
          <Grid item xs={8}>
            <Typography component='h2' variant='h5' color='white'>
            Office21 Barbershop este o frizerie situata in Sectorul 6, Bucuresti, in zona Crangasi. Noi înțelegem că ai o singură șansă să faci o buna primă impresie, 
            asa ca am alcatuit un grup de cei mai buni hairstylisti, o locație frumoasă, o atmosferă uimitoare si un loc în care pe lângă tunsoarea excelentă, va veti bucura si de o experienta relaxanta, pentru ca nimic nu face o zi mai perfectă decât o tunsoare.
            </Typography>
          </Grid> 
        </Grid>    
      </Container>  
      <br></br>  
      <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>     
      <br></br>
      <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={4}>
              <Typography component='h2' variant='h4' color='white'>
                Servicii
              </Typography>
            </Grid>  
            <Grid item xs={8}>
              <Typography component='h2' variant='h5' color='white'>
              Scopul nostru este să te ajutăm să arăți și să te simți bine. Din 2012 ne-am construit reputația, oferind servicii de cea mai bună calitate. Oferim toate tipurile de servicii de tunsoare, tuns barba si vopsit. Clienții care vin la noi pot fi siguri că vor beneficia de un serviciu profesionist.
              </Typography>
            </Grid> 
        </Grid>    
      </Container>  
      <br></br>
      <Container maxWidth='md'>
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/dwi-rina-xe4Q1AUB1ZA-unsplash.jpg?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Tuns
              </Typography>
              <Typography component='h4' variant='h6' color='white'>Indiferent dacă sunteți în căutarea unei tunsori rapide sau a unei schimbari de look, stiliștii nostri sunt gata să se asigure că părul dvs. arată bine, se simte proaspăt și vă oferă un impuls instantaneu de încredere.</Typography>
            </Grid> 
        </Grid>    
        <br></br>
        <Grid container spacing={4} justifyContent="center" alignItems="left" direction='row-reverse'>
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/GettyImages-92348095-1d41442eb93e4382abdb5e47a2d38a0a.jpg?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Tuns + Spalat
              </Typography>
              <Typography component='h4' variant='h6' color='white'>Bucurați-vă de relaxare în timp ce aveți scalpul spălat și condiționat într-un mod care să te lase să te simți proaspăt si relaxat.</Typography>
            </Grid> 
        </Grid>  
        <br></br>
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/arthur-humeau-Twd3yaqA2NM-unsplash.jpg?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Aranjat Barba
              </Typography>
              <Typography component='h4' variant='h6' color='white'>O barbă bine îngrijită te poate ajuta să te simți încrezător, îți va scoate în evidență trăsăturile naturale și te va face să arăți uimitor.</Typography>
            </Grid> 
        </Grid>    
        <br></br>
        <Grid container spacing={4} justifyContent="center" alignItems="left" direction='row-reverse'>
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/barber-paints-beard-mustache-young-man-beard-dye-ss.jpg?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Vopsit Barba
              </Typography>
              <Typography component='h4' variant='h6' color='white'>Ei bine, este ușor să-ți faci barba să arate diferit. Vopseaua pentru barbă este o modalitate temporară, accesibilă și foarte ușoară de a acoperi zonele imperfecte și de a-ți scoate barba în evidență.</Typography>
            </Grid> 
        </Grid>    
        <br></br>  
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/shave.png?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Ras Capilar
              </Typography>
              <Typography component='h4' variant='h6' color='white'>Rasul capilar reprezinta un look popular pentru bărbați. Este usor de intretinut si accentueaza trasaturile naturale ale fetei.</Typography>
            </Grid> 
        </Grid>    
        <br></br>
        <Grid container spacing={4} justifyContent="center" alignItems="left" direction='row-reverse'>
            <Grid item xs={6}>
              <StaticImage src='https://images-squirfox.imgix.net/allyson-carter-UnxvQBClTCg-unsplash.jpg?fit=clip&auto=format&auto=compress&auto=enhance&duotone=000000,FFFFFF&duotone-alpha=100'/>
            </Grid>  
            <Grid item xs={6}>
              <Typography component='h3' variant='h5' color='white' sx={{fontWeight: '700'}}>
              Stilizare
              </Typography>
              <Typography component='h4' variant='h6' color='white'>Ești unic, de ce să nu ai o frizura unică? Vei arăta bine, te vei simți bine și vei fi fericit!</Typography>
            </Grid> 
        </Grid>    
      </Container>  
    </Box>

  )
}


