import React from 'react';
import { Text, Image, View, ScrollView, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Allowance sent to Mayra!</Text>
        <View style={styles.avatarSection}>
            <Image
              style={{
                width: 100,
                height: 100,
                justifyContent: 'center',
              }}
              source={require('../assets/images/sent.png')}
            />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 250,
    backgroundColor: '#fff',
  },
  avatarSection: {
    alignItems: 'center',
    paddingTop: 50
  },
  label: {
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 25,
    color: '#003ea9',
    fontWeight: '900',
  },
});
