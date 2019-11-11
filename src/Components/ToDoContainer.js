import React, { Component } from 'react'
import { globalStyles } from './GlobalStyles'
import View from './View'

export default class TodoContainer extends Component {
    render() {
        const { borderRadius } = globalStyles

        let style = {
            position: 'relative',
            width: `420px`,
            borderRadius: borderRadius,
            boxShadow: `0em 1em 8em -1em hsla(0, 0%, 0%, 0.5)`
        }

        return (
            <View column auto style={style}>
                {this.props.children}
            </View>
        )
    }
}