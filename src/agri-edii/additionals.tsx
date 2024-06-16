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

import { all, createRef, createSignal, waitFor } from "@revideo/core";

// import { vehicles, computer, furniture } from "/images/agri-edii-images";

export default makeScene2D(function* (view) {
  const vehiclesCircleRef = createRef<Circle>();
  const computerCircleRef = createRef<Circle>();
  const furnitureCircleRef = createRef<Circle>();

  const vehiclesImgRef = createRef<Img>();
  const computerImgRef = createRef<Img>();
  const furnitureImgRef = createRef<Img>();

  const costRectRef = createRef<Rect>();

  // const videoRef = createRef<Video>();

  const vehiclesRectRef = createRef<Rect>();
  const computerRectRef = createRef<Rect>();
  const furnitureRectRef = createRef<Rect>();

  const vehiclesTxtRef = createRef<Txt>();
  const computerTxtRef = createRef<Txt>();
  const furnitureTxtRef = createRef<Txt>();

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
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={51.3} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={vehiclesCircleRef}
        x={-550}
        y={-100}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={vehiclesImgRef}
          src={"/images/agri-edii-images/vehicles.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={vehiclesRectRef}
        fill={"blue"}
        radius={10}
        width={350}
        height={70}
        x={-550}
        y={165}
        opacity={0}
      >
        <Txt
          ref={vehiclesTxtRef}
          text={"Vehicles"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={computerCircleRef}
        x={0}
        y={-100}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={computerImgRef}
          src={"/images/agri-edii-images/computer.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={computerRectRef}
        fill={"blue"}
        radius={10}
        width={350}
        height={70}
        y={165}
        opacity={0}
      >
        <Txt
          ref={computerTxtRef}
          text={"Computers"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={furnitureCircleRef}
        x={550}
        y={-100}
        endAngle={0}
        opacity={1}
        size={430}
        lineWidth={10}
        stroke={"blue"}
      >
        <Img
          ref={furnitureImgRef}
          src={"/images/agri-edii-images/furniture.png"}
          opacity={0}
          radius={1000}
          size={420}
        />
      </Circle>

      <Rect
        ref={furnitureRectRef}
        fill={"blue"}
        radius={10}
        width={450}
        height={70}
        x={550}
        y={165}
        opacity={0}
      >
        <Txt
          ref={furnitureTxtRef}
          text={"Office furniture"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Rect
        ref={costRectRef}
        opacity={0}
        y={350}
        width={540}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          text={"Rs. 4.65 lakhs"}
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
    vehiclesCircleRef().endAngle(360, 1),
    vehiclesImgRef().opacity(1, 1),
    vehiclesRectRef().opacity(1, 1)
  );

  yield* all(
    computerCircleRef().endAngle(360, 1),
    computerImgRef().opacity(1, 1),
    computerRectRef().opacity(1, 1)
  );

  yield* all(
    furnitureCircleRef().endAngle(360, 1),
    furnitureImgRef().opacity(1, 1),
    furnitureRectRef().opacity(1, 1)
  );

  yield* costRectRef().opacity(1, 1);

  yield* waitFor(1);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
