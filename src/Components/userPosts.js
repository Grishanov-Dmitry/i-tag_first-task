import React from 'react';
import { connect } from 'react-redux';

class UserPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>
                    Hello tratatat
                </h1>
              
            </div>
        )
    }
  }

  export default connect( (state) => {
    return {
        allState: state
    }
}) (UserPosts);