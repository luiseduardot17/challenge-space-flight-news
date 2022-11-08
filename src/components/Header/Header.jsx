import React from 'react'
import Input from '../Input/Input'
import Select from '../Select/Select'
import S from './Header.module.css'

const Header = () => {
  return (
    <div className={S.header}>
      <Input type="search" name={"busca"} placeholder="Search"/>
      <Select />
      <div className={S.titulo}>
        <p>🚀</p>
        <h1>Space Flight News</h1>
      </div>
    </div>
  )
}

export default Header
