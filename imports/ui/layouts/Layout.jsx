import React from 'react';
import { IonNavView, IonView, IonContent, IonNavBar, IonNavBackButton,
  IonFooterBar, IonButton, IonIcon, IonSideMenuContainer, IonSideMenus,
  IonSideMenu, IonSideMenuContent, IonPopoverButton } from 'reactionic';

export default class Layout extends React.Component {
  render() {
    return (
      <IonSideMenuContainer {...this.props}>
        <IonSideMenus>
          <IonSideMenu customClasses="side-menu">
            <div className="bar bar-header bar-stable">
              <h1 className="title">Left Menu</h1>
            </div>
            <div className="content has-header side-menu">
              <div className="list">
                <div className="item item-icon-right"
                  onClick={ () => { this.context.ionSnapper.close(); } }
                >
                  Close Me <IonIcon icon="ios-arrow-right" />
                </div>
              </div>
            </div>
          </IonSideMenu>
          <IonSideMenu side="right" customClasses="side-menu">
            <div className="bar bar-header bar-stable">
              <h1 className="title">Right Menu</h1>
            </div>
            <div className="content has-header side-menu">
              <div className="list">
                <div className="item item-icon-left"
                  onClick={ () => { this.context.ionSnapper.close(); } }
                >
                  Close Me <IonIcon icon="ios-arrow-back" />
                </div>
              </div>
            </div>
          </IonSideMenu>
        </IonSideMenus>
        <IonSideMenuContent>
          <IonNavBar customClasses="bar-dark"
            title="ReactIonic Playground"
            {...this.props}
          />

          <IonNavView customClasses="" {...this.props}>
            <IonView customClasses="" {...this.props}>
              {this.props.children}
            </IonView>
          </IonNavView>
        </IonSideMenuContent>
      </IonSideMenuContainer>
    );
  }
}

Layout.propTypes = {
  user: React.PropTypes.object,      // current meteor user
  connected: React.PropTypes.bool,   // server connection status
  children: React.PropTypes.element, // matched child route component
  location: React.PropTypes.object,  // current router location
  params: React.PropTypes.object,    // parameters of the current route
};

Layout.contextTypes = {
  ionSnapper: React.PropTypes.object,
  ionShowPopover: React.PropTypes.func,
  ionPlatform: React.PropTypes.object,
};