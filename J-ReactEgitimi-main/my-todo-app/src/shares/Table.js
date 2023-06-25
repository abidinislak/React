import React from 'react'

export default function Table({heads, children}) {
  return (
    <table className='table table-hover table-bordered'>
        <thead style={{backgroundColor: "#ccc !importa"}}>
            <tr>
                {heads.map((val,index)=> <th key={index}>{val}</th>)}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}
