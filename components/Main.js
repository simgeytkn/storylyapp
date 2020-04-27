import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, 
    Dimensions, ScrollView} from 'react-native';
import HeaderTitle from './HeaderTitle'
import Stories from './Stories'

const Main = ({navigation}) => {
        return(
            <View>
                <HeaderTitle />
                <Stories name={['Storyly', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjI4Mn0.v2jLioR32Y24eusXDEl8SW86Wc_BcMBQ8qXS3TSQruA']}/>
                <View style={{height: Math.round(Dimensions.get('window').height) - 300}}>
                    <Text style={{fontSize: 25, fontFamily: 'Nunito-Bold', color: '#1e2a78', paddingTop: 10, textAlign: 'center'}}>
                        Choose a Category to Explore
                    </Text>
                    
                    <ScrollView>
                        <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Ecommerce')}>
                                <Image source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/InstagramImport.png'}} 
                                        style={{width:120, height: 120}}
                                                />
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>E-Commerce</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Marketplace')}>
                                <Image source={{uri:'https://storyly.io/wp-content/uploads/2020/04/InstagramImport.png'}} 
                                        style={{width: 120, height: 120}}/>
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Marketplace</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('InternetProviders')}>
                                <Image source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/Youtube-Import.png'}} 
                                    style={{width:120, height: 120}}
                                            />
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Internet Providers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ServiceProviders')}>
                                <Image source={{uri:'https://storyly.io/wp-content/uploads/2020/04/Youtube-Import.png'}} 
                                    style={{width: 120, height: 120}}/>
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Service Providers</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                                <Image source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/InstagramImport.png'}} 
                                    style={{width:120, height: 120}}
                                            />
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Food</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Sport')}>
                                <Image source={{uri:'https://storyly.io/wp-content/uploads/2020/04/InstagramImport.png'}} 
                                    style={{width: 120, height: 120}}/>
                                <Text style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Sport</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-around'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Magazine')}>
                                <Image source={{uri: 'https://storyly.io/wp-content/uploads/2020/04/Youtube-Import.png'}} 
                                    style={{width:120, height: 120}}
                                            />
                                <Text style={{textAlign: 'center',fontFamily: 'Nunito-Bold', color: '#1e2a78', marginTop:10}}>Magazine</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>           
            </View>
        )
    
}

export default Main;

const styles = StyleSheet.create({  
    cards:{
      flexDirection: 'row',
    }
  })