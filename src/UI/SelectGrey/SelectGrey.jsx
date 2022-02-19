import React from 'react'
import classes from './SelectGrey.module.css'

const SelectGrey = ({ defaultOption, options, value, onChange }) => {
  return (
    <select
      className={classes.selectWrapper}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultOption}</option>

      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectGrey
