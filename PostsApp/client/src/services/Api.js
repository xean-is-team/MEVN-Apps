import axios from 'axios'

// Instanciando la coneccion con el servidor
export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
