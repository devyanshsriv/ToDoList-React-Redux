import React, { Component } from 'react'
import { globalStyles } from './GlobalStyles'
import View from './View'
import { Link } from 'react-router-dom'

export default class TodoBackground extends Component {
    render() {
        // const { colors } = globalStyles

        const style = {
            minHeight: '100vh',
            padding: '1.5em',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: colors.primary.dark,
            backgroundColor: 'light-blue',
            //     background: `linear-gradient(
            //     ${colors.primary.base},
            //     ${colors.primary.dark}
            //   )`
            background: 'yellow'
        }

        return (
            <View column style={style}>
                <div className="d-flex justify-content-start mb-3">
                    <Link to="/"><button className="btn btn-primary">Back</button></Link>
                </div>
                {this.props.children}
            </View>
        )
    }
}