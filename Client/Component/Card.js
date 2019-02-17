import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Animated, Easing, Button} from 'react-native';

export default class Card extends Component{
    // state = {
    //     spinValue = new Animated.Value(0),
    // };

    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
        this.rotate = false
      }
    // flyOut(){
    //     Animated.parallel([
    //         Animated.timing(this.state.xPosition, {
    //             toValue: 100,
    //             easing: Easing.back(),
    //             duration: 2000,
    //           }),
    //           Animated.timing(twirl, {
    //             // and twirl
    //             toValue: 360,
    //           }),
    //     ]).start();
    // };

    // rotate(){
        
    // }
    rotate = () => {      
        this.spin()
      }
      spin () {
        // this.spinValue.setValue(0)
        Animated.timing(
          this.spinValue,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.quad
          }
          
        ).start(() => this.spin())
      }

    
    render(){
        let xDimension = .80*Dimensions.get('screen').width;
        let yDimension = .60*Dimensions.get('screen').height;


        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '5deg']
          })


        const styles = StyleSheet.create({
            wrapper: {
                transform: [{rotate: spin}]
            },
            card: {
                zIndex: this.props.zIndex,
                position: this.props.pos,
                height: yDimension,
                flex: 0,
                padding: 0,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',     
                borderRadius: 10,
                backgroundColor: '#222222',
                overflow: 'hidden',
            },
            img: {
                height: xDimension, 
                width: xDimension,    
            },
            caption: {
                fontSize: 35,
                color: 'white',
                paddingTop: 30,
                paddingBottom: 40,
                overflow: 'hidden',
                maxWidth: 0.85*xDimension,
                maxHeight: 0.3*yDimension 
            },
            textWrapper: {
                paddingBottom: 15,
                width: 270,
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'space-between'
            },           
            subtext: {
                fontSize: 15,
                padding: 0,
                color: 'white'
            },
        });
        return(
            <Animated.View style={styles.wrapper}
                shadowColor={'black'} 
                shadowRadius={10} 
                shadowOpacity={.75} 
                shadowOffset={{ height: 3, width: 1 }}>

            <View style={styles.card} >
                <Image
                    style={styles.img}
                    source={{uri: this.props.uri}}
                  />
                <Text style={styles.caption}>{ this.props.caption }</Text>
                <View style={styles.textWrapper}>
                    <Text style={styles.subtext}>{ this.props.restaurant }</Text>
                    <Button title='Rotate' onPress={() => this.rotate()}></Button>
                    <Text style={[styles.subtext,{color: 'lightgreen'}]}>{ this.props.price }</Text>
                </View>
            </View>
            </Animated.View>
        );          
    }  
}

