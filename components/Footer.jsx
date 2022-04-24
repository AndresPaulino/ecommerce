import React from 'react'
import { AiFillGithub, AiFillMessage, AiFillLinkedin } from 'react-icons/ai'


function Footer() {
  return (
    <div className='footer-container'>
      <p>2022 HyperFize Technologies - All right reserved</p>
      <p className='icons'>
        <a href='https://github.com/AndresPaulino'>
          <AiFillGithub />
        </a>
        <a href='mailto:paulinoandresmiguel@gmail.com'>
          <AiFillMessage />
        </a>
        <a href='https://www.linkedin.com/in/andrespaulino/'><AiFillLinkedin /></a>
      </p>
    </div>
  );
}

export default Footer