import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, WebView } from 'react-native'
import styles from './Styles/SwipeCardStyle'

export default class SwipeCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  render () {
    console.log(this.props)
    const { type, picture, username, name, time, text, url, profile } = this.props
    return (
      <View style={styles.cardWrapper}>
      <View style={styles.card}>
      <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <Image source={{uri:profile}} style={styles.profile} />
            <View style={styles.nameWrapper}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.userName}>@{username}</Text>
            </View>
            <Text style={styles.userName}>{time}hr.</Text>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          {text && 
          <Text style={styles.contentText}>{text}</Text>
          }
          {picture && 
          <Image style={styles.contentImage} source={{uri:picture}} />
          }
          {url && 
          <WebView
            source={{html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="' + url + '" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>'}}
            style={styles.web}
          />
          }
        </View>
      </View>
      </View>
    )
  }
}
