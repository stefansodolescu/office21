import React, {useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Container, Button, Box, Divider, Grid} from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { StaticImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image'
import { Zoom } from '@mui/material'





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
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true), [])
  return (
    <Zoom in={shouldShow}>
      <Box id='home'>
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
        <Container id='about' maxWidth='lg'>
          <Grid container spacing={4}   justifyContent="center" alignItems="left">
            <Grid item xs={4}>
              <Typography component='h2' variant='h4' color='white'>
                Despre Noi
              </Typography>
            </Grid>  
            <Grid item xs={8}>
              <Typography component='h2' variant='h5' color='white'>
              Office21 Barbershop este o frizerie situata in Sectorul 6, Bucuresti, in zona Crangasi. Noi ??n??elegem c?? ai o singur?? ??ans?? s?? faci o buna prim?? impresie, 
              asa ca am alcatuit un grup de cei mai buni hairstylisti, o loca??ie frumoas??, o atmosfer?? uimitoare si un loc ??n care pe l??ng?? tunsoarea excelent??, va veti bucura si de o experienta relaxanta, pentru ca nimic nu face o zi mai perfect?? dec??t o tunsoare.
              </Typography>
            </Grid> 
          </Grid>    
        </Container>  
        <br></br>  
        <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>     
        <br></br>
        <Container id='services' maxWidth='lg'>
          <Grid container spacing={4} justifyContent="center" alignItems="left">
              <Grid item xs={4}>
                <Typography component='h2' variant='h4' color='white'>
                  Servicii
                </Typography>
              </Grid>  
              <Grid item xs={8}>
                <Typography component='h2' variant='h5' color='white'>
                Scopul nostru este s?? te ajut??m s?? ar????i ??i s?? te sim??i bine. Din 2012 ne-am construit reputa??ia, oferind servicii de cea mai bun?? calitate. Oferim toate tipurile de servicii de tunsoare, tuns barba si vopsit. Clien??ii care vin la noi pot fi siguri c?? vor beneficia de un serviciu profesionist.
                </Typography>
              </Grid> 
          </Grid>    
        </Container>  
        <br></br>
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
                <Typography component='h4' variant='h6' color='white'>Indiferent dac?? sunte??i ??n c??utarea unei tunsori rapide sau a unei schimbari de look, stili??tii nostri sunt gata s?? se asigure c?? p??rul dvs. arat?? bine, se simte proasp??t ??i v?? ofer?? un impuls instantaneu de ??ncredere.</Typography>
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
                <Typography component='h4' variant='h6' color='white'>Bucura??i-v?? de relaxare ??n timp ce ave??i scalpul sp??lat ??i condi??ionat ??ntr-un mod care s?? te lase s?? te sim??i proasp??t si relaxat.</Typography>
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
                <Typography component='h4' variant='h6' color='white'>O barb?? bine ??ngrijit?? te poate ajuta s?? te sim??i ??ncrez??tor, ????i va scoate ??n eviden???? tr??s??turile naturale ??i te va face s?? ar????i uimitor.</Typography>
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
                <Typography component='h4' variant='h6' color='white'>Ei bine, este u??or s??-??i faci barba s?? arate diferit. Vopseaua pentru barb?? este o modalitate temporar??, accesibil?? ??i foarte u??oar?? de a acoperi zonele imperfecte ??i de a-??i scoate barba ??n eviden????.</Typography>
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
                <Typography component='h4' variant='h6' color='white'>Rasul capilar reprezinta un look popular pentru b??rba??i. Este usor de intretinut si accentueaza trasaturile naturale ale fetei.</Typography>
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
                <Typography component='h4' variant='h6' color='white'>E??ti unic, de ce s?? nu ai o frizura unic??? Vei ar??ta bine, te vei sim??i bine ??i vei fi fericit!</Typography>
              </Grid> 
          </Grid>    
        </Container>  
      </Box>
    </Zoom>

  )
}


