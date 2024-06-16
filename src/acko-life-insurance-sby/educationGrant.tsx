import {
  Audio,
  Circle,
  Img,
  Layout,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, createSignal } from "@revideo/core";

// import { child } from "../../images";

export default makeScene2D(function* (view) {
  const imgRef = createRef<Img>();

  const educationGrantTxtRef = createRef<Txt>();

  const percent10CircleRef = createRef<Circle>();
  const imgCircleRef = createRef<Circle>();

  const everythingLayoutRef = createRef<Layout>();
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
    <Audio ref={audioRef} src={"/ackoscene4.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={educationGrantTxtRef}
        fontWeight={500}
        letterSpacing={3}
        fontSize={100}
        x={-400}
        y={-250}
        fill={"#7C47E1"}
      />

      <Circle
        ref={percent10CircleRef}
        fill={"#7C47E1"}
        size={150}
        x={400}
        y={-50}
        opacity={0}
      >
        <Txt
          text={() => `${percent10Signal().toFixed(0)}%`}
          fontSize={80}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
        />
      </Circle>

      <Circle
        ref={imgCircleRef}
        stroke={"#7C47E1"}
        size={300}
        opacity={0}
        lineWidth={10}
        x={400}
      >
        <Img
          ref={imgRef}
          src={"/images/acko-life-insurance-sby-images/child.png"}
          size={500}
          x={25}
          y={-10}
          scale={0}
          opacity={0}
        />
      </Circle>
    </Layout>
  );

  yield* educationGrantTxtRef().text("Education grant", 2);

  yield* all(
    percent10CircleRef().opacity(1, 1),
    percent10CircleRef().size(300, 1),
    percent10Signal(10, 1.5)
  );

  yield* all(
    imgCircleRef().opacity(1, 1.5),
    imgCircleRef().size(600, 1.5),
    imgCircleRef().position.x(-400, 1.5),
    imgCircleRef().position.y(200, 1.5),
    imgRef().opacity(1, 1.5),
    imgRef().scale(1, 1.5)
  );

  yield* everythingLayoutRef().opacity(0, 0.5);
});
