import React from 'react'
import InputGrey from '../../UI/InputGrey/InputGrey'
import classes from './Filter.module.css'
const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  )
}

export default Filter
