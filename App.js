import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Button, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      backgroundColor: 'linen',
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
      maxWidth: 90,
      flex: 1
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    margin: 10,
  }
});

const datasource = [
  {data:[
      {key: 'Pikachu', image: require('./img/pikachu.png')},
      {key: 'Electrode', image: require('./img/electrode.png')},
    ],
    title: "Electric", bgcolor: "khaki"},
  {data:[
      {key: 'Tentacool', image: require('./img/tentacool.png')},
      {key: 'Seel', image: require('./img/seel.png')},
    ],
    title:"Water", bgcolor: "skyblue"},
  {data:[
      {key: 'Vulpix', image: require('./img/vulpix.png')},
      {key: 'Growlithe', image: require('./img/growlithe.png')},
    ],
    title: "Fire", bgcolor: "lightcoral"}
];


const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image style={{height: 350, paddingTop: 5, marginBottom: 5, flex: 1}}
               source={item.image}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{marginTop: 30}}>
          <View style={{padding:30, paddingBottom: 20, borderBottomWidth: 1, borderColor: "gray"}}>
              <Button title={"Add Pokemon"} color={"limegreen"}></Button>
          </View>
        <SectionList
            contentContainerStyle={{padding: 10}}
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section:{title, bgcolor}})=>(
                <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
            )}/>
      </View>
  );
};
// cant figure out how to add icon

export default App;