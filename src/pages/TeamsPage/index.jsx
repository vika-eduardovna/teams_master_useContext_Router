import React from 'react'
import s from './style.module.css'
import User from '../../components/User'
import { Context } from '../../context'
import { useContext } from 'react'

export default function TeamsPage() {
  const {users} = useContext(Context);

  console.log(users);
  return (
    <div>
      {
        users.length === 0
       ? 'No users'
       : users.map(el => <User key={el.id} {...el}/>)
      }
    </div>
  )
}
