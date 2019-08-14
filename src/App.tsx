import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Users from './containers/users.container'
import UserHobbies from './containers/user-hobbies.container'
import * as styles from './app.scss'
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Header } from './components/header';

export const App = () => (
  <Provider store={store}>
     <Header/>
    <div className={styles.container}>
      <SplitterLayout vertical={false} customClassName={styles.splitterLayout}>
        <Users/>
        <UserHobbies/>
      </SplitterLayout>
    </div>
  </Provider>
)

