import React from 'react'
import s from './style.module.css'
import User from '../../components/User'
import { Context } from '../../context'
import { useContext } from 'react'

export default function TeamsPage() {
  const {users} = useContext(Context);

  console.log(users);
  return (
    <div className={s.container}>
      {
        users.length === 0
       ? <p className={s.no_teams}>No teams yet</p>
       : users.map(el => <User key={el.id} {...el}/>)
      }
    </div>
  )
}
