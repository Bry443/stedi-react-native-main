import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';
import getToken from './Login.js';


const Home = (props) => {
  return (
    <View>
      
      <Bar loggedInUser={props.loggedInUser}/>
      <Icons />
    </View>
  );
};

export default Home;
