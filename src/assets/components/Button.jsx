import React from 'react'
import { Button } from '@mui/material'

export const ButtonComponent = (props) => {
  
  return (
    <Button variant={props?.type} >
        {props?.text}
    </Button>
  )
}
