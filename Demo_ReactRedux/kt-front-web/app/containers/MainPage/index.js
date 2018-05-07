/*
 *
 * MainPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Sidebar from './../Sidebar';
import MainContentsPage from './../MainContentsPage';
import { createStructuredSelector } from 'reselect';

const styles = {
  leftSideMenu: {
    width: '250px',
    float: 'left',
    height: '100%'
  }
  ,mainContents: {
      marginLeft: '250px',
    height: '100%'
  }
};

export class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div style={{height: '100%'}}>
          <div style={styles.leftSideMenu}>
            <Sidebar />
          </div>
          <div style={styles.mainContents}>
            <MainContentsPage />
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(MainPage);
