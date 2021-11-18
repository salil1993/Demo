import { Platform,NetInfo } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import Singleton from "../Singleton"

const APIClient = class APIClient{
    static myInstance = null;
    static getInstance() {
      if (APIClient.myInstance == null) {
        APIClient.myInstance = new APIClient();
      }
      return this.myInstance;
    }
    get(baseUrl, endpoint) {
        return new Promise((resolve, reject) => {
          console.log("url", `${baseUrl}${endpoint}`);
            fetch(`${baseUrl}${endpoint}`, {
                method: "GET",
              
              })
                .then(async (res) => {
                  let response = await res.json();
                  console.log("ressssss6666",response)
                  if (res) {
                   // Singleton.getInstance().expireSession(response);
                   // Singleton.getInstance().isTokenValid(response)
                   return resolve(response);
                  }
                  return reject(response);

                })
                // .catch(reject);
                .catch((err) => {
                  console.log("EROR----", err)
    
                  if (err.error != undefined || err.errors != undefined) {
                    console.log("Reject1", err);
                    reject(err);
                  } else {
                    alert("Check Internet Connection")
                    reject(500);
                  }
                });
          
        });
      }



}

export {APIClient}