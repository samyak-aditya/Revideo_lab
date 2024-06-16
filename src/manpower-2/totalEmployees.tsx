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
//   backgroundImage,
//   rupees,
//   totalEmployees,
// } from "../../images/mapower-2-images";

export default makeScene2D(function* (view) {
  const totalEmployeesCircleRef = createRef<Circle>();
  const totalEmployeesImgRef = createRef<Img>();
  const rupeesImgRef = createRef<Img>();

  const employeesRectRef = createRef<Rect>();
  const moneyRectRef = createRef<Rect>();

  const employeesTxtRef = createRef<Txt>();
  const moneyTxtRef = createRef<Txt>();

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
    <Audio
      ref={audioRef}
      src={"/manpower-2-new-bgm.mp3"}
      play={true}
      time={28}
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
      <Circle
        ref={totalEmployeesCircleRef}
        endAngle={0}
        lineWidth={10}
        opacity={0}
        x={-550}
        y={-100}
        size={600}
        stroke={"blue"}
        fill={"white"}
      >
        <Img
          ref={totalEmployeesImgRef}
          opacity={0}
          radius={1000}
          src={"/images/manpower-2-images/totalEmployees.png"}
          width={590}
        />
      </Circle>

      <Rect
        ref={employeesRectRef}
        opacity={0}
        x={-550}
        y={320}
        width={600}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={employeesTxtRef}
          fontSize={80}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Img
        ref={rupeesImgRef}
        opacity={0}
        scale={0}
        x={550}
        y={-100}
        src={"/images/manpower-2-images/rupees.png"}
        radius={1000}
        width={800}
      />

      <Rect
        ref={moneyRectRef}
        opacity={0}
        x={550}
        y={320}
        width={500}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={moneyTxtRef}
          text={"44.7 lakhs"}
          fontSize={80}
          scale={0}
          opacity={0}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* all(
    totalEmployeesCircleRef().opacity(1, 1),
    totalEmployeesCircleRef().endAngle(360, 1),
    totalEmployeesImgRef().opacity(1, 1)
  );

  yield* all(
    employeesRectRef().opacity(1, 1),
    employeesTxtRef().text("16 employees", 1.5)
  );

  yield* all(rupeesImgRef().opacity(1, 1), rupeesImgRef().scale(1, 1));

  yield* all(
    moneyRectRef().opacity(1, 1),
    moneyTxtRef().scale(1, 1),
    moneyTxtRef().opacity(1, 1)
  );

  yield* waitFor(1);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
