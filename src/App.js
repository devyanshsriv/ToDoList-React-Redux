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
    todos1: state.todos1,
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
    console.log(this.props.buckets[0].id, "cursor")
    return (
      <Router>
        <Route exact path="/" render={(props) =>
          <BucketList>
            {
              this.props.buckets.map(({ id, text }, index) =>
                <Bucket
                  key={index}
                  index={index}
                  id={id}
                  text={text}
                />
              )
            }
          </BucketList>
        }>
        </Route>
        <Route exact path="/bucketContents/bucket_:bucketId" render={(props) =>
          <TodoBackground>
            <TodoContainer>
              <TodoUncompletedList>
                {
                  this.props.buckets && this.props.buckets[0].id == 1 ?
                    this.props.todos.map(({ id, text, completed, bucketId }, index) =>
                      !completed && <TodoItem
                        key={id}
                        index={index}
                        text={text}
                        bucketId={bucketId}
                        completed={completed}
                      />
                    )
                    : this.props.todos1.map(({ id, text, completed, bucketId }, index) =>
                      !completed && <TodoItem
                        key={id}
                        index={index}
                        text={text}
                        bucketId={bucketId}
                        completed={completed}
                      />
                    )
                }
              </TodoUncompletedList>
              <TodoCompletedList>
                {
                  this.props.todos.map(({ id, text, completed, bucketId }, index) =>
                    completed && <TodoItem
                      key={id}
                      index={index}
                      text={text}
                      bucketId={bucketId}
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