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

import { all, createRef, createSignal } from "@revideo/core";

// import { blind, amputation, hospitalization, rip } from "../../images";

export default makeScene2D(function* (view) {
  const deathImgRef = createRef<Img>();
  const blindImgRef = createRef<Img>();
  const amputationImgRef = createRef<Img>();
  const hospitalizationImgRef = createRef<Img>();

  const deathCircleRef = createRef<Circle>();
  const blindCircleRef = createRef<Circle>();
  const amputationCircleRef = createRef<Circle>();
  const hospitalizationCircleRef = createRef<Circle>();
  const percent100CircleRef = createRef<Circle>();
  const percent50CircleRef = createRef<Circle>();
  const percent10CircleRef = createRef<Circle>();

  const deathTxtRef = createRef<Txt>();
  const permanentTotalDisablementTxtRef = createRef<Txt>();
  const hospitalizationTxtRef = createRef<Txt>();

  const videoRef = createRef<Video>();

  const deathRectRef = createRef<Rect>();
  const blindRectRef = createRef<Rect>();
  const amputationRectRef = createRef<Rect>();
  const hospitalizationRectRef = createRef<Rect>();

  const everything1LayoutRef = createRef<Layout>();
  const everything2LayoutRef = createRef<Layout>();

  const percent100Signal = createSignal(0);
  const percent50Signal = createSignal(0);
  const percent10Signal = createSignal(0);

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
    <Audio ref={audioRef} src={"/ackoscene3.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everything1LayoutRef}>
      <Circle
        ref={deathCircleRef}
        size={400}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-600}
        y={-250}
        zIndex={1}
      >
        <Img
          ref={deathImgRef}
          src={"/images/acko-life-insurance-sby-images/rip.png"}
          opacity={0}
          width={390}
          radius={500}
        />
      </Circle>

      <Rect
        ref={deathRectRef}
        opacity={0}
        x={-305}
        y={-250}
        width={200}
        height={80}
        fill={"#7C47E1"}
        radius={10}
      >
        <Txt
          ref={deathTxtRef}
          text={"Death"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={blindCircleRef}
        size={400}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-600}
        y={250}
        zIndex={1}
      >
        <Img
          ref={blindImgRef}
          src={"/images/acko-life-insurance-sby-images/blind.png"}
          opacity={0}
          width={390}
          radius={500}
        />
      </Circle>

      <Rect
        ref={blindRectRef}
        opacity={0}
        x={-20}
        y={250}
        width={770}
        height={80}
        radius={10}
        fill={"#7C47E1"}
      >
        <Txt
          ref={permanentTotalDisablementTxtRef}
          text={"Permanent total disablement"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={percent100CircleRef}
        fill={"#7C47E1"}
        size={150}
        x={450}
        y={-150}
        opacity={0}
      >
        <Txt
          fontSize={80}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `${percent100Signal().toFixed(0)}%`}
        />
      </Circle>
    </Layout>
  );

  yield* all(
    deathCircleRef().endAngle(360, 1),
    deathImgRef().opacity(1, 1.5),
    deathRectRef().opacity(1, 2)
  );

  yield* all(
    blindCircleRef().endAngle(360, 1),
    blindImgRef().opacity(1, 1.5),
    blindRectRef().opacity(1, 2)
  );

  yield* all(
    percent100CircleRef().opacity(1, 1.5),
    percent100CircleRef().size(500, 1.5),
    percent100Signal(0, 0).to(100, 2)
  );

  yield* everything1LayoutRef().opacity(0, 1.3);

  view.add(
    <Layout ref={everything2LayoutRef}>
      <Circle
        ref={amputationCircleRef}
        size={400}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-600}
        y={-250}
        zIndex={1}
      >
        <Img
          ref={amputationImgRef}
          src={"/images/acko-life-insurance-sby-images/Amputation.png"}
          opacity={0}
          width={390}
          radius={500}
        />
      </Circle>

      <Rect
        ref={amputationRectRef}
        opacity={0}
        x={15}
        y={-250}
        width={840}
        height={80}
        radius={10}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Permanent partial disablement"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={percent50CircleRef}
        fill={"#7C47E1"}
        size={150}
        x={600}
        y={-100}
        opacity={0}
        zIndex={1}
      >
        <Txt
          fontSize={80}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `${percent50Signal().toFixed(0)}%`}
        />
      </Circle>

      <Txt
        ref={hospitalizationTxtRef}
        fontWeight={500}
        letterSpacing={3}
        fontSize={80}
        x={-470}
        y={150}
        fill={"#7C47E1"}
      />

      <Circle
        ref={hospitalizationCircleRef}
        size={400}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-600}
        y={250}
      >
        <Img
          ref={hospitalizationImgRef}
          src={"/images/acko-life-insurance-sby-images/hospitalization.png"}
          opacity={0}
          width={390}
          radius={500}
        />
      </Circle>

      <Rect
        ref={hospitalizationRectRef}
        opacity={0}
        x={-195}
        y={250}
        width={420}
        height={80}
        radius={10}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Hospitalization"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={percent10CircleRef}
        fill={"#7C47E1"}
        size={150}
        x={180}
        y={350}
        opacity={0}
      >
        <Txt
          fontSize={80}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `${percent10Signal().toFixed(0)}%`}
        />
      </Circle>
    </Layout>
  );

  yield* all(
    amputationCircleRef().endAngle(360, 1),
    amputationImgRef().opacity(1, 1.5),
    amputationRectRef().opacity(1, 2)
  );

  yield* all(
    percent50CircleRef().opacity(1, 1.5),
    percent50CircleRef().size(300, 1.5),
    percent50Signal(0, 0).to(50, 2)
  );

  yield* all(
    hospitalizationCircleRef().endAngle(360, 1),
    hospitalizationImgRef().opacity(1, 1.5),
    hospitalizationRectRef().opacity(1, 2)
  );

  yield* all(
    percent10CircleRef().opacity(1, 1.5),
    percent10CircleRef().size(250, 1.5),
    percent10Signal(0, 0).to(10, 1.8)
  );

  yield* everything2LayoutRef().opacity(0, 0.8);
});
