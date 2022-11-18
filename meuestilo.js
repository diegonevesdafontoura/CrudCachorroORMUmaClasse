import {StyleSheet, StatusBar} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerFlatList: {
        flex: 1,       
      },
      inputContainer: {
        width: '100%',
      },

      input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 2,
      },
      buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 2,
      },
      buttonOutline: {
        padding: 10,
        backgroundColor: 'white',
        marginTop: 2,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 14,
      },
  

      //ESTILO DO LISTAR
      containerlistar: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: 'white',
        padding: 0.5,
        marginVertical: 0.5,
        marginHorizontal: 0.5,
        borderColor: '#0782F9',
        borderWidth: 2,
        borderRadius: 10,
       
      },
      title: {
        fontSize: 16,
        color: '#0782F9',
        fontWeight: '700',
      },

      // ESTILO DA LISTAGEM COM FILTRO
      containerlistarcomfiltro: {
        paddingTop: 40,
        backgroundColor: 'white',
      },

      itemStyle: {
        backgroundColor: '#0066CC',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1,
        color: 'white',
      },
      textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#0066CC',
      },
       
       // estilo data pikker
       pickedDateContainer: {
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
      },
      pickedDate: {
        alignItems:'center',
        fontSize: 16,
        color: 'black',
      },
      btnContainer: {
        padding: 10,
      },
      // This only works on iOS
      datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },

      // novoconteirnerData
      dataConteirner:{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
     
       
      },
      iconePicker: {
        backgroundColor: "green",
        height: 10,
        width: 150,
      },
      TextoPiker: {
        backgroundColor: "blue",
        height: 100,
        flex: 1,
      },


      conteinerRelatorio:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '1%',
        alignItems: 'center',
        alignContent: 'space-between',
      },

      // dropdown component
      dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

      // modal
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
      },
      modalView: {
        margin: 5,
        backgroundColor: "white",
        borderRadius: 40,
        padding: 100,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      buttonModal: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      error: {
        color: 'red',
        fontSize: 12
    },

      listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    emptyList: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16
    },
    itemCard: {
        backgroundColor: '#fff',
        shadowColor: '#222222',
        // shadowOffset: { height: 1, width: 1 },
    },
    itemImage: {
        width: 64,
        height: 64,
        marginLeft: 10,
        marginRight: 15,
        backgroundColor: '#eee'
    }

    // listagem do listar do manter ORM exemplo

  //   listItem: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     padding: 10
  // },
  // emptyList: {
  //     textAlign: 'center',
  //     marginTop: 10,
  //     marginBottom: 10,
  //     fontSize: 16
  // },
  // itemCard: {
  //     backgroundColor: '#fff',
  //     shadowColor: '#222222',
  //     shadowOffset: { height: 1, width: 1 },
  // },
  // itemImage: {
  //     width: 64,
  //     height: 64,
  //     marginLeft: 10,
  //     marginRight: 15,
  //     backgroundColor: '#eee'
  // }
})