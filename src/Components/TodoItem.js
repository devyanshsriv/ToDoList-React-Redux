import React, { Component } from 'react'
import { globalStyles } from './GlobalStyles'
import { PropTypes } from 'prop-types'
import View from './View'
import TodoToggleButton from './TodoToggleButton'
import TodoRemoveButton from './TodoRemoveButton'
import { connect } from 'react-redux';
import { todoActions } from '../Actions/Actions';
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todoActions, dispatch)
    }
}

class TodoItem extends Component {
    constructor() {
        super()

        this.state = {
            hover: false,
            editing: false
        }
    }
    static propTypes = {
        todos: PropTypes.array.isRequired,
        // todosActions: PropTypes.obj.isRequired,
    };

    static defaultProps = {
        completed: false
    };



    enterHover() {
        this.setState({ hover: true })
    }

    leaveHover() {
        this.setState({ hover: false })
    }

    enterEditing() {
        this.setState({ editing: true })
    }

    leaveEditing(e) {
        this.setState({ editing: false })

        // prevents empty todos being created
        if (e.target.value.length < 1) {
            this.props.todosActions.removeTodo(this.props.index)
        }
    }
    handleAdd(e) {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            this.props.todosActions.addTodo()
        }
    }

    handleToggle() {
        console.log("handleToggle", this.props)
        // return false;
        this.props.todosActions.toggleTodo(this.props.index)
    }

    handleEdit(e) {
        this.props.todosActions.editTodo(this.props.index, e.target.value)
    }

    handleRemove() {
        this.props.todosActions.removeTodo(this.props.index)
    }

    componentDidMount() {
        this.refs.todoInput.focus()
    }

    render() {
        console.log(this.props, "todosActions")
        const { colors } = globalStyles
        const { completed } = this.props
        const { hover, editing } = this.state

        const style = {
            input: {
                fontSize: '1em',
                width: '100%',
                marginLeft: '0.5em',
                marginRight: '0.5em'
            },
            container: {
                fontSize: '1em',
                fontWeight: '100',
                paddingTop: '0.5em',
                paddingBottom: '0.5em',
                borderBottom: `1px dashed`,
                transition: '.3s',
                // color: completed && hover ? colors.primary.light : hover ? colors.primary.base : 'currentColor',
                color: completed && hover ? 'purple' : hover ? 'darkblue' : 'currentColor',
                textDecoration: completed && !editing ? 'line-through' : 'none'
            }
        }

        return (
            <View style={style.container}
                onMouseEnter={this.enterHover.bind(this)}
                onMouseLeave={this.leaveHover.bind(this)}
            >
                <View onClick={this.handleToggle.bind(this)}>
                    <TodoToggleButton active={this.props.completed} />
                </View>
                <input
                    className="pa2"
                    type="text"
                    ref="todoInput"
                    style={style.input}
                    value={this.props.text}
                    onChange={this.handleEdit.bind(this)}
                    onFocus={this.enterEditing.bind(this)}
                    onBlur={this.leaveEditing.bind(this)}
                    onKeyPress={this.handleAdd.bind(this)}
                />
                <View onClick={this.handleRemove.bind(this)}>
                    <TodoRemoveButton
                        hover={this.state.hover}
                        editing={this.state.editing}
                    />
                </View>
            </View>
        )
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
