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

// import { agriculture } from "../../images/agri-edii-images";

export default makeScene2D(function* (view) {
  const agricultureImgRef = createRef<Img>();

  const agricultureCircleRef = createRef<Circle>();

  const titleTxtRef = createRef<Txt>();

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

  // const videoRef = createRef<Video>();

  const everythingLayoutRef = createRef<Layout>();

  const fullText = "To start your agricultural implements business";
  const duration = 2;
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
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        text={titleSignal}
        ref={titleTxtRef}
        fontSize={80}
        fill={"blue"}
        fontWeight={500}
        letterSpacing={3}
      />

      <Circle
        ref={agricultureCircleRef}
        // endAngle={0}
        lineWidth={10}
        opacity={0}
        x={-500}
        size={700}
        endAngle={360}
        stroke={"blue"}
      >
        <Img
          ref={agricultureImgRef}
          opacity={0}
          radius={1000}
          src={"/images/agri-edii-images/agriculture.jpg"}
          width={690}
        />
      </Circle>

      <Rect
        ref={rectRef1}
        opacity={0}
        y={-400}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef1}
          text={"Production manager"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef2}
        opacity={0}
        y={-200}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef2}
          text={"Skilled"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef3}
        opacity={0}
        // y={50}
        x={1360}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef3}
          text={"Semi-skilled"}
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
        y={200}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef4}
          text={"Unskilled workers"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={rectRef5}
        opacity={0}
        x={1360}
        y={400}
        width={800}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef5}
          text={"Accountant"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  // yield* titleTxtRef().text(fullText, 2);

  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      titleSignal(fullText.substring(0, i + 1));
    });
  }

  yield* titleTxtRef().opacity(0, 0.5);

  yield* all(
    // titleTxtRef().opacity(0, 0.5),
    agricultureCircleRef().opacity(1, 0.5),
    agricultureImgRef().opacity(1, 0.5)
    // agricultureCircleRef().endAngle(360, 0.5)
  );

  yield* all(rectRef1().opacity(1, 1), rectRef1().x(400, 1));
  yield* all(rectRef2().opacity(1, 0.8), rectRef2().x(400, 0.8));
  yield* all(rectRef3().opacity(1, 1), rectRef3().x(400, 1));
  yield* all(rectRef4().opacity(1, 1.2), rectRef4().x(400, 1.2));
  yield* all(rectRef5().opacity(1, 1), rectRef5().x(400, 1));

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
