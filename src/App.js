import 'animate.css';
// import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AllGroceryList from './components/AllGroceryList/AllGroceryList';
import EatenList from './components/EatenList/EatenList';
import ShoppingList from './components/ShoppingList/ShoppingList';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
// import Nav from './components/Nav/Nav';

function App() {
    // const [isActive, setIsActive] = useState(true);
    // const [classState, setClassState] = useState('inactive');

    // function handleClick() {
    //     setIsActive(!isActive);
    //     if (isActive) {
    //         setClassState('active');
    //     } else {
    //         setClassState('inactive');
    //     }
    //     return classState;
    // }

    return (
        <>
            <header id='page-top'>
            {/* <img src="" className="App-logo" alt="logo" /> */}
                <div id='title-nav-container'>
                    <div id='title-nav'>
                        <Link to='/'>
                            <div id="titlealone">
                                <h4 className="animate__animated animate__rotateInUpRight">Eat 'n Shop</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            {/* <Nav classState={classState} /> */}
            <div>
                <Routes>
                    <Route path='/list' element={<AllGroceryList />} />
                    <Route path='/eaten' element={<EatenList />} />
                    <Route path='/shop' element={<ShoppingList />} />
                    <Route path='/add-grocery' element={<Form />} />
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
