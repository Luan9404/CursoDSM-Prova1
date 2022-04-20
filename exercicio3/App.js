import { Container, Content, Header, Item, Input, Form, Label, View, Title, H1 } from 'native-base';
import { useState } from 'react';
import TextResult from './TextResult';

export default function App() {
  const [name, setName] = useState('');

  const handleName = text => setName(text)
  return (
    <Container>
      <Header>  
        <Title>
          <H1 style={{color:'#fafafa'}}>Building a Form</H1>
        </Title>
      </Header>
      <Content padder>
        <View >
          <Form>
            <Label>What is your name?</Label>
            <Item>
              <Input placeholder='Type here' value={name} onChangeText={handleName}/>
            </Item>
          </Form>
          <TextResult name={name} />
        </View>
      </Content>
    </Container>
  );
}
