import React from 'react'
import './styles/userCard.css'

const UserCard = ({user, deleteUser, setUpdateInfo, setFormIsClose}) => {

  const setInfoUpdate = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__list'>
        <li className='user__item'>
          <span className='user__span'>Email:</span> {user.email}
        </li>
        <li className='user__item'>
          <span className='user__span'>Birthday:</span>
          <div className='user__item-container'>
            <i className='user__gift fa-solid fa-gift'></i> {user.birthday}
          </div>
        </li>
      </ul>
      <footer className='user__footer'>
        <button className='user__btn' onClick={() => deleteUser(user.id)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
        <button className='user__btn' onClick={setInfoUpdate}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
      </footer>
    </article>
  )
}

export default UserCard