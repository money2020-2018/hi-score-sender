import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      baseBonus: 20
    };
  }

  baseBonusChange(baseBonus){
    this.setState(() => {
      return {
        baseBonus: baseBonus.toFixed(2)
      }
    })
  }

  render() {
    const {baseBonus} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.notification}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../assets/images/notification.png')}
              />
            </View>
            <Text style={styles.header}>Give Bonuses</Text>
            <View style={styles.allowanceSection}>
              <Text style={styles.getStartedText}>Default Bonus</Text>
              <Switch 
                // onValueChange={this.baseBonusChange.bind(this)} 
                value={ this.state.toggled } 
              /> 
            </View>
        
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 35,
    textAlign: 'left',
    marginBottom: 24,
    marginLeft: 20
  },
  notification: {
    alignItems: 'flex-end',
    marginRight: 10
  },
  allowanceSection: {
    padding: 10,
    alignItems: 'center'
  },
  getStartedText: {
    color: '#003ea9',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 15
  },
})
