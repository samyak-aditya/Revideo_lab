import {
  Audio,
  Circle,
  Img,
  Layout,
  Line,
  Rect,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

// import { agriculture } from "../../images/agri-edii-images";

// import {
//   backgroundImage,
//   semiSkilled,
//   skilled,
// } from "../../images/mapower-2-images";

export default makeScene2D(function* (view) {
  const skilledCircleRef = createRef<Circle>();
  const semiSkilledCircleRef = createRef<Circle>();

  const skilledImgRef = createRef<Img>();
  const semiSkilledImgRef = createRef<Img>();

  const highestYearlyExpenseRectRef = createRef<Rect>();
  const rectRef1 = createRef<Rect>();
  const rectRef2 = createRef<Rect>();
  const rectRef3 = createRef<Rect>();
  const rectRef4 = createRef<Rect>();
  const rectRef5 = createRef<Rect>();

  const highestYearlyExpenseTxtRef = createRef<Txt>();
  const txtRef1 = createRef<Txt>();
  const txtRef2 = createRef<Txt>();
  const txtRef3 = createRef<Txt>();
  const txtRef4 = createRef<Txt>();
  const txtRef5 = createRef<Txt>();

  const skilledTxtRef = createRef<Txt>();
  const semiSkilledTxtRef = createRef<Txt>();

  const skilledLineRef = createRef<Line>();
  const semiSkilledLineRef = createRef<Line>();

  // const videoRef = createRef<Video>();

  const everythingLayoutRef = createRef<Layout>();
  const skilledLayoutRef = createRef<Layout>();
  const semiSkilledLayoutRef = createRef<Layout>();

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
    <Audio
      ref={audioRef}
      src={"/manpower-2-new-bgm.mp3"}
      play={true}
      time={11.4}
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
        ref={highestYearlyExpenseRectRef}
        opacity={0}
        y={-450}
        width={0}
        height={100}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={highestYearlyExpenseTxtRef}
          // text={"Employee types with the highest yearly expenses"}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Line
        ref={skilledLineRef}
        lineWidth={80}
        stroke={"red"}
        points={[
          [-770, -190],
          [-770, -190],
        ]}
        endArrow
      />

      <Txt
        // text={"Rs. 16.8 lakhs"}
        ref={skilledTxtRef}
        x={70}
        y={-185}
        opacity={0}
        fill={"white"}
        fontWeight={500}
        letterSpacing={2}
        fontSize={50}
      />

      <Layout ref={skilledLayoutRef} x={-600} y={-190}>
        <Circle
          ref={skilledCircleRef}
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
          y={200}
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
      </Layout>

      <Line
        ref={semiSkilledLineRef}
        lineWidth={80}
        stroke={"red"}
        points={[
          [-770, 280],
          [-770, 280],
        ]}
        endArrow
      />

      <Txt
        // text={"Rs. 7.2 lakhs"}
        ref={semiSkilledTxtRef}
        x={-400}
        y={285}
        opacity={0}
        fill={"white"}
        fontWeight={500}
        letterSpacing={2}
        fontSize={50}
      />

      <Layout ref={semiSkilledLayoutRef} x={-600} y={280}>
        <Circle
          ref={semiSkilledCircleRef}
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
          y={200}
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
      </Layout>

      {/* <Circle
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
          src={agriculture}
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
      </Rect> */}
    </Layout>
  );

  // yield* titleTxtRef().text(fullText, 2);

  // for (let i = 0; i < fullText.length; i++) {
  //   yield* tween(charDuration, () => {
  //     titleSignal(fullText.substring(0, i + 1));
  //   });
  // }

  // yield* titleTxtRef().opacity(0, 0.5);

  yield* all(
    // highestYearlyExpenseRectRef().y(-450, 2.5),
    highestYearlyExpenseRectRef().opacity(1, 2.5),
    highestYearlyExpenseRectRef().width(1550, 2.5),
    highestYearlyExpenseTxtRef().text(
      "Employee types with the highest yearly expenses",
      3
    )
  );

  yield* all(
    skilledImgRef().opacity(1, 1.5),
    skilledCircleRef().opacity(1, 1.5),
    skilledCircleRef().endAngle(360, 1.5),
    rectRef2().opacity(1, 1.8)
  );

  yield* all(
    skilledLineRef().points(
      [
        [-770, -190],
        [300, -190],
      ],
      2
    ),
    skilledLayoutRef().position.x(500, 1.8),
    skilledTxtRef().text("Rs. 16.8 lakhs", 1.8),
    skilledTxtRef().opacity(1, 1.8)
  );

  yield* all(
    semiSkilledCircleRef().opacity(1, 1.5),
    semiSkilledImgRef().opacity(1, 1.5),
    semiSkilledCircleRef().endAngle(360, 1.5),
    rectRef3().opacity(1, 1.8)
  );

  yield* all(
    semiSkilledLineRef().points(
      [
        [-770, 280],
        [-200, 280],
      ],
      2
    ),
    semiSkilledLayoutRef().position.x(0, 1.8),
    semiSkilledTxtRef().text("Rs. 7.2 lakhs", 1.8),
    semiSkilledTxtRef().opacity(1, 1.8)
  );

  yield* everythingLayoutRef().opacity(0, 0.8);
  audioRef().pause();
  audioRef().remove();
});
