import React, { useState } from "react";
import { Svg, G, Rect, Line, Path } from "react-native-svg";
import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
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

interface payment {
  category: string;
  date: string;
  value: number;
}

const GRAPH_APSECT_RATIO = 9 / 16;

export default function StatsChart() {
  const [width, setWidth] = useState(0);
  const height = width * GRAPH_APSECT_RATIO;

  const min = Math.min(...response.data.map((item) => item.value));
  const max = Math.max(...response.data.map((item) => item.value));

  const yScale = d3.scaleLinear().domain([min, max]).range([height, 0]);
  const xScale = d3
    .scaleLinear()
    .domain([0, response.data.length - 1])
    .range([0, width]);

  // const lineFn = d3
  //   .line()
  //   .x((d, ix) => xScale(ix))
  //   .y((d, ix) => yScale(d));

  // const svgLine = response.data.map((item) => lineFn(item.value));

  return (
    <SafeAreaView
      style={styles.container}
      onLayout={(ev) => {
        setWidth(ev.nativeEvent.layout.width);
      }}
    >
      <Svg width={width} height={height}>
        <G>
          <Path
            d={svgLine || "undefined"}
            stroke={"#000000"}
            fill={"none"}
            strokeWidth={4}
          />
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
