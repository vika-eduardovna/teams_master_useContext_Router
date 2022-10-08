import React from 'react'
import s from './style.module.css'
import User from '../../components/User'
import { Context } from '../../context'
import { useContext } from 'react'

export default function TeamsPage() {
  const {users} = useContext(Context);

  const result_arr = [];

  users.forEach(user => {
    const team = result_arr.find(el => el.team === user.team);
    if(team !== undefined) {
      team.users.push(user)
    } else {
      result_arr.push({
        team: user.team,
        users: [user]
      })
    }
  });

  console.log(result_arr);
  return (
    <div className={s.container}>
      {
        result_arr.length === 0
       ? <p className={s.no_teams}>No teams yet</p>
       : result_arr.map(elem => <User key={elem.id} {...elem}/>)
      }
    </div>
  )
}
