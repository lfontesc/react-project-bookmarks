import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Favoritos(props){
  const [favoritos, setFavoritos] = useState([]);
  const [idCategoria, setIdCategoria] = useState(props.idCategoria)

  //listar favoritos
  useEffect(() => {
    async function loadFavoritos(){
      const response = await api.get('/api/favoritos')
      setFavoritos(response.data)
    }
    loadFavoritos()
  },[idCategoria])


  return(
    <div class="col-sm-8">
          <h3 className="color1">Lista de Favoritos</h3>
          <ul class="list-group list-group-flush">
            
          { favoritos.filter(fav => (
            fav.idCategoria === idCategoria
            )).map(fav => (
              <li key={fav._id} class="list-group-item">
                <a href={fav.url}>{fav.title}</a>
              </li>
            ))
          }
          </ul>
          <ol>
         
          </ol>

    </div>
  
  )
}