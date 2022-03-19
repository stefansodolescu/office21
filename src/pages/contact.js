import { Grid, Typography, Container, Paper, Box } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import { makeStyles } from '@mui/styles'


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
      <Container maxWidth='xl' sx={{backgroundColor: 'white', padding:'20px'}}>
        <Grid container spacing={1} direction={{xs: 'column', md:'row' }} alignItems='left' justifyContent='space-around'>
          <Grid item xs={12} sx={{textAlign: 'center'}}>
            <Paper className={styles.paper} elevation={24} variant='outlined' sx={{backgroundColor: 'black', color:'white'}}>
              <Typography variant='h4'>Contact us</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Typography>Contact us</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Contact us</Typography>
          </Grid>
          <Grid item xs={12}>
          <Box
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
