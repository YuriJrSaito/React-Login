import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { RequiredAuth } from './contexts/Auth/RequiredAuth';
import Login from './pages/login/index';
import Home from './pages/home/index';
import Register from './pages/login/Register';

const Path = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RequiredAuth><Home /></RequiredAuth>}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/Register" element={<Register />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Path;