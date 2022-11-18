import "reflect-metadata"
import "react-native-gesture-handler";
import React, {useEffect} from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AppDataSource } from "./database/Data-source";
import ManterCachorro from "./screens/ManterCachorro";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Exemplo com TypeORM</Text>
    </View>
  );
}

function ManterCachorroScreen({ navigation }) {
  return (
   <ManterCachorro></ManterCachorro>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  const connect = async () => {
    try { AppDataSource.initialize().then(async () => {
      console.log("Tudo Certo com o Banco.")
      }).catch(error => console.log(error)) } 
      catch (err) {
      console.log(err);
}
};

    useEffect(() => {
      if (!AppDataSource.isInitialized){ 
        connect();
    } 
}, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ManterCachorro" component={ManterCachorroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}