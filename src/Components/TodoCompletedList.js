import React, { Component } from 'react'
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

class TodoCompletedList extends Component {
    handleClear() {
        this.props.todosActions.clearTodos()
    }

    render() {
        const hasCompleted = this.props.todos
            .filter((todo) => todo.completed)
            .length !== 0

        const hasUncompleted = this.props.todos
            .filter((todo) => !todo.completed)
            .length !== 0

        const style = {
            header: {
                fontWeight: '400',
                paddingBottom: '1em',
                borderBottom: `2px solid`
            },
            container: {
                display: hasCompleted ? 'flex' : 'none',
                color: 'white',
                background: 'lightsalmon',
                padding: '4em 3em',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px'
            }
        }

        return (
            <View column style={style.container} >
                <View row style={style.header}>
                    <h3>COMPLETED</h3>
                    <button className="btn btn-danger" onClick={this.handleClear.bind(this)}>Clear</button>
                </View>
                <View column>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoCompletedList);