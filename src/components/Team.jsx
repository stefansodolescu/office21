 import { Container, Grid, Divider, Box} from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

 
 export default function Team() {
   return (
    <Box id='team'>
        <br></br>
        <Divider sx={{backgroundColor: 'red', height:'5px', width: '15%'}}/>        
        <br></br>
        <Container maxWidth='lg'>
        <Grid container spacing={4} justifyContent="center" alignItems="left">
            <Grid item xs={4}>
            <Typography component='h2' variant='h4' color='white'>
                Echipa
            </Typography>
            </Grid>  
            <Grid item xs={8}>
            </Grid>  
            <Grid item xs={12}>
            <Container maxWidth='lg' sx={{ padding:'20px'}}>
            <Grid container spacing={4} alignItems='center' direction={{xs:'column', md:'row'}}>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345, textAlign:'center', backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="450"
                            image="https://st3.depositphotos.com/12865422/15410/v/380/depositphotos_154109006-stock-illustration-bearded-hipster-businessman-pointing-finger.jpg?forcejpeg=true"
                            alt="Gabriel"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{color: 'white'}}>
                                Gabriel
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent:'center'}}>
                            <CardActions>
                                <Button href='https://wa.me/767921555' variant="contained" size="large" color="error"
                                 sx={{color:'black', fontSize:'16px'}}>
                                Programeaza-te!
                                </Button>
                            </CardActions>
                        </Box>
                        </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345, textAlign:'center', backgroundColor: 'black' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="450"
                            image="https://i.graphicmama.com/uploads/2019/3/5c813a4f55949-simple-style-cartoon-of-a-man-with-mustache.png"
                            alt="Gabriel"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{color: 'white'}}>
                                Razvan
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent:'center'}}>
                            <CardActions>
                                <Button href='https://wa.me/767921555' variant="contained" size="large" color="error"
                                 sx={{color:'black', fontSize:'16px'}}>
                                Programeaza-te!
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345, textAlign:'center', backgroundColor: 'black'}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="450"
                            image= "https://thumbs.dreamstime.com/b/beard-man-sketch-cartoon-illustration-spectacle-89874320.jpg"
                            alt="Gabriel"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{color: 'white'}}>
                                Adi
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', alignContent:'center'}}>
                                <CardActions>
                                    <Button href='https://wa.me/767921555' variant="contained" size="large" color="error" 
                                    sx={{color:'black', fontSize:'16px'}}>
                                    Programeaza-te!
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                </Grid>
            </Grid>
        </Container>
            </Grid> 
        </Grid>    
        </Container>  
    </Box>
   


   )
 }
 