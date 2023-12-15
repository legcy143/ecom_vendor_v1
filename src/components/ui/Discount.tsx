import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Discount() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstblock}>
        <View>
          <Text
            style={{
              fontSize: 23,
              fontWeight: '700',
              color: '#9854CB',
              textTransform: 'capitalize',
            }}>
            UP TO 60% OFF
          </Text>
          <Text style={{color: 'black'}}>
            Get winter applicances at best prices
          </Text>
        </View>
        <Image
          source={{
            uri: '',
          }}
          style={styles.firstImage}
        />
      </View>
      {/* 60 percient off  */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderWidth: 0.7,
          borderColor: 'transparent',
          padding: 3,
          backgroundColor: '#E89DFF',
          height: 45,
          // justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            color: 'black',
            letterSpacing: 1.1,
            marginStart: 11,
          }}>
          See all products
        </Text>
        <AntDesign Icon name="arrowright" size={23} color="black" />
        {/* sell all products */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#DCCEFA',
    width: '100%',
    height: 400,
  },
  firstblock: {
    // flex: 1,
    marginTop: 9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  firstImage: {
    // backgroundColor: 'red',
    width: '27%',
    height: 61,
    marginTop: 4,
    marginLeft: 14,
    marginBottom: 9,
  },
  middleContainer: {
    height: 280,
    width: 170,
    // backgroundColor: 'yellow',
    marginLeft: 9,
  },
  middleImage: {
    marginLeft: 6,
    height: 128,
    borderRadius: 14,
    width: '94%',
    backgroundColor: 'white',
  },
  buttonadd: {
    // backgroundColor:'yellow',
    width: '53%',
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: 'green',
    borderWidth: 1,
    color: 'green',
    height: 30,
    backgroundColor: '#D5D8DD',
  },
});

const ProductCard = () => {
  return (
    <View style={styles.middleContainer}>
      {/* middle part */}
      <View>
        <Image
          source={{
            uri: 'https://cdn.thewirecutter.com/wp-content/media/2023/08/watershoes-2048px-1243.jpg?auto=webp&quality=75&width=1024',
          }}
          style={styles.middleImage}
        />
      </View>
      <Text
        style={{
          color: 'black',
          height: 18,
          width: '28%',
          marginLeft: 9,
          marginTop: 8,
          fontSize: 11,
          backgroundColor: '#D5D8DD',
          borderRadius: 2,
          padding: 2,
        }}>
        8 MINS
      </Text>
      <Text style={{color: 'black', marginHorizontal: 8, letterSpacing: 1.6}}>
        Bajaj Waterproof {'\n'}immersion Rod(1..
      </Text>
      <Text style={{marginHorizontal: 8, paddingTop: 4}}>1 Unit</Text>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 4,
          marginTop: 17,
        }}>
        <Text style={{color: 'black'}}>$649</Text>
        <TouchableOpacity style={styles.buttonadd}>
          <Text
            style={{
              color: 'green',
              fontWeight: '400',
              textAlign: 'center',
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
