import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { verifyTokenAsync } from './../redux/actions/authAsyncActions';


export default function Home() {

  const authObj = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { authLoading, isAuthenticated } = authObj;

  // verify token on app load
  useEffect(() => {
    dispatch(verifyTokenAsync());
  }, []);

  if (authLoading) {
    return <div className="content">Checking Authentication...</div>
  }
  return (
    <div className={styles.container}>
      {(isAuthenticated) ? 'you are login' : 'you are not login'}
    </div>
  )
}
