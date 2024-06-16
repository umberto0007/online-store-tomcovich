import React, {useEffect, useState} from 'react';
import styles from '../../styles/Profile.module.css'
import { updateUser} from '../../features/user/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const Profile = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(({user}) => user)

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    })

    useEffect(() => {
        if (!currentUser) return

        setValues(currentUser)
    }, [currentUser]);

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNotEmpty = Object.values(values).every((val) => val)
        if (!isNotEmpty) return

        dispatch(updateUser(values))
    }

    return (
        <section className={styles.profile}>
            {!currentUser ? <span>You need to log in</span> : (
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

                    <button type='submit' className={styles.submit}>
                       Update
                    </button>
                </form>
            )}
        </section>
    );
};

export default Profile;