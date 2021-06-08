import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { verifyTokenAsync, userLogoutAsync } from "./../redux/actions/authAsyncActions";
import { userLogout, verifyTokenEnd } from "./../redux/actions/authActions";

import { setAuthToken } from './../services/auth';
import { getUserListService } from './../services/user';

import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router'
import Router from "next/router";


export default function Dashboard() {

  const authObj = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { user, userLoginLoading, loginError, isAuthenticated } = authObj;

  const router = useRouter()

  useEffect(() => {
    async function fetchMyAPI() {
      await dispatch(verifyTokenAsync())
      if (!isAuthenticated) {
        Router.push('login')
      }
    }

    fetchMyAPI()
  }, []);
  console.log('dashboard');
  return (
    <div>
      <div className={styles.container}>
        dashboard
      </div>
    </div>
  )
}
