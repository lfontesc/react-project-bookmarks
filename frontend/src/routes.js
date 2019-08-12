import { BrowserRouter, Route} from 'react-router-dom'
import React from 'react'
import Home from './components/Home'
import Favoritos from '../src/components/Favoritos'
import UnicaCategoria from '../src/components/UnicaCategoria'

export default function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={UnicaCategoria} />
    </BrowserRouter>
  )
}