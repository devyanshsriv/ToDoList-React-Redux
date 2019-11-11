import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import './App.css';
import { todoActions } from './Actions/Actions';
import TodoBackground from './Components/ToDoBackground';
import TodoContainer from './Components/ToDoContainer';
import TodoUncompletedList from './Components/TodoUncompletedList';
import TodoItem from './Components/TodoItem';
import TodoCompletedList from './Components/TodoCompletedList';
import Bucket from './Components/Bucket/Bucket';
import BucketList from './Components/Bucket/BucketList';

function mapStateToProps(state) {
  return {
    todos: state.todos,
    buckets: state.buckets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todosActions: bindActionCreators(todoActions, dispatch),
    // bucketactions: bindActionCreators(bucketactions, dispatch)
  }
}

class App extends Component {

  render() {
    return (
      <Router>
        {/* <Route exact path="/" render={(props) =>
          <BucketList>
            {
              this.props.buckets.map(({ text }, index) =>
                <Bucket
                  key={index}
                  index={index}
                  text={text}
                />
              )
            }
          </BucketList>
        }>
        </Route> */}
        <Route exact path="/" render={(props) =>
          <TodoBackground>
            <TodoContainer>
              <TodoUncompletedList>
                {
                  this.props.todos.map(({ text, completed }, index) =>
                    !completed && <TodoItem
                      key={index}
                      index={index}
                      text={text}
                      completed={completed}
                    />
                  )
                }
              </TodoUncompletedList>
              <TodoCompletedList>
                {
                  this.props.todos.map(({ id, text, completed }, index) =>
                    completed && <TodoItem
                      key={id}
                      index={index}
                      text={text}
                      completed={completed}
                    />
                  )
                }
              </TodoCompletedList>
            </TodoContainer>
          </TodoBackground>
        }></Route>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);