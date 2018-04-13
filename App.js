import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import  MovieCardList from './MovieCardList.js';
import  MovieDetails from './MovieDetails.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>My Mod</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    MovieCardList: {
      screen: MovieCardList,
    },
    MovieDetails: {
      screen: MovieDetails,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'MovieCardList',
  }
);


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
