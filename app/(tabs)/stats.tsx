import React, { useState } from "react";
import { Svg, G, Rect, Text } from "react-native-svg";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/themed-view";
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
      value: 159,
    },
    {
      category: "beauty",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: 200,
    },
    {
      category: "holiday",
      date: "Sun Nov 23 2025 20:00:58 GMT+0000 (Greenwich Mean Time)",
      value: 90,
    },
  ],
};

// interface Payment {
//   category: string;
//   date: string;
//   value: number;
// }

const GRAPH_APSECT_RATIO = 9 / 16;

export default function StatsChart() {
  const [width, setWidth] = useState(0);
  const height = width * GRAPH_APSECT_RATIO;

  const yDomain = response.data.map((item) => item.category);
  const yScale = d3.scaleBand().domain(yDomain).range([0, height]);
  const xScale = d3
    .scaleLinear()
    .domain(response.data.map((d) => d.value))
    .range([30, width / 2]);

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
              y={yScale(item.category)}
              x={30}
              rx={2.5}
              width={xScale(item.value)}
              height={35}
              fill={"#d5d5d5"}
              stroke={"#000000"}
            />
          ))}

          {response.data.map((item) => (
            <ThemedView key={"label" + item.category} style={styles.text}>
              <Text
                fontSize="14"
                x={3}
                y={(yScale(item.category) ?? 0) + 16}
                textAnchor="start"
              >
                {item.category}
              </Text>
            </ThemedView>
          ))}
        </G>
      </Svg>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 50,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
  text: {
    // transform: [{ rotateY: "45deg" }],
  },
});
