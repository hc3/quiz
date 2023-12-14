import './firebaseConfig';

import { NativeBaseProvider } from "native-base";
import Navigator from './navigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}