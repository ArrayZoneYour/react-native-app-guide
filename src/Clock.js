import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Button = props => {
  const { onPress, text, style } = props
  // const onPress = props.onPress
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View
        style={{
          backgroundColor: 'rgb(97, 218, 251)',
          width: 350,
          height: 50,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '400' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Clock = () => {
  const [time, setTime] = useState(0)
  const [intervalId, setIntervalId] = useState(-1)

  // update clock every 500ms
  useEffect(() => {
    start()
    return () => clearInterval(intervalId)
  }, [])

  const start = () => {
    const intervalId = setInterval(() => {
      setTime(time => time + 0.5)
    }, 500)
    setIntervalId(intervalId)
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 32, marginBottom: 10 }}>{time}</Text>

      <Button
        text="Stop"
        onPress={() => clearInterval(intervalId)}
        style={{ marginBottom: 10 }}
      />
      <Button text={'Restart'} onPress={start} />
    </View>
  )
}

export default Clock
