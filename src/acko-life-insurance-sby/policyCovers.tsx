import {
  Audio,
  Circle,
  Img,
  Layout,
  Line,
  Path,
  Polygon,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, waitFor } from "@revideo/core";

// import accidentVideo from "../../videos/acko-life-insurance-sby-videos/accident.mp4";
// import {
//   amputation,
//   blind,
//   fracture,
//   hospitalization,
//   rip,
//   totalDisablementSVG,
// } from "../../images";

export default makeScene2D(function* (view) {
  const ackoImgRef = createRef<Img>();
  const avatarImgRef = createRef<Img>();

  const polygonTxtRef = createRef<Txt>();

  const polygonRef = createRef<Polygon>();

  const accidentCircleRef = createRef<Circle>();
  const totalDisablementCircleRef = createRef<Circle>();
  const partialDisablementCircleRef = createRef<Circle>();
  const tempTotalDisablementCircleRef = createRef<Circle>();
  const hospitalizationCircleRef = createRef<Circle>();

  const accidentLineRef = createRef<Line>();
  const totalDisablementLineRef = createRef<Line>();
  const partialDisablementLineRef = createRef<Line>();
  const tempTotalDisablementLineRef = createRef<Line>();
  const hospitalizationLineRef = createRef<Line>();

  const accidentVideoRef = createRef<Video>();

  const accidentImgRef = createRef<Img>();
  const totalDisablementImgRef = createRef<Img>();
  const partialDisablementImgRef = createRef<Img>();
  const tempTotalDisablementImgRef = createRef<Img>();
  const hospitalizationImgRef = createRef<Img>();

  const videoRef = createRef<Video>();
  const audioRef = createRef<Audio>();

  const everythingLayoutRef = createRef<Layout>();

  view.fontFamily("outfit");

  // view.add(
  //   <Video
  //     opacity={0.8}
  //     ref={videoRef}
  //     loop
  //     src={bg_video2}
  //     size={["100%", "100%"]}
  //   />
  // );

  // videoRef().play();

  view.add(
    <Audio ref={audioRef} src={"/ackoscene2.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Polygon
        ref={polygonRef}
        sides={5}
        size={400}
        opacity={0.5}
        stroke={"#7C47E1"}
        fill={"#7C47E1"}
        lineWidth={10}
        y={90}
      >
        <Txt
          ref={polygonTxtRef}
          fontSize={65}
          textAlign={"right"}
          fill={"white"}
          fontWeight={500}
          text={"Policy\n covers"}
        />
      </Polygon>

      <Circle
        ref={accidentCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        y={-350}
        zIndex={1}
      >
        <Img
          ref={accidentImgRef}
          src={"/images/acko-life-insurance-sby-images/rip.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Video
        ref={accidentVideoRef}
        png={false}
        maxWidth={330}
        radius={1000}
        y={-385}
        src={"/accident.mp4"}
        width={500}
      />

      <Circle
        ref={totalDisablementCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={550}
        y={-100}
      >
        <Img
          ref={totalDisablementImgRef}
          src={"/images/acko-life-insurance-sby-images/blind.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={partialDisablementCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={400}
        y={320}
      >
        <Img
          ref={partialDisablementImgRef}
          src={"/images/acko-life-insurance-sby-images/Amputation.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={tempTotalDisablementCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-400}
        y={320}
      >
        <Img
          ref={tempTotalDisablementImgRef}
          src={"/images/acko-life-insurance-sby-images/fracture.png"}
          opacity={0}
          width={295}
          radius={500}
        />
      </Circle>

      <Circle
        ref={hospitalizationCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-550}
        y={-100}
      >
        <Img
          ref={hospitalizationImgRef}
          opacity={0}
          src={"/images/acko-life-insurance-sby-images/hospitalization.png"}
          width={290}
          radius={500}
        />
      </Circle>

      <Line
        ref={accidentLineRef}
        lineWidth={10}
        stroke={"#7C47E1"}
        points={[
          [0, -100],
          [0, -100],
        ]}
      />

      <Line
        ref={totalDisablementLineRef}
        lineWidth={10}
        stroke={"#7C47E1"}
        points={[
          [182, 29],
          [182, 29],
        ]}
      />

      <Line
        ref={partialDisablementLineRef}
        lineWidth={10}
        stroke={"#7C47E1"}
        points={[
          [115, 250],
          [115, 250],
        ]}
      />

      <Line
        ref={tempTotalDisablementLineRef}
        lineWidth={10}
        stroke={"#7C47E1"}
        points={[
          [-115, 250],
          [-115, 250],
        ]}
      />

      <Line
        ref={hospitalizationLineRef}
        lineWidth={10}
        stroke={"#7C47E1"}
        points={[
          [-190, 29],
          [-190, 29],
        ]}
      />
    </Layout>
  );

  yield* polygonRef().opacity(1, 0.5);

  yield* all(
    accidentLineRef().points(
      [
        [0, -100],
        [0, -200],
      ],
      0.4
    ),
    accidentCircleRef().endAngle(360, 1)
  );

  accidentVideoRef().play();
  yield* waitFor(0.5);

  yield* all(accidentVideoRef().opacity(0, 1), accidentImgRef().opacity(1, 1));

  yield* all(
    totalDisablementLineRef().points(
      [
        [182, 29],
        [405, -60],
      ],
      0.4
    ),
    totalDisablementCircleRef().endAngle(360, 0.8),
    totalDisablementImgRef().opacity(1, 0.8)
  );

  yield* waitFor(0.8);

  yield* all(
    partialDisablementLineRef().points(
      [
        [115, 250],
        [248, 300],
      ],
      0.4
    ),
    partialDisablementCircleRef().endAngle(360, 1),
    partialDisablementImgRef().opacity(1, 1)
  );

  yield* waitFor(1);

  yield* all(
    tempTotalDisablementLineRef().points(
      [
        [-115, 250],
        [-248, 300],
      ],
      0.4
    ),
    tempTotalDisablementCircleRef().endAngle(360, 1),
    tempTotalDisablementImgRef().opacity(1, 1)
  );

  yield* waitFor(1);

  yield* all(
    hospitalizationLineRef().points(
      [
        [-190, 29],
        [-405, -60],
      ],
      0.4
    ),
    hospitalizationCircleRef().endAngle(360, 1),
    hospitalizationImgRef().opacity(1, 1)
  );

  yield* waitFor(1.1);

  yield* everythingLayoutRef().opacity(0, 0.8);
});
