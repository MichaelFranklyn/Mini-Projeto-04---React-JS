import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Descricao from './pages/Descricao';

function ProtectedRoutes({ redirectTo }) {
    const autenticacao = true

    return autenticacao ? <Outlet /> : <Navigate to={redirectTo} />
}


export default function MainRoutes() {
    return (
        <Routes>

            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main' element={<Main />} />
                <Route path='/detalhe/:id' element={<Descricao />} />
            </Route>

        </Routes>
    )
}

