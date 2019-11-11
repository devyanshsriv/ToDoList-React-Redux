import React, { Component } from 'react'
import View from './View'

export default class TodoContainer extends Component {
    render() {

        let style = {
            position: 'relative',
            width: `420px`,
            borderRadius: '5px',
            boxShadow: `0em 1em 8em -1em hsla(0, 0%, 0%, 0.5)`
        }

        return (
            <View column auto style={style}>
                {this.props.children}
            </View>
        )
    }
}