import React from 'react'
import s from './style.module.css'
import AddTeamForm from '../../components/AddTeamForm'
import AddUserForm from '../../components/AddUserForm'
import { Context } from '../../context'
import { useContext } from 'react'

export default function ConfigurationsPage() {
  const {addTeam, teams} = useContext(Context);
  return (
    <div>
        <AddTeamForm />
        <AddUserForm />
    </div>
  )
}
