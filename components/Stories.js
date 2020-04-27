import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Storyly } from 'storyly-react-native';

const Stories = (props) => {

    return(
        <View style={styles.stories}>
            <Text style={{fontSize: 23, fontFamily: 'Nunito-Bold',
                        color: '#1e2a78'}}>
                Welcome To {props.name[0]}
            </Text>

            <Storyly
                style={{ width: '100%', height: 120, marginTop: 15 }}
                storylyId= {props.name[1]}
                onLoad={storyGroupList => {}}
                onFail={errorMessage => {}}
                onPress={story => {}}
                onStoryOpen={() => {}}
                onStoryClose={() => {}}
            />
        </View>

    )
    
}

export default Stories;

const styles = StyleSheet.create({
    stories: {
        justifyContent:'center',
        alignItems: 'center',
        height: 180,
        borderBottomColor:'black', 
        borderBottomWidth:1,
        marginLeft: 12,
        marginRight: 12
    }
  })