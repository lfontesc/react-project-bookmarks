import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Categorias(){
  const [categorias, setCategorias] = useState([]);

  //listar categorias
  useEffect(() => {
    async function loadCategorias(){
      const response = await api.get('/api/categorias')
      setCategorias(response.data)
    }
    loadCategorias()
  })

  return(

        <div class="col-sm-3">
            <h3 className="color1">Categorias</h3>
        <ul class="list-group teste2">
      {categorias.map(cat => (
          <li key={cat._id} class="list-group-item teste2">
            <a href={`/${cat._id}`}>
            <img src={cat.icon} alt={"teste"} />
            <strong> {cat.name}</strong>
            </a>
          </li>
        ))}
      
      </ul>
        </div>
  )
}