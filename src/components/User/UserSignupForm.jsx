import React, {useState} from 'react';
import styles from '../../styles/User.module.css'
import {useDispatch} from 'react-redux';
import {createUser} from '../../features/user/userSlice';

const UserSignupForm = ({closeForm, toggleCurrentFormType}) => {
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNotEmpty = Object.values(values).every((val) => val)
        if (!isNotEmpty) return

        dispatch(createUser(values))
        closeForm()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}/>
                </svg>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input
                        placeholder='Your email'
                        type='email'
                        name='email'
                        value={values.email}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        placeholder='Your name'
                        type='name'
                        name='name'
                        value={values.name}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        placeholder='Your password'
                        type='password'
                        name='password'
                        value={values.password}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.group}>
                    <input
                        placeholder='Your avatar'
                        type='avatar'
                        name='avatar'
                        value={values.avatar}
                        autoComplete='off'
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.link} onClick={() => toggleCurrentFormType('login')}>
                    I already have an account
                </div>

                <button type='submit' className={styles.submit}>
                    Create an account
                </button>
            </form>
        </div>
    );
};

export default UserSignupForm;