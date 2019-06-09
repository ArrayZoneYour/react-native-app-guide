import React, { useEffect } from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { useStore } from './models/Post'

import icons from './assets/images'

const List = () => {
  const [{ posts }, actions] = useStore()
  useEffect(() => {
    actions.get()
  }, [])
  return (
    <ScrollView style={{ paddingVertical: 20 }}>
      {posts.map(post => (
        <ListItem {...post} key={post.id} />
      ))}
      <View style={{ width: 20, height: 40 }} />
    </ScrollView>
  )
}

const ListItem = props => {
  const { title, content } = props
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <View style={styles.buttonGroup}>
        <Button
          style={styles.button}
          type="highlight"
          textStyle={{ color: 'pink' }}
          text="7"
          icon={icons.ThumbsUp}
        />
        <Button
          style={styles.button}
          type="highlight"
          textStyle={{ color: 'pink' }}
          iconStyle={{ marginTop: 3 }}
          text="1"
          icon={icons.ThumbsDown}
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
