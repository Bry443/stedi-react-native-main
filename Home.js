import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

// <Bar loggedInUserEmail={props.loggedInUser}/>
// https://dev.stedi.me/validate/ + token
const Home = (props) => {
  return (
    <View>
      <Bar loggedInUser={props.loggedInUser}/>
      <Icons />
    </View>
  );
};

export default Home;
