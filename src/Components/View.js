import React, { Component } from 'react'
import { mixProps } from './Styles'
import { PropTypes } from 'prop-types'

export default class View extends Component {
    static propTypes = {
        row: PropTypes.bool,
        column: PropTypes.bool,
        auto: PropTypes.bool,
        className: PropTypes.string,
        height: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    };

    render() {
        const style = mixProps({}, this.props);
        if (this.props.auto) {
            style.flex = '0 0 auto';
        }

        // strip props that are invalid to set on a div.
        // (prevents https://fb.me/react-unknown-prop)
        let {
            row, column, auto,
            ...divProps
        } = this.props;

        return <div {...divProps} style={style}>{this.props.children}</div>;
    }
}
