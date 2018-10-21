import React from 'react';
import { Text, Button, ScrollView, StyleSheet } from 'react-native';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.getStartedText}>Source Funds</Text>
         <Button
            onPress={this._onPressLearnMore}
            title="Add a Card"
            color="#fdbb0a"
            accessibilityLabel="Add a card button"
          />
      </ScrollView>
    );
  }

  _onPressLearnMore = () => {
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
