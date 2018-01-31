import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
                        <h1>
                            Login with your favourite <b>Social Network</b>
                        </h1>
                    </div>

                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-lg">Login with Google</button>
                    </div>
                    <br />
                    <div className="col-sm-6">
                        <button className="btn btn-success btn-lg">Login with Twitter</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
