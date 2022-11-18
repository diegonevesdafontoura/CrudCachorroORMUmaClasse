import "reflect-metadata"
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, FlatList, Pressable, TextInput,  TouchableOpacity,  KeyboardAvoidingView, Alert, AlertButton} from 'react-native';
import MeuEstilo from '../meuestilo'
import { Cachorro } from '../model/Cachorro';
import { AppDataSource } from "../database/Data-source"; 



const ManterCachorro = () => {
  const navigation = useNavigation(); 
  const [formCachorro, setFormCachorro] = useState<Partial<Cachorro>>({});
  const [cachorros, setCachorros]=useState<Cachorro[]>([]);
  const [erros, setErrors] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(true)

  const connect = async () => {
    try { AppDataSource.initialize().then(async () => {
      console.log("Here you can setup and run express / fastify / any other framework.")
      }).catch(error => console.log(error)) } catch (err) {
  console.log(err);
}
};

useEffect(() => {
  if (!AppDataSource.isInitialized){ 
   connect();
  }
  listartodos()
 }, []);

 

  const salvarRegistro =  async () => {
    const cachorroobj = new Cachorro(formCachorro)
    if (formCachorro.id==null){
      await AppDataSource.manager.save(cachorroobj)
      setFormCachorro(cachorroobj)
      alert('Cachorro Adicionado!');
      listartodos();
    }else{
      const cachorroRepository = AppDataSource.getRepository(
        Cachorro)
        // tem que ser let para enviar o objeto inteiro const só aceita 
        // atributo por atributo senão fica como read-only
      let cachorroToUpdate = await cachorroRepository.findOneBy({
        id: cachorroobj.id,
        })
        cachorroToUpdate=cachorroobj
        // cachorroToUpdate.nome=cachorroobj.nome;
       // cachorroToUpdate.datanascimento=cachorroobj.datanascimento;
        // cachorroToUpdate.sexo=cachorroobj.sexo;
       //  cachorroToUpdate.raca=cachorroobj.raca;
       await cachorroRepository.save(cachorroToUpdate)
       alert('Cachorro Atualizado!');
       listartodos();
    }
    console.log("Cachorro Objeto", cachorroobj)
    console.log("Cachorro Form ", formCachorro)
    limparFormulario();  
  

}
 
const listartodos=async()=>{
    const cachorrosRepository = AppDataSource.getRepository(Cachorro)
    const allCachorros = await cachorrosRepository.find({})
    setCachorros(allCachorros)
    console.log("All Relacionamento from the db: ", allCachorros)
    setIsRefreshing(false)
    }


  const limparFormulario = () => {
   setFormCachorro({});
  }

  const editCachorro=async(cachorro: Cachorro)=>{
    console.log(cachorro);
    console.log(cachorro.id);
    const cachorroRepository = AppDataSource.getRepository(Cachorro)
    const cachorroview = await cachorroRepository.findOneBy(cachorro)
    setFormCachorro(cachorro);
    // setFormCachorro({ ...formCachorro, 
    //   id:cachorroview.id,
    //   nome: cachorroview.nome,
    //   datanascimento: cachorroview.datanascimento,
    //   sexo: cachorroview.sexo,
    //   raca: cachorroview.raca,
    // });
    }

    const deleteCachorro = async(cachorro: Cachorro) => {
      const cancelBtn: AlertButton = { text: 'Cancelar' }
      const deleteBtn: AlertButton = {
          text: 'Apagar',
          onPress: async() => {
            const cachorroRepository = AppDataSource.getRepository(Cachorro)
            const cachorroToRemove = await cachorroRepository.findOneBy(cachorro) 
            await cachorroRepository.remove(cachorroToRemove);   
            limparFormulario();
            setIsRefreshing(true);
            listartodos();
          }
      }
      Alert.alert(`Apagar cachorro "${cachorro.nome}?"`, 'Essa ação não pode ser desfeita!', [deleteBtn, cancelBtn])
  }

  const renderCachorros = ({ item }:{ item:Cachorro}) => {
    return <View style={MeuEstilo.itemCard} key={item.id}>
        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#f1f1f1' : 'transparent' }, MeuEstilo.listItem]}
            onLongPress={() => deleteCachorro(item)}
            onPress={() => { editCachorro(item) }}
        >
            <View>
                <Text>ID: {item.id}</Text>
                <Text>Nome: {item.nome}</Text>
                <Text>Data Nascimento: {item.datanascimento}</Text>
                <Text>Raça: {item.raca}</Text>
                <Text>Sexo: {item.sexo}</Text>
            </View>
        </Pressable>
    </View>
}
  return (
    <KeyboardAvoidingView
      style={MeuEstilo.containerlistar}
      behavior="padding"
    >
    <View  style={MeuEstilo.inputContainer}>
        <TextInput style={MeuEstilo.input}
          placeholder="Nome do Cachorro..."
          value={formCachorro.nome}
          onChangeText={parametro => setFormCachorro({ ...formCachorro, nome: parametro })}
        />
       
        <TextInput style={MeuEstilo.input}
          placeholder="Data Nascimento ..."
          value={formCachorro.datanascimento}
          onChangeText={parametro => setFormCachorro({ ...formCachorro, datanascimento: parametro })}
        />
       
        <TextInput style={MeuEstilo.input}
          placeholder="Raça..."
          value={formCachorro.raca}
          onChangeText={parametro => setFormCachorro({ ...formCachorro, raca: parametro })}
        />
       
         <TextInput style={MeuEstilo.input}
          placeholder="Sexo do Cachorro..."
          value={formCachorro.sexo}
          onChangeText={parametro => setFormCachorro({ ...formCachorro, sexo: parametro })}
        />
        
    </View>
      <View style={MeuEstilo.buttonContainer}>
        <TouchableOpacity
          onPress={salvarRegistro}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Salvar Registro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={listartodos}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Listar Todos</Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView style={MeuEstilo.containerFlatList}>
       <FlatList
        data={cachorros}
        renderItem={renderCachorros}
        keyExtractor={item => item.id.toString()}
        onRefresh={() => listartodos()}
        refreshing={isRefreshing}       
    />
        </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ManterCachorro

 