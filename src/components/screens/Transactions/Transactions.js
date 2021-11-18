import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { GetMoviesDetails } from "../../../Redux/Actions/TransactionsAction";
import { connect } from 'react-redux'
class Transactions extends Component {
    constructor(props) {
        super(props);
      
      }
       componentDidMount() {
       // this.getMovies();
      this.props.GetMoviesDetails();
      }


    render() {
       // const { data, isLoading } = this.state;
       console.log("Transactions======>",this.props.data)
   
        return (
            <View style={{ flex: 1, padding: 24 }}>
              {/* <Text>
               data = {this.props.data?.movies[0].id}</Text> */}
             <FlatList
                data={ this.props.data ? this.props.data.movies : []}
                renderItem={({ item }) => (
                  <View>
                  <Text>{item.title}</Text>
                  </View>
                )}
              />
            {/* :null} */}
          </View>
        )
    }
}


const mapDispatchToProps = (state) => {
    const {loading,error,data} = state.DataReducer;
    return {
      loading,
      error,
      data
  };
  
};

export default connect(mapDispatchToProps,{
  GetMoviesDetails
})(Transactions);


