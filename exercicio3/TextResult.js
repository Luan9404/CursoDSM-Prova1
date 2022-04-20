import { H1 } from "native-base";
import { Row } from "react-native-easy-grid";

export default function TextResult ({name}){
  return (
    <Row>
      <H1>Say hello {name}!</H1>
    </Row>
  )
}