import React from 'react'
import s from './style.module.css'
import { Context } from '../../context';
import { useContext } from 'react';

export default function AddTeamForm() {
  const { addTeam } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { title } = e.target;
    addTeam(title.value);
    console.log(title.value);
    title.value = '';
  }

  return (
    <div className={s.team_form_container}>
      <p>Add team</p>
      <form className={s.team_form} onSubmit={submit}>
        <input type="text" placeholder="Team's name" name='title' />
        <button>Add</button>
      </form>
    </div>
  )
}
