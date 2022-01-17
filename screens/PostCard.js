import React, { Component } from "react";
import {View,Text,StyleSheet,SafeAreaView,Platform,StatusBar,Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image
                            aource={require("../assets/profile_img.png")}
                            style={styles.profileImage}>
                            </Image>
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(20)} color={"white"}/>
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93,
    margin : RFValue(13),
    backgroundColor : '#2A2A2A',
    borderRadius : RFValue(20),
  },
  authorContainer:{

  },
  authorImageContainer:{

  },
  profileImage:{

  },
  authorNameContainer:{

  },
  authorNameText:{
    fontSize : RFValue(18),
    fontFamily : 'Bubblegum-Sans',
    color : 'white'
  },
  postImage:{
    resizeMode : 'contain',
    width : "95%",
    alignSelf : 'center',
    height : RFValue(250)
  },
  captionContainer:{

  },
  captionText:{
    fontFamily : 'Bubblegum-Sans',
    fontSize : 13,
    color : 'white',
    paddingTop : RFValue(10)
  },
  actionContainer:{
    justifyContent : 'center',
    alignItems : 'center',
    padding : RFValue(10),
  },
  likeButton:{
    width : RFValue(80),
    height:RFValue(30),
    justifyContent:'center',
    alignItems : 'center',
    flexDirection : 'row',
    backgroundColor : '#eb3948',
    borderRadius : RFValue(25)
  },
  likeText:{
    color : 'white',
    fontSize : RFValue(15),
    marginLeft : RFValue(5)
  }
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer:{
    
  },
  storyImage:{
    
  },
  titleContainer:{
    paddingLeft : RFValue(20),
    justifyContent : 'center',
  },
  storyTitleText:{
    fontSize : RFValue(18),
    fontFamily:"Bubblegum-Sans",
    color : "white"
  },
  storyAuthorText:{
    
  },
  descriptionText:{
    
  },
  actionContainer:{
    
  },
  
*/