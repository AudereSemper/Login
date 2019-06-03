import React, { PureComponent } from 'react';
import MkUserCard from '../../components/MkUserCard';
import { connect } from 'react-redux';
import { userInfoRequest } from '../../redux/actions/';

class UserInfoScreen extends PureComponent {
  state = {
    infoAccount : [],
  }

  componentDidMount () {
    const { navigation, request } = this.props;

    const account = navigation.getParam('account')

    request(account.id);
  }

  render() {
    
    const { user } = this.props;
    const { userAccount } = user;
    const { data } = userAccount
    const { email,
            firstName, 
            lastName, 
            username
          } = data;

    return (
      
        <MkUserCard 
          firstName = {firstName ? firstName : null}
          lastName = { lastName ? lastName : null}
          username = { username ? username : null} 
          email = {email ? email : null}
          />
    );
  }
}

const mapStateToProps = state => ({
  user: state.userList,
});

export default connect(
  mapStateToProps,
  {
    request: userInfoRequest,
  }
)(UserInfoScreen);
