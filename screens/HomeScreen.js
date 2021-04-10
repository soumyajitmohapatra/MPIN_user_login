import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import Greeting from '../components/Greeting';
import {Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import AttendanceCard from '../components/AttendanceCard';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;
const data = [
  {
    name: 'School Fee',
    price: 21500,
    color: '#3498db',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Hostel',
    price: 10192,
    color: '#2bcbba',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Tution',
    price: 8538,
    color: '#a55eea',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Transport',
    price: 4992,
    color: '#eb3b5a',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
let prices = data.map(function (e) {
  return e.price;
});
const subTotal = prices.reduce((a, c) => a + c);
const currencyFormat = num => {
  return '₹' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const chartConfigPie = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const attendance = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [60, 45, 88, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['Rainy Days'], // optional
};
const commitsData = [
  {date: '2017-01-02', count: 1},
  {date: '2017-01-03', count: 2},
  {date: '2017-01-04', count: 3},
  {date: '2017-01-05', count: 4},
  {date: '2017-01-06', count: 5},
  {date: '2017-01-30', count: 2},
  {date: '2017-01-31', count: 3},
  {date: '2017-03-01', count: 2},
  {date: '2017-04-02', count: 4},
  {date: '2017-03-05', count: 2},
  {date: '2017-02-30', count: 4},
];
const result = {
  labels: ['Math', 'English', 'Physics', 'Chemistry', 'History', 'Geography'],
  datasets: [
    {
      data: [80, 57, 55, 85, 31, 89],
    },
  ],
};

const chartConfigBar = {
  backgroundColor: '#292E49',
  backgroundGradientFrom: '#1D976C',
  backgroundGradientTo: '#536976',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topTab}>
        <View
          style={{
            borderBottomColor: '#3498db',
            borderBottomWidth: 4,
            borderBottomLeftRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            Dashboard
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Icon name="ios-notifications" color="#1B1B1B" size={26} />
          <Avatar.Image
            source={{
              uri: 'https://www.w3schools.com/howto/img_avatar.png',
            }}
            size={45}
            style={{marginLeft: 25}}
          />
        </View>
      </View>
      <View style={styles.greeting}>
        <Greeting />
      </View>
      <View style={styles.stackNav}>
        <TouchableOpacity>
          <View
            style={{
              marginRight: 20,
              backgroundColor: '#3498db',
              padding: 5,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 50,
            }}>
            <Text style={styles.tab}>Recent</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Overview
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40}}>
        <AttendanceCard title="Payment">
          <View
            style={{
              flexDirection: 'row',
            }}>
            <PieChart
              data={data}
              width={screenWidth / 1.5}
              height={200}
              chartConfig={chartConfigPie}
              accessor={'price'}
              backgroundColor={'transparent'}
              paddingLeft={'-20'}
              center={[1, 0]}
              absolute
              style={{
                borderColor: 'rgba(0,0,0,0.1)',
                borderRightWidth: 1,
                borderStyle: 'dotted',
                marginRight: 10,
              }}
            />
            <View style={{justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Subtotal</Text>
                <Text>{currencyFormat(subTotal)}</Text>
              </View>
              <Button title="Paynow" />
            </View>
          </View>
        </AttendanceCard>
      </View>
      <View style={{marginTop: 40}}>
        <AttendanceCard title="Attendance">
          <LineChart
            data={attendance}
            width={screenWidth / 1.2}
            height={220}
            chartConfig={{
              backgroundColor: '#2980b9',
              backgroundGradientFrom: '#2193b0',
              backgroundGradientTo: '#6dd5ed',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            bezier
            fromZero={true}
            yAxisSuffix="%"
          />
          {/* <ContributionGraph
            values={commitsData}
            endDate={new Date('2017-04-01')}
            numDays={305}
            width={500}
            height={220}
            chartConfig={chartConfigBar}
          /> */}
        </AttendanceCard>
      </View>
      <View style={{marginTop: 40, marginBottom: 30}}>
        <AttendanceCard title="Result History">
          <BarChart
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            data={result}
            width={screenWidth / 1.2}
            height={220}
            // yAxisSuffix="%"
            yAxisInterval={2}
            chartConfig={chartConfigBar}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            verticalLabelRotation={0}
            showValuesOnTopOfBars={true}
            fromZero={true}
          />
        </AttendanceCard>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',
    margin: 10,
    padding: 15,
  },
  topTab: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    marginBottom: 50,
  },
  stackNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
