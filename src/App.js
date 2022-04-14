import { useState } from 'react';
import Home from './components/Home/Home';
import './App.css';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import GroceryList from './components/GroceryList/GroceryList';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';

function App() {
    const [isActive, setIsActive] = useState(true);
    const [classState, setClassState] = useState('inactive');

    function handleClick() {
        setIsActive(!isActive);

        if (isActive) {
            setClassState('active');
        } else {
            setClassState('inactive');
        }

        return classState;
    }

    return (
        <>
            <header id='page-top'>
                <div id='title-nav-container'>
                    <div id='title-nav'>
                        <Link to='/'>
                            <h1 id='page-title'>Eat 'n Shop</h1>
                            {/* <img  className="App-Logo" src="https://i.imgur.com/GZDFcLgt.png" /> */}
                        </Link>
                    </div>
                </div>
            </header>
            <Nav classState={classState} />
            <div>
                <Routes>
                    <Route path='/list' element={<GroceryList />} />
                    <Route path='/eaten' element={<GroceryList.eaten />} />
                    <Route path='/add-grocery' element={<Form />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
