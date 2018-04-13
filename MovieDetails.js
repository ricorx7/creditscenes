import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Button, FlatList, Text, View, Image, ImageBackground } from 'react-native';


export default class MovieDetails extends React.Component {
    constructor(props){
        super(props);
        this.state =
        { 
            isLoading: true,
            title: '',
        }
      }

      static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.movie.title}`,
      });
    
      render() {
          /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const movie = params ? params.movie : null;

        let backdrop = { 
          uri: 'https://image.tmdb.org/t/p/w500/' + [movie.backdrop_path] 
        };
    
        let poster = {
          uri: 'https://image.tmdb.org/t/p/w500/' + [movie.poster_path] 
        };

        let avg = ([movie.vote_average] * 10.0);
    
        return (
            <ImageBackground source={poster} style={styles.container}>
              <View style={styles.rectangle}>
                <Text style={styles.headline}>{movie.title}</Text>
                <Text style={styles.headline}>{avg}%</Text>
              </View>
            </ImageBackground>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    },
    headline: {
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'white'
    },
    rectangle: {
      width: '100%',
      height: '60%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      justifyContent: 'center',
      flexDirection: 'column',
    }
  });