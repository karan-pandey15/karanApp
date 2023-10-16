import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../constants';

const GenderButton = ({ gender, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.genderButton,
        isSelected && styles.selectedGenderButton,
      ]}
      onPress={() => onPress(gender)}
    >
      <Text style={[styles.genderText, isSelected && styles.selectedGenderText]}>
        {gender}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genderButton: {
    width: 100,
    height: 40,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedGenderButton: {
    backgroundColor: COLORS.primary,
  },
  genderText: {
    ...FONTS.body4,
    color: COLORS.black,
  },
  selectedGenderText: {
    color: COLORS.white,
  },
});

export default GenderButton;
