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

// import { backgroundImage, skilled } from "../../images/mapower-2-images";

export default makeScene2D(function* (view) {
  const totalEmployeesCircleRef = createRef<Circle>();
  const skilledCircleRef = createRef<Circle>();

  const totalEmployeesImgRef = createRef<Img>();
  const skilledImgRef = createRef<Img>();

  const commonEmployeeTypeRectRef = createRef<Rect>();
  const commonEmployeeTypeTxtRef = createRef<Txt>();

  const rectRef1 = createRef<Rect>();
  const txtRef1 = createRef<Txt>();

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
      time={23}
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
        ref={commonEmployeeTypeRectRef}
        opacity={0}
        y={-450}
        width={0}
        height={100}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={commonEmployeeTypeTxtRef}
          fontSize={60}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Img
        ref={skilledImgRef}
        src={"/images/manpower-2-images/skilled.png"}
        opacity={0}
        radius={1000}
        size={800}
        x={-350}
        y={100}
      />

      <Rect
        ref={rectRef1}
        opacity={0}
        y={110}
        x={250}
        width={600}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef1}
          text={"7 employees"}
          fontSize={80}
          fontWeight={500}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* all(
    commonEmployeeTypeRectRef().width(1000, 2),
    commonEmployeeTypeRectRef().opacity(1, 2),
    commonEmployeeTypeTxtRef().text("Common employee type", 2)
  );

  yield* skilledImgRef().opacity(1, 1.5);

  yield* rectRef1().opacity(1, 0.8);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
