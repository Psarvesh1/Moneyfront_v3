import styled from "styled-components";
import { List, TouchableRipple, Divider, Modal, Portal, Provider, PaperProvider } from 'react-native-paper';
import React, {useState, useRef} from 'react'
import { TouchableOpacity, View, Text, StyleSheet, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome6'

const ReportsDropDown = ({label, data, onSelect, width}) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = ()=> {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
      <Text>{item.acc}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="slide"
        onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setVisible(!visible);
      }}>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
      <TouchableOpacity
      ref={DropdownButton}
      style={[styles.button, {width: width}]}
      onPress={toggleDropdown}
      onPressOut={() => {setVisible(false)}}
    >
      {renderDropdown()}
      <View style={{flexDirection: 'column'}}>
      <Text style={{marginLeft: 10, marginTop: 10, fontSize: 16, fontWeight: 400}}>Disha</Text>
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      </View>
      <Icon name='angle-down' size={20} style={{color: 'green', marginRight: 20}}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#efefef',
    height: 70,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 400
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  overlay: {
    width: '100%',
    height: '100%',
    marginTop: 50
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
})

const DropDown = styled.TouchableOpacity`
  flexDirection: row;
  width: 100%;
  backgroundColor: #fff;
  padding: 10px 12px;
  marginTop: 10px;
  justifyContent: space-between;
`
const Detail = styled.View`
  flexDirection: column;
`
const Name = styled.Text`
  fontSize: 16px;
  fontWeight: 400;
  marginTop: 4px;
  marginBottom: 8px;
`


export default ReportsDropDown
