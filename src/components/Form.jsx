import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/form.css'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''
}

const Form = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {

  const [dateType, setDateType] = useState("text")
  
  const {handleSubmit, register, reset} = useForm()

  useEffect(() => {
    if(updateInfo) {
      reset(updateInfo)
    }
  }, [updateInfo])


  const submit = data => {
    if(updateInfo) {
      updateUserById(updateInfo.id, data)
      setUpdateInfo()
    } else {
      createNewUser(data)
    }
    reset(defaultValues)
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <i onClick={() => setFormIsClose(true)} className='form__exit fa-solid fa-xmark'></i>
      <h2 className='form__title'>{(updateInfo) ? 'Update User Data' : 'Create New User'}</h2>
      <div className='form__div'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' placeholder='Enter your E-mail' type="email" id='email' {...register('email')}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' placeholder='Enter your password' type="password" id='password' {...register('password')}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' placeholder='Enter your first name' type="text" id='first_name' {...register('first_name')}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' placeholder='Enter your last name' type="text" id='last_name' {...register('last_name')}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="birthday">Birthday</label>
        <input className='form__input' type={dateType} onFocus={() => setDateType("date")} placeholder='DD/MM/AAAA' id='birthday' {...register('birthday')}/>
      </div>
      <button onClick={() => setFormIsClose(true)} className='form__btn'>{(updateInfo) ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default Form