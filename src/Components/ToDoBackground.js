import React, { Component } from 'react'
import View from './View'

export default class TodoBackground extends Component {
    render() {

        const style = {
            minHeight: '100vh',
            padding: '1.5em',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'light-blue',
            background: 'black'
        }

        return (
            <View column style={style}>
                {this.props.children}
            </View>
        )
    }
}