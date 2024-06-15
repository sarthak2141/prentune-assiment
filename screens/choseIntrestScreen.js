import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const interestsData = [
  {
    category: 'Health',
    interests: [
      'Food',
      'Genetics',
      'Allergies',
      'Infections',
      'Fever',
      'foodallergies',

      'Asthma',
      'Eczema',
    ],
  },
  {
    category: 'Psychology',
    interests: ['Self-Esteem', 'Mental Health', 'Understanding', 'Show more+'],
  },
  {
    category: 'Hygiene',
    interests: ['Cleanliness', 'Organization', 'Allergies', 'show more+'],
  },
];

const ChoseIntrestScreen = () => {
  const navigation = useNavigation();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = interest => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 4,
            paddingVertical: 4,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image
              source={require('../assets/back.png')}
              style={{width: 39, height: 37}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 24, color: 'black', fontWeight: '600'}}>
            {' '}
            Choose interests
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              padding: 6,
              marginLeft: 5,
              marginVertical: 10,
            }}>
            Select 3 or more topics of interest to personalize your experience .
          </Text>
        </View>
        <View>
          {/* //Health section */}
          {/* <View>
        <Text style={{fontSize:26,fontWeight:'600',color:'black',marginVertical:4,}}>Health</Text>
      </View>
      {/* //interest sections */}
          {/* <View> */}

          {interestsData.map((items, index) => (
            <View key={index}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: '600',
                  color: 'black',
                  marginVertical: 4,
                }}>
                {items.category}
              </Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {items.interests.map((interest, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      borderColor: 'black',
                      borderWidth: 1,
                      margin: 6,
                      paddingHorizontal: 15,
                      backgroundColor: selectedInterests.includes(
                        items.interests.at(index),
                      )
                        ? 'pink'
                        : 'white',
                    }}
                    onPress={() => toggleInterest(items.interests.at(index))}>
                    <Text style={{fontSize: 20}}>{interest}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 37,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'black',
              marginRight: 6,
            }}>
            Don't find your Interest?
          </Text>
          <TouchableOpacity>
            <Text style={{textDecorationLine: 'underline'}}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#588675',
              padding: 10,
              marginHorizontal: 12,
              borderRadius: 24,
              alignItems: 'center',
              zIndex: 20,
            }}
            onPress={() => navigation.navigate('PROFILE', {selectedInterests})}>
            <Text style={{fontSize: 27, color: 'white', fontWeight: '400'}}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChoseIntrestScreen;
