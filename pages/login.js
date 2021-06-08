
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userLoginAsync } from './../redux/actions/authAsyncActions';
import { verifyTokenAsync } from './../redux/actions/authAsyncActions';

import styles from '../styles/Home.module.css'
import { Form, Button } from 'react-bootstrap'

import Router from "next/router";


export default function Login() {

  const [loading, setLoading] = useState(true);

  const authObj = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const { authLoading, userLoginLoading, loginError, isAuthenticated } = authObj;

  useEffect(() => {

    async function handleRoute() {
      setLoading(true)
      await dispatch(verifyTokenAsync())
      console.log(isAuthenticated);

      if (isAuthenticated) {
        Router.push('dashboard')
        return
      }
      setLoading(false)
    }
    handleRoute()
  }, []);



  const username = useFormInput('');
  const password = useFormInput('');

  // handle button click of login form
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLoginAsync(username.value, password.value));
    Router.push('dashboard')
  }

  if (isAuthenticated) {
    return <>you are before login</>;
  }

  return (
    <>
      {loading
        ?
        <>
          <div className="w-100 vh-100 d-flex justify-content-center align-items-center"><div className="lds-facebook"><div></div><div></div><div></div></div></div>
        </>
        :
        <div className={styles.container}>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" {...username} autoComplete="new-password" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" {...password} autoComplete="new-password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={userLoginLoading}>
              {userLoginLoading ? 'Loading...' : 'Login'}
            </Button>
            {loginError && <div style={{ color: 'red', marginTop: 10 }}>{loginError}</div>}
          </Form>
        </div>
      }
    </>
  )
}


// custom hook to manage the form input
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
