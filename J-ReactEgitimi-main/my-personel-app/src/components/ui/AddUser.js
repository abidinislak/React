import React, {useState} from 'react'


export default function AddUser() {
  const [profession,setProfession] = useState("0")
  return (
    <div className='container'>
      <div className='form-group'>
        Ad
        <input className='form-control'/>
      </div>
      <div className='form-group mt-2'>
        Soyad
        <input className='form-control'/>
      </div>
      <div className='form-group mt-2'>
        Soyad
        <select className='form-control' value={profession}>
          <option value="0">Seçim yapınız...</option>
          <option>Muhasebe</option>
          <option>Yazılım</option>
        </select>
      </div>
    </div>
  )
}
