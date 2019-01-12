import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.snow
  },
  tab: {
    //padding: 5
  },
  indicator: {
    width: 0,
    height: 0
  },
  label: {
    fontSize: 10
  },
  tabBar: {
    backgroundColor: Colors.snow,
  },
  labelMerchant: {
  	fontSize: 15
  },
  tabHeader: {
  	borderBottomColor: Colors.snow, // StatusBar color
  	backgroundColor: Colors.snow, // StatusBar color
  	marginTop: 20,
  	//paddingTop: Metrics.navBarHeight,
  	//height: 50 + Metrics.navBarHeight,
  },
  indicatorMerchant: {
  	borderBottomColor: Colors.coal,
  	borderBottomWidth: 2,
  },
  tabMerchant: {
  },
})
