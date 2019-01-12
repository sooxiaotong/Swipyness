import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import RankList from '../Components/RankList'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RankStyle'

class Rank extends Component {
  constructor (props) {
    super(props)
    //this.state = {}
    this.json = {
      list : require('../Fixtures/rankList.json')
    }
  }
renderItem = ({item}) => {

//if (Platform.OS === 'ios') {
  return (
    <TouchableOpacity
    //onPress={() => this.onEventPress(item)}
    >
      <RankList
        {...item}
      />
    </TouchableOpacity>
  )
  }

  render () {
    return (
       <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.rankingWrapper}>
            <Icon name="md-star" size={100} color='#FFB300'>
<Text style={styles.ranking}>14</Text>
            </Icon>
            
          </View>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={this.json.list}
            renderItem={this.renderItem}
            keyExtractor={(item, idx) => item._id}
          />
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rank)
