import React, { useEffect, useState } from 'react'
import '../App.css';
import api from '../services/api'

//components
import Favoritos from '../components/Favoritos'
import Categorias from '../components/Categorias'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function UnicaCategoria({ match }){
  return(
    <div className="App">
      <header className="App-header">
       <NavBar />
       <div class="container">
          <div class="row espaco">
            <Categorias />
            <Favoritos idCategoria={match.params.id}/>
          </div>
        </div>
      </header>
    </div>
  )
}