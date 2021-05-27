import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {
    Navbar,
    Home,
    About,
    NotFound,
    SingleItem,
    Categories,
    Footer,
} from './GetComponents'

function App() {
    return (
        <div className='app'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/categories'>
                        <Categories />
                    </Route>
                    <Route path='/item/:id' children={<SingleItem />}></Route>
                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
