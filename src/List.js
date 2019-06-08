import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Button from './Button'

const List = () => {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ScrollView>
  )
}

const ListItem = () => {
  return (
    <View
      style={{
        width: 350,
        // height: 80,
        // alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'center',
      }}
    >
      <Text style={{ fontSize: 18, color: '#333', marginBottom: 5 }}>标题</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>
        我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}
        我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}
        我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}我今天吃了10个包子{'\n'}
        我今天吃了10个包子{'\n'}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          style={{
            width: 150,
            height: 30,
            paddingBottom: 10,
            backgroundColor: '#fff',
          }}
          type="highlight"
          textStyle={{ color: 'pink' }}
          text="xxx人b(￣▽￣)d"
        />
        <Button
          style={{
            width: 150,
            height: 30,
            paddingBottom: 10,
            backgroundColor: '#fff',
          }}
          type="highlight"
          textStyle={{ color: 'pink' }}
          text="xxx人转发"
        />
      </View>
    </View>
  )
}

export default List
