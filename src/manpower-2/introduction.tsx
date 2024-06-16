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

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

// import {
//   backgroundImage,
//   skilled,
//   semiSkilled,
//   unskilledLabor,
//   accountant,
//   productionManager,
// } from "../../images/mapower-2-images";

export default makeScene2D(function* (view) {
  const titleTxtRef = createRef<Txt>();

  const typesOfEmployeesTxtRef = createRef<Txt>();

  const typesOfEmployeesRectRef = createRef<Rect>();
  const rectRef = createRef<Rect>();
  const rectRef1 = createRef<Rect>();
  const rectRef2 = createRef<Rect>();
  const rectRef3 = createRef<Rect>();
  const rectRef4 = createRef<Rect>();
  const rectRef5 = createRef<Rect>();

  const txtRef1 = createRef<Txt>();
  const txtRef2 = createRef<Txt>();
  const txtRef3 = createRef<Txt>();
  const txtRef4 = createRef<Txt>();
  const txtRef5 = createRef<Txt>();

  const productionManagerCircleRef = createRef<Circle>();
  const skilledCircleRef = createRef<Circle>();
  const semiSkilledCircleRef = createRef<Circle>();
  const unskilledCircleRef = createRef<Circle>();
  const accountantCircleRef = createRef<Circle>();

  const productionManagerImgRef = createRef<Img>();
  const skilledImgRef = createRef<Img>();
  const semiSkilledImgRef = createRef<Img>();
  const unskilledImgRef = createRef<Img>();
  const accountantImgRef = createRef<Img>();

  // const videoRef = createRef<Video>();

  const everythingLayoutRef = createRef<Layout>();

  const fullText = "To start your own agricultural implements business";
  const duration = 3;
  const charDuration = duration / fullText.length;

  const titleSignal = createSignal("");

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
    <Audio
      ref={audioRef}
      src={"/manpower-2-new-bgm.mp3"}
      play={true}
      time={0}
    />
  );

  view.add(
    <Img
      src={"/images/manpower-2-images/background-image.jpg"}
      opacity={0.9}
      width={1920}
      height={1080}
    />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Rect
        ref={rectRef}
        width={0}
        opacity={0.5}
        // width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          text={titleSignal}
          ref={titleTxtRef}
          fontSize={70}
          fill={"white"}
          fontWeight={500}
          letterSpacing={3}
        />
      </Rect>

      <Rect
        ref={typesOfEmployeesRectRef}
        opacity={0}
        y={-600}
        width={800}
        height={100}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={typesOfEmployeesTxtRef}
          text={"Types of employees"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={productionManagerCircleRef}
        x={-700}
        y={-100}
        endAngle={0}
        opacity={0}
        size={350}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={productionManagerImgRef}
          src={"/images/manpower-2-images/production-manager.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={rectRef1}
        opacity={0}
        y={95}
        x={-700}
        width={470}
        height={70}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef1}
          text={"Production manager"}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={skilledCircleRef}
        x={0}
        y={-100}
        endAngle={0}
        opacity={0}
        size={350}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={skilledImgRef}
          src={"/images/manpower-2-images/skilled.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={rectRef2}
        opacity={0}
        y={95}
        width={370}
        height={70}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef2}
          text={"Skilled workers"}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={semiSkilledCircleRef}
        x={700}
        y={-100}
        endAngle={0}
        opacity={0}
        size={350}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={semiSkilledImgRef}
          src={"/images/manpower-2-images/semi-skilled.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={rectRef3}
        opacity={0}
        x={700}
        y={95}
        width={470}
        height={70}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef3}
          text={"Semi-skilled workers"}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={unskilledCircleRef}
        x={-350}
        y={280}
        endAngle={0}
        opacity={0}
        size={350}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={unskilledImgRef}
          src={"/images/manpower-2-images/unskilled-labor.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={rectRef4}
        opacity={0}
        x={-350}
        y={480}
        width={470}
        height={70}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef4}
          text={"Unskilled labor"}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={accountantCircleRef}
        x={350}
        y={280}
        endAngle={0}
        opacity={0}
        size={350}
        lineWidth={10}
        stroke={"blue"}
        fill={"white"}
        zIndex={1}
      >
        <Img
          ref={accountantImgRef}
          src={"/images/manpower-2-images/accountant.png"}
          opacity={0}
          radius={1000}
          size={340}
        />
      </Circle>

      <Rect
        ref={rectRef5}
        opacity={0}
        x={350}
        y={480}
        width={470}
        height={70}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef5}
          text={"Accountant"}
          fontSize={40}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* all(
    titleTxtRef().text(fullText, 3),
    rectRef().width(1800, 2.5),
    rectRef().opacity(0.76, 2.5)
  );

  yield* all(titleTxtRef().opacity(0, 0.5), rectRef().opacity(0, 0.5));

  yield* all(
    typesOfEmployeesRectRef().y(-450, 1),
    typesOfEmployeesRectRef().opacity(1, 1)
  );

  yield* all(
    productionManagerCircleRef().opacity(1, 1.5),
    productionManagerCircleRef().endAngle(360, 1.5),
    productionManagerImgRef().opacity(1, 1.5),
    rectRef1().opacity(1, 1.8)
  );

  yield* all(
    skilledCircleRef().opacity(1, 1),
    skilledCircleRef().endAngle(360, 1),
    skilledImgRef().opacity(1, 1),
    rectRef2().opacity(1, 1.2)
  );

  yield* all(
    semiSkilledCircleRef().opacity(1, 1),
    semiSkilledCircleRef().endAngle(360, 1),
    semiSkilledImgRef().opacity(1, 1),
    rectRef3().opacity(1, 1.2)
  );

  yield* all(
    unskilledCircleRef().opacity(1, 1),
    unskilledCircleRef().endAngle(360, 1),
    unskilledImgRef().opacity(1, 1),
    rectRef4().opacity(1, 1.2)
  );

  yield* all(
    accountantCircleRef().opacity(1, 1),
    accountantCircleRef().endAngle(360, 1),
    accountantImgRef().opacity(1, 1),
    rectRef5().opacity(1, 1.2)
  );

  yield* everythingLayoutRef().opacity(0, 0.5);
  audioRef().pause();
  audioRef().remove();
});
