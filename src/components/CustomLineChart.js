import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const CustomLineChart = () => {
  const random = (label, dataSet) => {
    return Math.random() * 200 + 80;
  };

  return (
    <LineChart
      data={{
        labels: ['Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            data: [
              random(),
              random(),
              random(),
              random(),
              random(),
              random(),
              random(),
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width - 25} // from react-native
      height={220}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={config}
      bezier
      style={styles.chart}
    />
  );
};

const config = {
  backgroundColor: '#f2f2f2',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(82, 218, 204, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(82, 124, 132, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#57DACC',
  },
};

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default CustomLineChart;
