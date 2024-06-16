import {
  Audio,
  Circle,
  Img,
  Layout,
  Line,
  Polygon,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

// import { other, raw, utility } from "../../images/agri-edii-images";

export default makeScene2D(function* (view) {
  const triangleTxtRef = createRef<Txt>();
  const variableCostTxtRef = createRef<Txt>();
  const triangleRef = createRef<Polygon>();

  const accidentCircleRef = createRef<Circle>();
  const totalDisablementCircleRef = createRef<Circle>();
  const hospitalizationCircleRef = createRef<Circle>();

  const accidentLineRef = createRef<Line>();
  const totalDisablementLineRef = createRef<Line>();
  const hospitalizationLineRef = createRef<Line>();

  const accidentVideoRef = createRef<Video>();

  const accidentImgRef = createRef<Img>();
  const totalDisablementImgRef = createRef<Img>();
  const hospitalizationImgRef = createRef<Img>();

  const everythingLayoutRef = createRef<Layout>();

  const numberSignal = createSignal(0);
  const variableCostSignal = createSignal("");

  view.fontFamily("outfit");

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={83.46} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={triangleRef}
        size={400}
        opacity={0.5}
        stroke={"blue"}
        fill={"blue"}
        lineWidth={10}
        y={90}
      >
        <Txt
          opacity={0}
          y={20}
          ref={triangleTxtRef}
          fontSize={75}
          letterSpacing={3}
          textAlign={"center"}
          fill={"white"}
          fontWeight={500}
          text={() => `₹${numberSignal().toFixed(2)}\nLakhs`}
        />
      </Circle>

      <Txt
        ref={variableCostTxtRef}
        fontSize={65}
        textAlign={"center"}
        fill={"blue"}
        fontWeight={500}
        text={() => variableCostSignal()}
        y={400}
      />

      <Circle
        ref={accidentCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        y={-350}
        zIndex={1}
      >
        <Img
          ref={accidentImgRef}
          src={"images/agri-edii-images/raw.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={totalDisablementCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={550}
        y={-100}
      >
        <Img
          ref={totalDisablementImgRef}
          src={"images/agri-edii-images/other.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={hospitalizationCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={-550}
        y={-100}
      >
        <Img
          ref={hospitalizationImgRef}
          opacity={0}
          src={"images/agri-edii-images/utility.png"}
          width={290}
          radius={500}
        />
      </Circle>

      <Line
        ref={accidentLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [0, -100],
          [0, -100],
        ]}
      />

      <Line
        ref={totalDisablementLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [182, 29],
          [182, 29],
        ]}
      />

      <Line
        ref={hospitalizationLineRef}
        lineWidth={10}
        stroke={"blue"}
        points={[
          [-190, 29],
          [-190, 29],
        ]}
      />
    </Layout>
  );

  const variableCostText = "Variable\ncost";
  for (let i = 0; i <= variableCostText.length; i++) {
    yield* waitFor(1 / variableCostText.length);
    variableCostSignal(variableCostText.slice(0, i));
  }

  yield* triangleRef().opacity(1, 0.5);

  yield* all(
    accidentLineRef().points(
      [
        [0, -100],
        [0, -200],
      ],
      0.4
    ),
    accidentCircleRef().endAngle(360, 0.5)
  );

  yield* all(accidentImgRef().opacity(1, 0.5));

  yield* all(
    totalDisablementLineRef().points(
      [
        [182, 29],
        [405, -60],
      ],
      0.4
    ),
    totalDisablementCircleRef().endAngle(360, 0.5),
    totalDisablementImgRef().opacity(1, 0.5)
  );

  yield* all(
    hospitalizationLineRef().points(
      [
        [-190, 29],
        [-405, -60],
      ],
      0.5
    ),
    hospitalizationCircleRef().endAngle(360, 0.5),
    hospitalizationImgRef().opacity(1, 0.5)
  );

  yield* triangleTxtRef().opacity(1, 0.5);

  yield* tween(2, (value) => {
    numberSignal(value * 217.68);
  });

  yield* waitFor(1.5);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
