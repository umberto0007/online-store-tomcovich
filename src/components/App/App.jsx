import React, {useEffect} from 'react';
import AppRoutes from '../../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import {useDispatch} from 'react-redux';
import {fetchCategories} from '../../features/categories/categoriesSlice';
import {fetchProducts} from '../../features/products/productsSlice';
import UserForm from '../User/userForm';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div className='app'>
            <Header/>
            <UserForm/>
            <div className='container'>
                <Sidebar amount={5}/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;


