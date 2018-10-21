import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
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
        <ScrollView style={styles.container}>
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
              minimumTrackTintColor="#1a1f71"
              maximumTrackTintColor="#1a1f71"
              thumbTintColor="#1a1f71"
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
              onPress={this._onPressLearnMore}
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _onPressLearnMore = () => {
    console.log("Here!", this.state.baseAllowance);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20
  },
  sendButton: {
    padding: 20,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#FFD700',
  },
  sliderContainer: {
    marginBottom: 20
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
    fontWeight: 'bold',
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
    marginRight: 10
  },
  allowanceSection: {
    padding: 10
  },
  label: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 45,
    color: '#003ea9'
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
