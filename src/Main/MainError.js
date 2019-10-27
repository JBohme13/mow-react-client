import React, { Component } from 'react'

export default class MainError extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false,
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true};
    }

    render(){
        if (this.state.hasError) {
            return(
                <h2>Somethingwent wrong, please try again</h2>
            );
        }
        return this.props.children;
    }
}