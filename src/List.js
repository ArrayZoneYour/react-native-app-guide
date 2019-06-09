import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import Button from './Button'

const List = () => {
  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <View style={{ width: 20, height: 40 }} />
    </ScrollView>
  )
}

const ListItem = () => {
  const title = '标题'
  const content =
    '我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n我今天吃了10个包子\n'
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <View style={styles.buttonGroup}>
        <Button
          style={styles.button}
          type="highlight"
          textStyle={{ color: 'pink' }}
          text="xxx人b(￣▽￣)d"
        />
        <Button
          style={styles.button}
          type="highlight"
          textStyle={{ color: 'pink' }}
          text="xxx人转发"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: 350,
    paddingTop: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    paddingLeft: 15,
  },
  content: { fontSize: 14, marginBottom: 10, paddingLeft: 15 },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30,
  },
  button: {
    width: 175,
    paddingBottom: 10,
    borderRadius: 0,
    backgroundColor: '#fff',
  },
})

export default List
