
import { Scene, Router, Tabs } from "react-native-router-flux";

import {
  Welcome,
  Home,
  Transactions,
  Stake,
  Settings
} from "./components/screens/index"

import { Images, Colors } from "./theme/";
import { TabIcon } from "./components/common/TabIcon";


import React, { Component } from 'react'


export default class Routers extends Component {
  render() {
    return (
      <Router
        // onStateChange={onRouterChanged}
        navigationBarStyle={{
          backgroundColor: "rgba(0,0,0,0)",
          borderBottomWidth: 0,
        }}
        hideNavBar={false}
        leftButtonIconStyle={{ width: 21, height: 18 }}
        titleStyle={{ color: '#333' }}
      >

        <Scene key="root" hideNavBar>
          <Scene
            key="Welcome"
            hideNavBar={true}
            component={Welcome}
            gestureEnable={false}
            panHandlers={null}
            initial
          />

          <Scene key="Main" hideNavBar>
            <Tabs
              showLabel={false}
              lazy={true}
              swipeEnabled={false}
              gestureEnable={true}
              panHandlers={null}
              tabBarStyle={{
                bottom: 0,
                backgroundColor: Colors.tabbackgroundcolor,
                paddingTop: 3,
                paddingBottom: 3,
                borderColor: "#000",
                shadowColor: "rgba(0,0,0,0.06)",
              }}

            // type="reset"
            >
              <Scene
                hideNavBar={true}
                key="Home"
                component={Home}
                gestureEnable={true}
                panHandlers={null}
                icon={({ focused }) => (
                  <TabIcon
                    focused={focused}
                    title={"Wallets"}
                    ImgSize={{ width: 20, height: 20 }}
                    activeImg={Images.wallet}
                    defaultImg={Images.wallet}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Transactions"
                component={Transactions}
                gestureEnable={true}
                panHandlers={null}
                icon={({ focused }) => (
                  <TabIcon
                    focused={focused}
                    title={"Transactions"}
                    ImgSize={{ width: 20, height: 20 }}
                    activeImg={Images.transaction}
                    defaultImg={Images.transaction}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Stake"
                component={Stake}
                gestureEnable={true}
                panHandlers={null}
                icon={({ focused }) => (
                  <TabIcon
                    focused={focused}
                    title={"Stake"}
                    ImgSize={{ width: 20, height: 20 }}
                    activeImg={Images.stake}
                    defaultImg={Images.stake}
                  />
                )}
              />
              <Scene
                hideNavBar={true}
                key="Settings"
                component={Settings}
                gestureEnable={true}
                panHandlers={null}
                icon={({ focused }) => (
                  <TabIcon
                    focused={focused}
                    title={"Settings"}
                    ImgSize={{ width: 20, height: 20 }}
                    activeImg={Images.settings}
                    defaultImg={Images.settings}
                  />
                )}
              />



            </Tabs>
          </Scene>

        </Scene>

      </Router>

    )
  }
}
