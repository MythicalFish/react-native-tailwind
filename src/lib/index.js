import React from 'react'
import * as RN from 'react-native'
import * as tw from './tailwind'

const buildComponent = Component => ({ className, ...rest }) => {
  const props = { ...rest }
  if (className) {
    props.style = className.split(' ').map(c => tw[c])
  }
  return <Component {...props} />
}

export const View = buildComponent(RN.View)
export const ScrollView = buildComponent(RN.ScrollView)
export const Text = buildComponent(RN.Text)
export const Image = buildComponent(RN.Image)
export const TextInput = buildComponent(RN.TextInput)
export const TouchableOpacity = buildComponent(RN.TouchableOpacity)

export default { View, ScrollView, Text, Image, TextInput, TouchableOpacity }
