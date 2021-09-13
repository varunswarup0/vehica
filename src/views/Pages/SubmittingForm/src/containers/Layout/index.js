// Core imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Submit from '../Submit'
// Default export of main functional component
export default function Index() {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Submit />
                </Route>
            </Switch>
        </div>
    )
}
