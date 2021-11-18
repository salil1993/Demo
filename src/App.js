
import React, { Component } from "react";

import { Provider } from "react-redux";

import Routers from "../src/Router";
import { store } from "./Redux/store";

export default class App extends Component {



    render() {
        console.log("apppppp");
        return (
            <Provider store={store}>
                <Routers />
            </Provider>

        );
    }
}

