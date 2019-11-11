import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import SvgButton from './SvgButton';

export default class TodoRemoveButton extends Component {
    render() {
        return (
            <SvgButton>
                <Motion
                    style={{
                        opacity: this.props.hover ? spring(1) : spring(0),
                        translate: this.props.hover ? spring(0) : spring(1),
                        leftOffset: this.props.hover ? spring(0) : spring(-100),
                        rightOffset: this.props.hover ? spring(0) : spring(100)
                    }}
                >
                    {({ opacity, translate, leftOffset, rightOffset }) =>
                        <g style={{
                            opacity: `${opacity}`,
                            transform: `translateX(${translate}em)`
                        }}
                        >
                            <path d="M4 4l16 16" strokeDasharray="100% 100%" strokeDashoffset={`${leftOffset}%`} />
                            <path d="M20 4L4 20" strokeDasharray="100% 100%" strokeDashoffset={`${rightOffset}%`} />
                        </g>
                    }
                </Motion>
            </SvgButton>
        )
    }
}