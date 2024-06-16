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

import { all, createRef } from "@revideo/core";

// import {
//   backgroundImage,
//   rupees,
//   success,
//   team,
// } from "../../images/mapower-2-images";

export default makeScene2D(function* (view) {
  const successCircleRef = createRef<Circle>();
  const successImgRef = createRef<Img>();
  const teamImgRef = createRef<Img>();
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
      time={34.3}
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
      <Img
        ref={teamImgRef}
        opacity={0}
        radius={1000}
        src={"/images/manpower-2-images/team.png"}
        x={-500}
        y={130}
        width={700}
      />

      <Img
        ref={successImgRef}
        opacity={0}
        src={"/images/manpower-2-images/success.png"}
        x={450}
        y={40}
        width={800}
      />

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
        fill={"#584b3a"}
      >
        <Txt
          ref={moneyTxtRef}
          text={"44.7 lakhs"}
          fontSize={80}
          scale={0}
          opacity={0}
          fontWeight={500}
          letterSpacing={3}
          fill={"#f5c682"}
        />
      </Rect>
    </Layout>
  );

  yield* all(teamImgRef().opacity(1, 2));

  yield* teamImgRef().scale(1.05, 1.5);

  yield* all(successImgRef().opacity(1, 1), successImgRef().scale(1.05, 1.5)),
    yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
