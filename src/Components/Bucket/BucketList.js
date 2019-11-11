import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bucketactions } from '../../Actions/Actions';
import { bindActionCreators } from 'redux'
import View from '../View';

function mapStateToProps(state) {
    return { buckets: state.buckets }
}

function mapDispatchToProps(dispatch) {
    return {
        bucketactions: bindActionCreators(bucketactions, dispatch)
    }
}

class BucketList extends Component {

    handleAdd() {
        this.props.bucketactions.addBucket()
    }
    render() {
        return (
            <div className="container mt-3">
                <div className="d-flex">
                    <div className="">
                        <h3>BUCKETS</h3>
                    </div>
                    <div className="ml-auto">
                        <button className="btn btn-primary" onClick={this.handleAdd.bind(this)}>Add Bucket</button>
                    </div>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);