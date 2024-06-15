import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ProfileSummryScreen = ({route}) => {
  const navigation = useNavigation();
  const {selectedInterests} = route.params;
  // console.warn(selectedInterests);

  return (
    <View>
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
          Profile Summary
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 19,
            padding: 6,
            marginLeft: 5,
            marginVertical: 10,
            color: 'black',
          }}>
          Awesome! Your profile is set up. You are all set for a personalized
          experience now
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 40,
        }}>
        <Image
          source={require('../assets/motherImg.jpg')}
          style={{width: 200, height: 190, borderRadius: 170}}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24, fontWeight: '500', color: 'black'}}>
          Komal Pandey
        </Text>
        <Text
          style={{
            fontSize: 21,
            fontWeight: '500',
            color: 'black',
            textAlign: 'center',
            marginVertical: 10,
          }}>
          Mom to 15 month old Sagar & 7 year old Swati
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 18, fontWeight: '500', color: 'black'}}>
          Your Interests
        </Text>
      </View>

      <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
        {selectedInterests.length > 0 ? (
          selectedInterests.map((interest, index) => (
            //   <Text >
            //     {interest}
            //   </Text>

            <Text
              style={{
                padding: 10,
                borderRadius: 25,
                borderColor: 'black',
                borderWidth: 1,
                margin: 6,
                paddingHorizontal: 16,
                backgroundColor: 'white',
                fontSize: 20,
              }}>
              {interest}
            </Text>
          ))
        ) : (
          <Text style={{fontSize: 20, color: 'black'}}>
            No interests selected
          </Text>
        )}
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#588675',
            padding: 12,
            marginHorizontal: 12,
            borderRadius: 26,
            alignItems: 'center',
            zIndex: 20,
            marginVertical: 30,
          }}>
          <Text
            style={{
              fontSize: 27,
              color: 'white',
              fontWeight: '400',
              color: 'white',
            }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileSummryScreen;
