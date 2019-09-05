import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { StyleSheet, View, Alert } from "react-native";

import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Content,
  Text,
  Button,
} from "native-base";

export default class SettingsScreen extends React.Component {
  
  render() {
    return (
          <Container>
      <Header>
        <Left />
        <Body>
          <Title>About</Title>
        </Body>
        <Right />
      </Header>

      <Content padder>
        <Button block onPress={showAlert} style={[styles.button]}>
          <Text>Alert</Text>
        </Button>
        <Button
          success
          block
          onPress={() => this.props.navigation.navigate("LinksStack")}
          style={[styles.button]}
        >
          <Text>Links</Text>
        </Button>
      </Content>
    </Container>
    );
  }
}
SettingsScreen.navigationOptions = {
  header: null,
};

  function showAlert() {
    Alert.alert("Alert!");
  }

  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
    },
  });
