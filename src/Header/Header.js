import React, { Component } from 'react'
import HeaderError from './HeaderError'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import './Header.css'

export default class Header extends Component {
    render() {
        return(
            <HeaderError>
                <section className='header-container'>
                    {
                        this.props.routes.map((route, i) => {
                            return(
                                <Route
                                    key={i}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.header}
                                />
                            )
                        })
                    }
                </section>
            </HeaderError>
        )
    }
};

Header.propTypes = {
    routes: PropTypes.array,
};

Header.defaultProps = {
    routes: [],
};