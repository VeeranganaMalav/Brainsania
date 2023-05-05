import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../Pages/Registration'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Programming from '../Pages/Programming'
import ITTraining from '../Pages/ITTraining'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path='/programming' element={<Programming />}/>
                <Route path='/ittraining' element={<ITTraining />}/>
            </Routes>
        </div>
    )
}

export default AllRoutes