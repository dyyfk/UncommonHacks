import React, { Component } from "react";
import { Button, StyleSheet, View, Dimensions, TouchableNativeFeedback } from "react-native";

export default class ButtonBar extends Component {
  render() {
    let width = .85*Dimensions.get('screen').width;
    const styles = StyleSheet.create({
      buttonContainer: {
        // display: 'none',
        width: width,
        paddingTop: 60,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        backgroundColor: '#777',
        padding: 15
      },
      wrapper: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
      },
      loveWrapper: {
        backgroundColor: 'red'
      },
      hateWrapper: {
        backgroundColor: 'grey'
      }
    })

    return (
      <View style = {styles.buttonContainer}>
        <View style = {[styles.loveWrapper, styles.wrapper]}
              shadowColor={'hotpink'} 
              shadowRadius={3} 
              shadowOpacity={.75} 
              shadowOffset={{ height: 3, width: 1 }}
        >
          <Button
            style = {styles.button}
            onPress = {this.props.onHandle}
            title="Love"
            color="white"
          />
        </View>
        <View style = {[styles.hateWrapper, styles.wrapper]}
              shadowColor={'grey'} 
              shadowRadius={3} 
              shadowOpacity={.85} 
              shadowOffset={{ height: 3, width: 1 }}
        >
          <Button
            style = {styles.button}
            onPress = {this.props.onHandle}
            title="Hate"
            color="white"
          />
        </View>
      </View>
    );
  }
}
