export const flexStyle = {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'nowrap',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch'
};

export const mixProps = (style, props) => {
    const divStyle = {};

    if (props.row) {
        divStyle.flexDirection = 'row';
    } else if (props.column) {
        divStyle.flexDirection = 'column';
    }

    if (typeof props.width === 'number') {
        divStyle.flexGrow = props.width;
    } else if (props.width) {
        divStyle.flexBasis = 'auto';
        divStyle.flexGrow = 0;
        divStyle.flexShrink = 0;
        divStyle.width = props.width;
    }

    if (props.height) {
        divStyle.flexBasis = 'auto';
        divStyle.flexGrow = 0;
        divStyle.flexShrink = 0;
        divStyle.height = props.height;
    }

    if (props.style) {
        return { ...flexStyle, ...style, ...divStyle, ...props.style };
    } else {
        return { ...flexStyle, ...style, ...divStyle };
    }
}