import React, {useContext, useState} from 'react';
import './header.css';
import {FaSearch} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {FaDatabase} from 'react-icons/fa';
import { AuthContext } from '../contexts/Auth/AuthContext';

export function Header()
{
    const auth = useContext(AuthContext);
    const [sidebar, setSidebar] = useState<boolean>(false);
    const toggleMenu = () => setSidebar(!sidebar); 

    const handleLogout = async () =>{
        await auth.signout();
        window.location.href = window.location.href;
    }

    return (
        <>
        <div className={sidebar ? 'sidebar' : 'sidebar active'}>
            <div className="sidebar-wrapper">
                <div className="sidebar__logo">
                    <p>Projvid</p>
                </div>

                <button className="btn-mobile" onClick={toggleMenu}>
                    <span className="hamburger"></span>
                </button>

                <div className="sidebar__menu">
                    <a className="sidebar__menu__selecionado" href="#"><i><AiFillHome /></i> Início</a>
                    <a href="#"><i><FaSearch /></i> Buscar</a>
                    <a href="#"><i><FaDatabase /></i> Biblioteca</a>
                </div>

                <div className="sidebar__menu">
                    <p className="sidebar__menu__title">Playlists</p>

                    <div className="sidebar__menu__item">
                        <div className="sidebar__menu__item__componente">
                            +
                        </div>
                        <span>Adicionar novo</span>
                    </div>

                    <div className="sidebar__menu__item">
                        <div className="sidebar__menu__item__componente">
                            ♥
                        </div>
                        <span>Favoritos</span>
                    </div>
                </div>

                <div className="sidebar__playlists">
                    <a href="#">Cadastrado 1</a>
                    <a href="#">Cadastrado 2</a>
                    <a href="#">Cadastrado 3</a>
                    <a href="#">Cadastrado 4</a>
                    <a href="#">Cadastrado 5</a>
                </div>

                <div className="sidebar__playlists">
                    <a href="#">Cadastrado 6</a>
                    <a href="#">Cadastrado 7</a>
                    <a href="#">Cadastrado 8</a>
                    <a href="#">Cadastrado 9</a>
                    <a href="#">Cadastrado 10</a>
                </div>

                <div className="sidebar__playlists">
                    <a href="#">Cadastrado 11</a>
                    <a href="#">Cadastrado 12</a>
                    <a href="#">Cadastrado 13</a>
                    <a href="#">Cadastrado 14</a>
                    <a href="#">Cadastrado 15</a>
                    {auth &&
                        <a onClick={handleLogout}>Sair</a>
                    }
                </div>

            </div>
        </div> 
        </>
    );
}
