import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Checkbox, Divider, Title } from 'react-native-paper';

const Filter = ({index}) => {
  const sheetRef = useRef(null);

  const [list, setList ]= useState([
    {
      name: 'Additional Purchase',
      id: 1,
      checked: false,
    },
    {
      name: 'Fresh Purchase',
      id: 2,
      checked: false,
    },
    {
      name: 'Redemption',
      id: 3,
      checked: false,
    },
    {
      name: 'SIP',
      id: 4,
      checked: false,
    },
    {
      name: 'STP',
      id: 5,
      checked: false,
    },
    {
      name: 'SWP',
      id: 6,
      checked: false,
    }
  ]);
  const [status, setStatus] = useState([
    {
      name: 'Initiated',
      id: 1,
      checked: false,
    },
    {
      name: 'In Process',
      id: 2,
      checked: false,
    },
    {
      name: 'Executed',
      id: 3,
      checked: false,
    },
    {
      name: 'Failure',
      id: 4,
      checked: false,
    },
    {
      name: 'Cancelled',
      id: 5,
      checked: false,
    },
    {
      name: 'Rejected',
      id: 6,
      checked: false,
    },
    {
      name: 'Processing With AMC',
      id: 7,
      checked: false,
    },
  ]);


  const snapPoints = useMemo(() => ['5%', '100%'], []);

  const handleFilter = useCallback(()=> {
    sheetRef.current?.snapToIndex(1)
  })
  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);

  return (
      <BottomSheet
        ref={sheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 10
          }}
        >
          Filters
        </Text>
        <Text
          style={{
            marginLeft: 16,
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 5,
          }}>
          Type
        </Text>
        <Divider />
        <BottomSheetFlatList
          data={list}
          keyExtractor={id => id.id}
          renderItem={({item, index}) => (
            <View>
              <Checkbox.Item
                label={item.name}
                value={item.id}
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  const tempArr = [...list];
                  tempArr.splice(index, 1, {...item, checked: !item.checked});
                  console.log(tempArr);
                  setList(tempArr);
                }}
              />
              <Divider />
            </View>
          )}
          contentContainerStyle={styles.contentContainer}
        />
        <Text
          style={{
            marginLeft: 16,
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 5,
          }}>
          Status
        </Text>
        <BottomSheetFlatList
          data={status}
          keyExtractor={id => id.id}
          renderItem={({item, index}) => (
            <View>
              <Checkbox.Item
                label={item.name}
                value={item.id}
                status={item.checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  const tempArr = [...list];
                  tempArr.splice(index, 1, {...item, checked: !item.checked});
                  console.log(tempArr);
                  setStatus(tempArr);
                }}
              />
              <Divider />
            </View>
          )}
          contentContainerStyle={styles.contentContainer}
        />
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      contentContainer: {
        backgroundColor: "white",
      },
      itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: "#eee",
      },
});

export default Filter;