import {
  Audio,
  Circle,
  Img,
  Layout,
  Rect,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, waitFor } from "@revideo/core";

// import { death, disablementLeg, documents } from "../../images";

export default makeScene2D(function* (view) {
  const deathImgRef = createRef<Img>();
  const disablementLegImgRef = createRef<Img>();
  const documentsImgRef = createRef<Img>();

  const smoothlyTxtRef = createRef<Txt>();
  const quicklyTxtRef = createRef<Txt>();

  const deathCircleRef = createRef<Circle>();
  const disablementLegCircleRef = createRef<Circle>();
  const documentsCircleRef = createRef<Circle>();

  const certificateRectRef = createRef<Rect>();

  const videoRef = createRef<Video>();

  const everythingLayoutRef = createRef<Layout>();

  const audioRef = createRef<Audio>();

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
    <Audio ref={audioRef} src={"/ackoscene6.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={deathCircleRef}
        x={-400}
        y={-150}
        size={0}
        fill={"#7C47E1"}
        stroke={"#7C47E1"}
      >
        <Img
          ref={deathImgRef}
          src={"/images/acko-life-insurance-sby-images/death.png"}
          opacity={0}
          radius={1000}
          size={500}
        />
      </Circle>

      <Circle
        ref={disablementLegCircleRef}
        x={400}
        y={-150}
        size={0}
        fill={"#7C47E1"}
        stroke={"#7C47E1"}
      >
        <Img
          ref={disablementLegImgRef}
          src={"/images/acko-life-insurance-sby-images/disablement-leg.png"}
          opacity={0}
          radius={1000}
          size={500}
        />
      </Circle>

      <Rect
        ref={certificateRectRef}
        opacity={0}
        x={-400}
        y={280}
        width={660}
        height={120}
        radius={10}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Death certificate"}
          fontSize={70}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={documentsCircleRef}
        x={200}
        y={320}
        endAngle={0}
        size={350}
        lineWidth={10}
        stroke={"#7C47E1"}
      >
        <Img
          ref={documentsImgRef}
          src={"/images/acko-life-insurance-sby-images/documents.png"}
          size={330}
          opacity={0}
          radius={1000}
        />
      </Circle>

      <Txt
        ref={smoothlyTxtRef}
        fontSize={70}
        fontWeight={600}
        letterSpacing={3}
        x={650}
        y={250}
        fill={"#7C47E1"}
      />

      <Txt
        ref={quicklyTxtRef}
        fontSize={70}
        fontWeight={600}
        letterSpacing={3}
        x={650}
        y={350}
        fill={"#7C47E1"}
      />
    </Layout>
  );

  yield* deathCircleRef().size(500, 0.5);

  yield* all(
    deathCircleRef().lineWidth(10, 0.5),
    deathCircleRef().fill("white", 0.5),
    deathImgRef().opacity(1, 1)
  );

  yield* disablementLegCircleRef().size(500, 0.5);

  yield* all(
    disablementLegCircleRef().lineWidth(10, 0.5),
    disablementLegCircleRef().fill("white", 0.5),
    disablementLegImgRef().opacity(1, 1)
  );

  yield* waitFor(0.5);
  yield* certificateRectRef().opacity(1, 1.5);

  yield* waitFor(1);

  yield* all(documentsImgRef().opacity(1, 1));
  yield* documentsCircleRef().endAngle(360, 1);

  yield* waitFor(1);

  yield* smoothlyTxtRef().text("Smoothly", 0.7);
  yield* quicklyTxtRef().text("Quickly", 0.7);

  yield* everythingLayoutRef().opacity(0, 0.6);
});
