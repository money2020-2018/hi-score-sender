import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      baseAllowance: 20
    };
  }

  change(baseAllowance) {
    this.setState(() => {
      return {
        baseAllowance: baseAllowance.toFixed(2)
      };
    });
  }

  render() {
    const {baseAllowance} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.notification}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/images/notification.png')}
            />
          </View>
          <Text style={styles.header}>Reward 'em</Text>
          <View style={styles.allowanceSection}>
            <Text style={styles.getStartedText}>Reward Now</Text>
            <Text style={styles.label}>{"$" + String(baseAllowance)}</Text>
            <Slider
              style={styles.sliderContainer}
              step={.25}
              maximumValue={25}
              minimumValue={3}
              onValueChange={this.change.bind(this)}
              value={parseInt(baseAllowance)}
              minimumTrackTintColor="#003ea9"
              maximumTrackTintColor="#003ea9"
              thumbTintColor="#003ea9"
            />          
          </View>

          <View style={styles.avatarSection}>
            <Image
              style={{
                width: 200,
                height: 200,
                justifyContent: 'center',
              }}
              source={require('../assets/images/A-24.png')}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => this._onPressLearnMore(this.state.baseAllowance)}
            >
              <Text style={styles.sendText}>Send Now</Text>
            </TouchableOpacity>
          </View>
           
          <View style={styles.section}>
            
          </View>
        </ScrollView>
      </View>
    );
  }

  _onPressLearnMore = (amt) => {
    console.log("Here!", this.state.baseAllowance);
    fetch('http://10.42.0.114:5000', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amt
      }),
      json: true
    });
    this.props.navigation.navigate('Links');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  scrollViewContainer:{
    flex: 1,
    backgroundColor: '#fff',
  },
  sendButton: {
    padding: 20,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#FFD700',
  },
  sliderContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  getStartedText: {
    color: '#003ea9',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    paddingBottom: 15
  },
  sendText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
  },
  header: {
    color: '#000',
    fontFamily: 'sf-pro-bold',
    fontSize: 34,
    lineHeight: 35,
    textAlign: 'left',
    marginBottom: 24,
    marginLeft: 20
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  avatarSection: {
    alignItems: 'center'
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  notification: {
    alignItems: 'flex-end',
    marginRight: 5,
    paddingTop: 12
  },
  label: {
    fontSize: 45,
    textAlign: 'center',
    lineHeight: 50,
    color: '#003ea9',
    fontFamily: 'open-sans-extra',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
});
