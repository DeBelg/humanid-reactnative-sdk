import React from 'react';
import {TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import {images} from '../../../themes';
import styles from '../styles';
import {SearchCountryInputProps} from '../Login.interface';

function SearchCountryInput(props: SearchCountryInputProps): JSX.Element {
  const {onChangeText, onCancel} = props;

  return (
    <View style={styles.containertxInputSearchCountry}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <Image
          source={images.iconClose}
          style={styles.iconClose}
        />
      </TouchableWithoutFeedback>
      <TextInput
        placeholder="Search Country"
        style={styles.txInputCountrySearch}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default SearchCountryInput;
