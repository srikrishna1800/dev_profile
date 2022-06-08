import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      <a target='_blank' href='https://www.linkedin.com/in/srikrishnakothuru/'><LinkedInIcon /></a>
      <a target='_blank' href='mailto:srikrishnak.dev@gmail.com'><EmailIcon /></a>
      <a target='_blank' href='https://github.com/srikrishnak-dev'><GithubIcon /></a>
      </div>
      <p> &copy; 2022 irs.dev</p>
    </div>
  )
}

export default Footer