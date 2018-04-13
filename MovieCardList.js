import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, ActivityIndicator, FlatList, Text, Button, View, Image, ImageBackground } from 'react-native';

class MovieCard extends Component {
  render() {
    let backdrop = { 
      uri: 'https://image.tmdb.org/t/p/w500/' + [this.props.movie.backdrop_path] 
    };

    let poster = {
      uri: 'https://image.tmdb.org/t/p/w500/' + [this.props.movie.poster_path] 
    };

    let avg = ([this.props.movie.vote_average] * 10.0);

    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('MovieDetails', {movie: this.props.movie})}>
      <View style={styles.container}>
        <ImageBackground source={backdrop} style={styles.backdrop}>
          <View style={styles.rectangle}>
            <Text style={styles.headline}>{this.props.movie.title}</Text>
            <Text style={styles.headline}>{avg}%</Text>
          </View>
        </ImageBackground>
      </View>
      </TouchableHighlight>
    );
  }
}


export default class MovieCardList extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }


  componentDidMount(){
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=c58a41a02e8e4916ae1a05e43dc1d079')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  static navigationOptions = {
    title: 'Credit Scenes the APP',
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }


    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View>
            <MovieCard movie={item} navigation={this.props.navigation} />
          </View>
          }
          keyExtractor={(item, index) => index}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    width: '100%',
    height: 240,
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  rectangle: {
    flex:1,
    width: '100%',
    height: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});
