import React, { Component } from 'react'
import { globalStyles } from './GlobalStyles'
import View from './View'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { todoActions } from '../Actions/Actions';

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todoActions, dispatch)
    }
}

class TodoUncompletedList extends Component {
    // static propTypes = {
    //   todos: PropTypes.array.isRequired,
    //   addTodo: PropTypes.func.isRequired
    // };

    handleAdd() {
        this.props.todosActions.addTodo()
    }

    render() {
        console.log(this.props, "todos")
        const hasUncompleted = this.props.todos.filter((todo) => !todo.completed).length !== 0

        const hasCompleted = this.props.todos.filter((todo) => todo.completed).length !== 0

        const { colors, borderRadius } = globalStyles

        const style = {
            header: {
                fontWeight: '400',
                paddingBottom: hasUncompleted ? '1em' : '0em',
                borderBottom: hasUncompleted ? `2px solid` : 'none'
            },
            container: {
                // color: colors.primary.light,
                color: 'black',
                // background: colors.neutral.base,
                background: 'white',
                padding: '3em',
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
                borderBottomLeftRadius: hasCompleted ? '0' : borderRadius,
                borderBottomRightRadius: hasCompleted ? '0' : borderRadius
            },
            done: {
                fontWeight: '400',
                textAlign: 'center'
            }
        }

        if (!hasUncompleted && !hasCompleted) {
            return (
                <View column style={style.container}>
                    <p style={style.done}>Well Done! </p>
                </View>
            )
        } else {
            return (
                <View column style={style.container}>
                    <View row style={style.header}>
                        <h3>TO DO</h3>
                        <button className="btn btn-primary" onClick={this.handleAdd.bind(this)}>Add</button>
                    </View>
                    <View column>
                        {this.props.children}
                    </View>
                </View>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoUncompletedList);