import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import SvgButton from './SvgButton';

export default class TodoToggleButton extends Component {
    render() {
        const totalLength = 72
        const circleLength = 50
        const checkedLength = -24

        const defaultSpring = -totalLength
        const circleSpring = spring(circleLength, { stiffness: 60, damping: 11 })
        const checkedSpring = spring(checkedLength, { stiffness: 120, damping: 13.8 })

        return (
            <SvgButton>
                <Motion
                    defaultStyle={{ offset: defaultSpring }}
                    style={{ offset: this.props.active ? circleSpring : checkedSpring }}
                >
                    {({ offset }) =>
                        <path
                            strokeDasharray={`${totalLength} ${totalLength}`}
                            strokeDashoffset={offset}
                            d="M20 6.7L9.3 17.3 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
                        />
                    }
                </Motion>
            </SvgButton>
        )
    }
}