import React, { useState } from "react";
import { Svg, G, Rect } from "react-native-svg";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as d3 from "d3";

const response = {
  data: [
    {
      category: "fitness",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: 78,
    },
    {
      category: "fashion",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: 199,
    },
    {
      category: "beauty",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: -500,
    },
    {
      category: "holiday",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: 90,
    },
  ],
};

const GRAPH_APSECT_RATIO = 9 / 16;

export default function StatsChart() {
  const [width, setWidth] = useState(0);
  const height = width * GRAPH_APSECT_RATIO;

  const min = Math.min(...response.data.map((item) => item.value));
  const max = Math.max(...response.data.map((item) => item.value));

  const xDomain = response.data.map((item) => item.category);
  const yScale = d3.scaleLinear().domain([min, max]).range([height, 0]);
  const xScale = d3.scalePoint().domain(xDomain).range([0, width]);

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={(ev) => {
        setWidth(ev.nativeEvent.layout.width);
      }}
    >
      <Svg width={width} height={height}>
        <G>
          {response.data.map((item) => (
            <Rect
              key={item.category}
              x={(xScale(item.category) ?? 0) - 5 / 2}
              y={yScale(item.value) * -1}
              rx={2.5}
              width={5}
              height={yScale(item.value)}
              fill={"#000000"}
            />
          ))}
        </G>
      </Svg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
});
