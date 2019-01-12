import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/RankListStyle'
import Icon from 'react-native-vector-icons/Ionicons';

export default class RankList extends Component {
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
    const {
      arrow,
rank,
username,
profile,
happiness} = this.props

if(arrow == "forward") color = "#212121"
if(arrow == "up") color = "#2E7D32"
if(arrow == "down") color = "#b71c1c"
if(arrow == "back") color = "#212121"
    return (
      <View style={styles.container}>
        <Icon name={"md-arrow-" + arrow} size={25} color={color} />
        <Text style={styles.rank}>{rank}</Text>
        <Text style={styles.userName}>{username}</Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}><Text style={styles.happy}>{happiness}</Text></View>
      </View>
    )
  }
}
