import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CarInfo from './components/UserCard'
import Form from './components/Form'

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {

  //Para almacenar los datos del Car

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [formIsClose, setFormIsClose] = useState(true)

  //Para obtener los datos de los usuarios

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  //Para enviar datos de un nuevo Car a la BBDD

  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(() => getAllUsers())
      .catch(err => console.log(err))
  }

  //Para eliminar Usuario

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //Para actualizar datos de Usuario

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className="App__container-top">
        <h1 className='App__title'>Users</h1>
        <button onClick={() =>setFormIsClose(false)} className='App__btn'>Create a New User</button>
      </div>
      <div className={`form-container ${formIsClose && 'form__disable'}`}>
        <Form
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>
      <div className='users-container'>
        {
          users?.map(user => (
            <CarInfo 
              key={user.id}
              user={user}
              deleteUser={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormIsClose={setFormIsClose}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
