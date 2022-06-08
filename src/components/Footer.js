import React from 'react'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a target='_blank' href='https://www.linkedin.com/in/srikrishnakothuru/' rel="noreferrer"><LinkedInIcon /></a>
        <a target='_blank' href='mailto:srikrishnak.dev@gmail.com' rel="noreferrer"><EmailIcon /></a>
        <a target='_blank' href='https://github.com/srikrishnak-dev' rel="noreferrer"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 irs.dev</p>
    </div>
  )
}

export default Footer