import React from 'react';
import styled, { keyframes } from 'styled-components'

// CREATE REUSABLE LOADING SPINNER
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
// Creating a styled component
// literally saying "create a styled <img> and give it the animation style property and store it as a Component name"
const Image = styled.img`
  animation: ${spin} 4s infinite linear;
`

const Spinner = () => <Image src="https://image.flaticon.com/icons/png/512/189/189768.png" alt="loading indicator" />

export default Spinner;
