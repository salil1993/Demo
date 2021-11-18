import AsyncStorage from "@react-native-community/async-storage";
export default class Singleton {
    static myInstance = null;
    appInstance = "";
    static getInstance() {
        if (Singleton.myInstance == null) {
          Singleton.myInstance = new Singleton();
        }
        return this.myInstance;
      }

      getData(key) {
        console.log("get key ########");
        console.log("get key ########");
        return new Promise((resolve, reject) => {
          AsyncStorage.getItem(key)
            .then((response) => {
              console.log("get response $$$$$");
              console.log(response);
              console.log("get response $$$$$");
              resolve(response);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }

      saveData(key, value) {
        return new Promise((resolve, reject) => {
          AsyncStorage.setItem(key, value)
            .then((response) => {
              console.log("saved #### " + key);
              resolve(value);
            })
            .catch((error) => {
              console.log("error #### " + key);
              reject(error);
            });
        });
      }




    }