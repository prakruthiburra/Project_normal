import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import Todolists from './Pages/Todolists'
import Todos from './Pages/Todos'

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/Todolists' component={Todolists}/>
            <Route path='/Todos' component={Todos}/>
        </Switch>
    </main>
)

export default Router