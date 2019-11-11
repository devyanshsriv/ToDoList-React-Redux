import React, { Component } from 'react'
import BucketIcon from '../../Images/BucketIcon.png'
import { connect } from 'react-redux';
import { bucketactions } from '../../Actions/Actions';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

function mapStateToProps(state) {
    return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
    return {
        bucketactions: bindActionCreators(bucketactions, dispatch)
    }
}

class Bucket extends Component {

    handleAdd(e) {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            this.props.bucketactions.addBucket()
        }
    }

    handleEdit(e) {
        this.props.bucketactions.editBucket(this.props.index, e.target.value)
    }

    render() {
        return (
            <div className="col-4 col-sm-4 col-md-4 col-lg-4 mt-3">

                <div className="white-block">
                    <Link to="/bucketContents">
                        <div className="d-flex justify-content-center icon-circle">

                            <span className="custom-icon"><img src={BucketIcon} className="image-icon" /></span>
                        </div>
                    </Link>
                    <div className="d-flex justify-content-center mt-3" style={{ cursor: 'pointer' }}>
                        <input
                            className="mb2 pa2"
                            type="text"
                            ref="bucketInput"
                            value={this.props.text}
                            onChange={this.handleEdit.bind(this)}
                            onKeyPress={this.handleAdd.bind(this)}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucket);