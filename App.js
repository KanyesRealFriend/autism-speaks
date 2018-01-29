import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';
import SortableGrid from 'react-native-sortable-grid'


export default class App extends React.Component {
  render() {
    // Tts.speak('Hello, world!');

    return (
      <SortableGrid
        blockTransitionDuration={400}
        activeBlockCenteringDuration={200}
        itemsPerRow={4}
        dragActivationTreshold={200}
        onDragRelease={(itemOrder) => console.log("Drag was released, the blocks are in the following order: ", itemOrder)}
        onDragStart={() => console.log("Some block is being dragged now!")} >
        {
          ['a', 'a', 'a', 'a','e','a', 'g', 'h', 'f', 'd','a', 'b', 'c', 'i', 'l','k', 'b', 'c', 'd', 'e'].map((letter, index) =>

            <View key={index} onTap={() => console.log("Item number:", index, "was tapped!")}>
              <Text>{letter}</Text>
            </View>
          )
        }
      </SortableGrid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
