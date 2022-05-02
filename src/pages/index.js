import React from 'react'
import Layout from '../components/Layout'
import Photos from '../components/Photos'
import Hero from '../components/Hero'
import Prices from '../components/Prices'
import Contact from '../components/Contact'
import Team from '../components/Team'
import { Helmet } from 'react-helmet'




export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Office21Barber</title>
        <meta name="google-site-verification" content="vDfn0WlKhhR21kr9U0l9F8j3LpElce43e2txl83k8xA" />
        <meta name="google-site-verification" content="4-EJC3jUsjgxz8tzvU_mjMoAAzvYXojrqpWvDONUqeo" />
        <meta name="description" 
        content='Office21 Barbershop este o frizerie situata in Sectorul 6, Bucuresti, in zona Crangasi. Noi înțelegem că ai o singură șansă să faci o buna primă impresie, 
              asa ca am alcatuit un grup de cei mai buni hairstylisti, o locație frumoasă, o atmosferă uimitoare si un loc în care pe lângă tunsoarea excelentă, va veti bucura si de o experienta relaxanta, pentru ca nimic nu face o zi mai perfectă decât o tunsoare.'/>
        <meta name='keywords' content='tunsoare, frizerie, sector 6, regie, crangasi, barba, vopsit, tuns, aranjat, barbershop, bucuresti'/>
        <meta property='og:title' content='Office21Barber'/>
        <meta property='og:type' content='website'/>
        <meta property='og:description' 
        content='Office21 Barbershop este o frizerie situata in Sectorul 6, Bucuresti, in zona Crangasi. Noi înțelegem că ai o singură șansă să faci o buna primă impresie, 
              asa ca am alcatuit un grup de cei mai buni hairstylisti, o locație frumoasă, o atmosferă uimitoare si un loc în care pe lângă tunsoarea excelentă, va veti bucura si de o experienta relaxanta, pentru ca nimic nu face o zi mai perfectă decât o tunsoare.'/>
        <meta property='og:image' content='https://stefan-test-2021.s3.eu-west-1.amazonaws.com/office21/logooffice.png'/>
        <meta property='og:locale' content='ro_RO'/>
        <meta property='og:url' content='https://www.office21barber.ro'/>
        <link rel='canonical' href='https://www.office21barber.ro'/>
      </Helmet>
      <Hero/>
      <Photos/>
      <br></br>
      <Team/>
      <br></br>
      <Prices/>
      <Contact/>
      <br></br>
    </Layout>

  )
}


