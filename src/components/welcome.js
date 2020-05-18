import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { genericTypeAnnotation } from '@babel/types';


class Welcome extends Component {
    render(){
        return(
            <ImageBackground source={{uri: "https://lh3.googleusercontent.com/FIrlgWZAXCrrxNabIWhr77CsZdJSGdSEx8laSiWE7TzWaJjY4Q-PrS7MYYrBAqY7p0_4Ha1hKsSBXFyuhtjW25XZIQ"}} style={{width: 100 + '%', height: 100 + '%'}}>
                <LinearGradient colors={['white', 'gray', 'black']} style={styles.welcome}>
                    <View style={styles.welcomeScreen}>
                        <Text style={{color: 'white', fontSize: 20}}>Welcome To</Text>
                        <Text style={{fontFamily: 'bigJohn', fontSize: 30, color: 'white', fontWeight: '700'}}>SmartBee</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your username"
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Your password"
                        />
                    </View>

                    <TouchableOpacity onPress={this._onPressButton}>
                        <View>
                            <Text>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>

                </LinearGradient>
            </ImageBackground>   
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        width: 100 + '%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.7
    },
    welcomeScreen:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderWidth: 0.2,
        borderRadius: 4,
        margin: 10,
        backgroundColor: 'white',
        color: 'black',
        padding: 5
    }
}
)

export default Welcome;