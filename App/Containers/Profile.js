import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileStyle'

class Profile extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }


  onEventPress = () => {
    const { navigation, setSelectedEvent } = this.props
    //setSelectedEvent(item)
    navigation.navigate('Rank')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity
        onPress={() => this.onEventPress()}
        >
          <View style={styles.rankingWrapper}>
            <Icon name="md-star" size={25} color='#FFB300' />
            <Text style={styles.ranking}>14</Text>
          </View>
          </TouchableOpacity>
          <View>
            <Icon name="md-settings" size={25} color='#424242' />
          </View>
        </View>
        <View style={styles.profileWrapper}>
          <Image source={{uri:'https://instagram.fkul4-1.fna.fbcdn.net/vp/7f2d35d7adee76dfc6322813aeceb487/5CB6A4E6/t51.2885-19/s150x150/42701698_249051329119203_775093240167661568_n.jpg?_nc_ht=instagram.fkul4-1.fna.fbcdn.net'}} style={styles.profile} />
          <Text style={styles.userName}>SooXT</Text>
        </View>
        <View>

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
