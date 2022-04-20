import { Title, Container, Content, Header, Text, View } from "native-base";
import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'

export default function ButtonCounter (){
  const styles = StyleSheet.create({
    pressBtn: {
      color:"#06b6d4",
    }
  });
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <Container>
      <Header>
        <Title>State &#38; props</Title>
      </Header>
      <Content alignItems="center">
        <View>
          <Text>You've pressed the button: {counter} time(s)</Text>
        </View>
        <View alignItems="center">
          <Text onPress={handleCounter} style={styles.pressBtn}>Press me</Text>
        </View>
      </Content>
    </Container>
  );
}