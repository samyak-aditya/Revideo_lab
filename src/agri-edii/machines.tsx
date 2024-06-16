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

// import {
//   shapers,
//   lathes,
//   grinder,
//   drilling,
// } from "../../images/agri-edii-images";

export default makeScene2D(function* (view) {
  const lathesCircleRef = createRef<Circle>();
  const shapersCircleRef = createRef<Circle>();
  const grindersCircleRef = createRef<Circle>();
  const drillingCircleRef = createRef<Circle>();

  const lathesImgRef = createRef<Img>();
  const shapersImgRef = createRef<Img>();
  const grindersImgRef = createRef<Img>();
  const drillingImgRef = createRef<Img>();

  // const videoRef = createRef<Video>();

  const totalingRectRef = createRef<Rect>();

  const lathesRectRef = createRef<Rect>();
  const shapersRectRef = createRef<Rect>();
  const grindersRectRef = createRef<Rect>();
  const drillingRectRef = createRef<Rect>();

  const lathesTxtRef = createRef<Txt>();
  const shapersTxtRef = createRef<Txt>();
  const grindersTxtRef = createRef<Txt>();
  const drillingTxtRef = createRef<Txt>();

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

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={43.1} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={lathesCircleRef}
        x={-450}
        y={-300}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={lathesImgRef}
          src={"images/agri-edii-images/lathes.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={lathesRectRef}
        fill={"blue"}
        radius={10}
        width={250}
        height={70}
        x={-450}
        y={-40}
        opacity={0}
      >
        <Txt
          ref={lathesTxtRef}
          text={"Lathes"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={shapersCircleRef}
        x={450}
        y={-300}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={shapersImgRef}
          src={"images/agri-edii-images/shapers.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={shapersRectRef}
        fill={"blue"}
        radius={10}
        width={260}
        height={70}
        x={450}
        y={-40}
        opacity={0}
      >
        <Txt
          ref={shapersTxtRef}
          text={"Shapers"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={grindersCircleRef}
        x={-450}
        y={230}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={grindersImgRef}
          src={"images/agri-edii-images/grinder.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={grindersRectRef}
        fill={"blue"}
        radius={10}
        width={260}
        height={70}
        x={-450}
        y={490}
        opacity={0}
      >
        <Txt
          ref={grindersTxtRef}
          text={"Grinders"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={drillingCircleRef}
        x={450}
        y={230}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={drillingImgRef}
          src={"images/agri-edii-images/drilling.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={drillingRectRef}
        fill={"blue"}
        radius={10}
        width={500}
        height={70}
        x={450}
        y={490}
        opacity={0}
      >
        <Txt
          ref={drillingTxtRef}
          text={"Drilling machines"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={totalingRectRef}
        opacity={0}
        width={540}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          text={"Rs. 5.32 lakhs"}
          fontSize={70}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* waitFor(1);

  yield* all(
    lathesCircleRef().endAngle(360, 1),
    lathesImgRef().opacity(1, 1.5),
    lathesRectRef().opacity(1, 1.5)
  );

  yield* all(
    // lathesCircleRef().x(-450, 0.5),
    // lathesCircleRef().y(-270, 0.5),
    shapersCircleRef().endAngle(360, 1),
    shapersImgRef().opacity(1, 1),
    shapersRectRef().opacity(1, 1)
  );

  yield* all(
    // shapersCircleRef().x(450, 0.5),
    // shapersCircleRef().y(-270, 0.5),
    grindersCircleRef().endAngle(360, 1),
    grindersImgRef().opacity(1, 1),
    grindersRectRef().opacity(1, 1)
  );

  yield* all(
    // grindersCircleRef().x(-450, 0.5),
    // grindersCircleRef().y(270, 0.5),
    drillingCircleRef().endAngle(360, 1),
    drillingImgRef().opacity(1, 1.5),
    drillingRectRef().opacity(1, 1.5)
  );

  yield* all(
    totalingRectRef().opacity(1, 1.3)
    // drillingCircleRef().x(450, 0.5),
    // drillingCircleRef().y(270, 0.5)
  );

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
