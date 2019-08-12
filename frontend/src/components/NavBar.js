import React, { useEffect, useState } from 'react'
import '../App.css'
import '../assets/fontawesome-free-5.10.1-web/css/all.css'

export default function NavBar(){
  return(
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal navName"><i class="fas fa-star"></i> <b>BookMarks </b></h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a className="p-2 navNameB" href="#">Nova Categoria</a>
      </nav>
    </div>
  )
}