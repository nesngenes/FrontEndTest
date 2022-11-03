import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDatas } from '../../actions/data'

import './redirect.css'

const RedirectPage = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getDatas());
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])
    
    
    const datas = useSelector((state) => state.datas);

    const finalDatas = datas?.data;

    console.log(finalDatas)
    
    return (
      <div className='container'>
          <div className='profile'>
            <h3>Profile Info and User Token:</h3>
            <p>User email: {user?.result.email}</p>
            <p className='profile-token'>User token: {user?.token}</p>
            <p>User _id: {user?.result._id}</p>
          </div>
        <div>
          <h3>API RESULT :</h3>
          <div className='datas container'>
            {finalDatas?.map((data) => (
              <div className='data' style={{ backgroundColor: `${data.color}`, color: 'white' }}>
                <p>{data.name}</p>
                <p>{data.color}</p>
                <p>{data.pantone_value}</p>
                <p>{data.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default RedirectPage