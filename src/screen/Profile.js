import React from 'react';
import '../styles/Profile.css';
import NavBar from '../component/NavBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../feature/user/userSlice';
import { auth } from "../firebase";

function Profile() {
    const user = useSelector(selectUser);
    const signOut = () => {
        auth.signOut();
        window.location.reload(true);
    }
    return (
        <div className='profileScreen'>
            <NavBar />
            <div className='profileScreen__content'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avatar del Perfil' />

                    <div className='profileScreen__details'>
                        <h2>Email:{user.email}</h2>
                        <h3>Plans</h3>
                        <hr/>
                        <div className='profileScreen__plans'>                           
                            <div className='profileScreen__plans-txt'>
                            <h4>Premium</h4>
                            <h5>HD + HDR</h5>                         
                            <h4>Basic</h4>
                            <h5>720p</h5>                        
                            <h4>Standar</h4>
                            <h5>1080p</h5>                           
                            </div>
                            <div className='profileScreen__btn'> 
                            <button className='profileScreen__btn-btn' type="button">Suscribe</button><br/>
                            <button className='profileScreen__btn-btn' type="button">Suscribe</button><br/>
                            <button className='profileScreen__btn-btn' type="button">Suscribe</button>
                            </div>
                        </div>
                        <button onClick={signOut} type="buttom" className='profileScreen__signOut'>Sing Out</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile