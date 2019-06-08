import React from 'react'
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native'

const Button = props => {
  const { onPress = () => {}, text, style, textStyle, type = 'opacity' } = props
  // const onPress = props.onPress
  let Container = TouchableOpacity
  if (type === 'highlight') {
    Container = TouchableHighlight
  }
  return (
    <Container onPress={onPress} activeOpacity={0.8} underlayColor="#00000066">
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
        <Text style={{ fontSize: 18, fontWeight: '400', ...textStyle }}>
          {text}
        </Text>
      </View>
    </Container>
  )
}

export default Button
