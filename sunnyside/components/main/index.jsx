import React from 'react'
import Cards from './cards'
import Team from './team'
import Style from './main.module.css'
import Photos from './photos'

function Main({francues}) {
  return (
    <>
    <Cards francues={francues}/>
    <Team francues={francues}/>
    <Photos/>
    </>
  )
}

export default Main