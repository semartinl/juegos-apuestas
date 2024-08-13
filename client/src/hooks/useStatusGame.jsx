import React from 'react'
import { StatusGameContext } from '../context/StatusGameProvider'
const useStatusGame =()=> {
    const context = React.useContext(StatusGameContext)
    if (!context) {
        throw new Error('useStatusGame must be used within a StatusGameProvider')
        }
  return context;
}

export default useStatusGame