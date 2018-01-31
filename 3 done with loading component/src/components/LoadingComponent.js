import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter you can get access to the history object's property
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getNotes } from '../actions/notesAction';

class LoadingComponent extends Component {
    componentWillMount() {
        if (this.props.notesLoading === undefined) {
            this.props.getNotes();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notesLoading === -1) {
            this.props.getNotes();
        }
    }

    render() {
        const { children, notesLoading } = this.props;
        if (!notesLoading) {
            return <div>{children}</div>;
        } else {
            return (
                <div>
                    <h1>Loading..</h1>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getNotes })(LoadingComponent));
