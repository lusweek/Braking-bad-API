import React, { useState } from 'react'

function Search({ getQuery }) {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

  return ( 
    <section className='search'>
        <form>
            <input 
            type="text" 
            className='form-control'
            placeholder='Search stuff'
            onChange={(e) => onChange(e.target.value)}
            />
        </form>
    </section>
  )
}

export default Search