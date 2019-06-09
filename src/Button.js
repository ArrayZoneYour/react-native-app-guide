import React from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from 'react-native'

const Button = props => {
  const {
    onPress = () => {},
    text,
    style,
    textStyle,
    iconStyle,
    type = 'opacity',
    icon,
  } = props
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
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        {icon && (
          <Image
            source={icon}
            style={{
              width: 18,
              height: 18,
              tintColor: 'pink',
              paddingRight: 5,
              ...iconStyle,
            }}
          />
        )}
        <Text style={{ fontSize: 18, fontWeight: '400', ...textStyle }}>
          {text}
        </Text>
      </View>
    </Container>
  )
}

export default Button
