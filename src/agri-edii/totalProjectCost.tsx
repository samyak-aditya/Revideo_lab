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

import { all, createRef, createSignal, textLerp, waitFor } from "@revideo/core";
// import { rupee } from "../../images";

export default makeScene2D(function* (view) {
  const rupeeImgRef = createRef<Img>();

  const moneyRectRef = createRef<Rect>();

  const moneyTxtRef = createRef<Txt>();
  const totalProjectCostTxtRef = createRef<Txt>();

  const rectRef1 = createRef<Rect>();
  const rectRef2 = createRef<Rect>();
  const rectRef3 = createRef<Rect>();
  const rectRef4 = createRef<Rect>();

  const txtRef1 = createRef<Txt>();
  const txtRef2 = createRef<Txt>();
  const txtRef3 = createRef<Txt>();
  const txtRef4 = createRef<Txt>();

  // const videoRef = createRef<Video>();

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
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={17.3} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={totalProjectCostTxtRef}
        fontSize={70}
        y={350}
        fontWeight={500}
        letterSpacing={3}
        fill={"blue"}
      />

      <Img
        ref={rupeeImgRef}
        scale={0.2}
        opacity={0}
        zIndex={1}
        src={"/images/agri-edii-images/rupee.png"}
        width={500}
        x={0}
      />

      <Rect
        ref={moneyRectRef}
        opacity={0}
        height={140}
        radius={10}
        // x={190}
        x={0}
        width={550}
        fill={"orange"}
      >
        <Txt
          ref={moneyTxtRef}
          text={"53.88 lakhs"}
          fontSize={80}
          fontWeight={500}
          letterSpacing={4}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef1}
        opacity={0}
        y={-300}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef1}
          text={"Pre-operative expenses"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef2}
        opacity={0}
        y={-100}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef2}
          text={"Machinery"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef3}
        opacity={0}
        y={100}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef3}
          text={"Equipment and furniture"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef4}
        opacity={0}
        x={1360}
        y={300}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef4}
          text={"Working capital"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* totalProjectCostTxtRef().text("Total project cost", 1.5);
  yield* all(rupeeImgRef().scale(1, 1), rupeeImgRef().opacity(1, 1));

  yield* all(
    rupeeImgRef().x(-245, 1),
    moneyRectRef().opacity(1, 1),
    moneyRectRef().x(245, 1)
  );

  yield* all(
    rupeeImgRef().x(-650, 1),
    rupeeImgRef().width(350, 1),
    moneyTxtRef().fontSize(60, 1),
    moneyRectRef().height(100, 1),
    moneyRectRef().width(390, 1),
    moneyRectRef().x(-290, 1),
    totalProjectCostTxtRef().fontSize(60, 1),
    totalProjectCostTxtRef().y(250, 1),
    totalProjectCostTxtRef().x(-450, 1)
  );

  yield* all(rectRef1().opacity(1, 1), rectRef1().x(400, 1));
  yield* all(rectRef2().opacity(1, 1.5), rectRef2().x(400, 1.5));
  yield* all(rectRef3().opacity(1, 1.5), rectRef3().x(400, 1.5));
  yield* all(rectRef4().opacity(1, 1.5), rectRef4().x(400, 1.5));

  yield* everythingLayoutRef().scale(1.05, 2.7);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
