import React from 'react'
import Layout from '../components/Layout'
import Photos from '../components/Photos'
import Hero from '../components/Hero'
import Prices from '../components/Prices'
import Contact from '../components/Contact'
import { makeStyles } from '@mui/styles'
import { Divider } from '@mui/material'


const useStyles = makeStyles(() => ({

  skewed: {
    width: '100%',
    height: '50px',
    background: 'white',
    transform: 'skewY(4deg)',
    transformOrigin: 'top right',
    zIndex: '0'
},


}))







export default function Home() {
  const styles = useStyles()
  return (
    <Layout>
      <Hero/>
      <Prices/>
      <br></br>
      <Photos/>
      <br></br>
      <Contact/>
      <br></br>
    </Layout>

  )
}


