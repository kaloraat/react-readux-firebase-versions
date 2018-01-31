import React, { Component } from 'react';
import { connect } from 'react-redux';
// with withRouter You can get access to the history object’s properties
import { withRouter } from 'react-router-dom';
import { getUser } from '../actions/userAction';
import { getNotes } from '../actions/notesAction';

class LoadingComponent extends Component {
    componentWillMount() {
        const { userLoading, notesLoading } = this.props;
        // if we havent tried to load the user, load user
        if (userLoading === undefined) {
            this.props.getUser();
        }

        // if we havent tried to get notes, load notes
        if (notesLoading === undefined) {
            this.props.getNotes();
        }
    }

    componentWillReceiveProps(nextProps) {
        // wait for user to get authenticated and try to load notes
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes();
        }
    }

    render() {
        const { userLoading, notesLoading, children } = this.props;
        /**
         * throughout the lifetime of app user and notes loading status will
         * keep toggling between true and false
         * when anything other than that toggling state such as true or false is in the state
         * that means the loading operation is setteled and not active
         * that time, show the enclosing components
         * for everything else and inbetween show Loading
         */
        if ((!userLoading && !notesLoading) || this.props.user === null) {
            return <div>{children}</div>;
        } else {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        userLoading: state.loading.user,
        notesLoading: state.loading.notes,
        user: state.user
    };
}

export default withRouter(connect(mapStateToProps, { getUser, getNotes })(LoadingComponent));
