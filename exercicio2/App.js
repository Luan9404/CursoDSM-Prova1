import { Container, Content, Header, View, Text, Title, H1 } from 'native-base';
import { StyleSheet} from 'react-native';
import { useEffect} from 'react'
import * as Font from 'expo-font';


export default function App() {
  useEffect(() => {
    (async () => await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }))();
   }, []);

  return (
    <Container>
      <Header>
        <Title>
          <H1 style={styles.header}>Styling</H1>
        </Title>
      </Header>
      <Content>
        <View style={ styles.gridLayout }>
          <View style={ styles.container1 }><Text style={styles.text}>square 1</Text></View>
          <View style={ styles.container2 }><Text style={styles.text}>square 2</Text></View>
          <View style={ styles.container3 }><Text style={styles.text}>square 3</Text></View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  gridLayout: {
    marginTop: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
  container1: {
    width: 100,
    height: 100,
    backgroundColor: '#67e8f9',
  },
  container2: {
    width: 100,
    height: 100,
    backgroundColor: '#06b6d4',
  },
  container3: {
    width: 100,
    height: 100,
    backgroundColor: '#e53438',
  },
  text: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    marginTop: '40%',
  },
  header: {
    fontFamily: 'Roboto',
    color: '#fafafa'
  }
});
