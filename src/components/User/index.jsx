import React from 'react'
import s from './style.module.css'
import { Context } from '../../context';
import { useContext } from 'react';

export default function User({name, team, id}) {

  const {removeUser} = useContext(Context);
  return (
    <div className={s.container} onDoubleClick={() => removeUser(id)}>
        <p>{name}</p>
        <p className={s.team_style}>{team}</p>
    </div>
  )
}
