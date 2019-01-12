import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import Swiper from 'react-native-deck-swiper'
import Animation from 'lottie-react-native';
import SwipeStore from '../Components/SwipeStore'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StoreStyle'

class Store extends Component {
  constructor (props) {
    super(props)
    this.json = {
      cards : require('../Fixtures/cardSwipeStore.json').items
    }
  }


    buy = () => {
      Alert.alert(
  'Selection',
  'Please choose one option.',
  [
    {text: 'Buy', onPress: () => console.log('Ask me later pressed')},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Gift', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
  }



  render () {
    return (
      <View style={styles.container}>
        <Swiper
            cards={this.json.cards}
            renderCard={(cardData) => {
                return (
                    <SwipeStore {...cardData} style={styles.swiperCard}/>
                )
            }}
            onSwipedTop={() => this.buy()}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            stackSize= {3}
            backgroundColor={'#F5F5F5'}
            overlayLabels={{
  left: {
    title: 'SKIP',
    style: {
      label: {
        backgroundColor: '#4E342E',
        borderColor: '#4E342E',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
      }
    }
  },
  right: {
    title: 'SKIP',
    style: {
      label: {
        backgroundColor: '#4E342E',
        borderColor: '#4E342E',
        color: 'white',
        borderWidth: 5
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  },
  bottom: {
    title: 'Wish List',
    style: {
      label: {
        backgroundColor: '#D81B60',
        borderColor: '#D81B60',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  },
  top: {
    title: 'Buy / Gift',
    style: {
      label: {
        backgroundColor: '#26A69A',
        borderColor: '#26A69A',
        color: 'white',
        borderWidth: 5
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  }
}}>
        </Swiper>

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

export default connect(mapStateToProps, mapDispatchToProps)(Store)
