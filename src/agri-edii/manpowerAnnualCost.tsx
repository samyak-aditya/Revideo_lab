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

export default makeScene2D(function* (view) {
  const totalAnnualCostCircleRef = createRef<Circle>();

  const txtRef = createRef<Txt>();

  // const videoRef = createRef<Video>();

  const rectRef = createRef<Rect>();

  const everythingLayoutRef = createRef<Layout>();

  const totalAnnualCostSignal = createSignal(0);

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
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={8.8} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Rect
        ref={rectRef}
        opacity={0.5}
        y={-400}
        width={0}
        height={120}
        radius={15}
        fill={"blue"}
      >
        <Txt
          ref={txtRef}
          // text={"Total annual cost for Manpower"}
          fontSize={70}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={totalAnnualCostCircleRef}
        fill={"blue"}
        size={150}
        y={100}
        opacity={0}
      >
        <Txt
          fontSize={80}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `${totalAnnualCostSignal().toFixed(2)} lakhs`}
        />
      </Circle>
    </Layout>
  );

  yield* all(
    txtRef().text("Total annual cost for Manpower", 2.5),
    rectRef().width(1200, 2.5),
    rectRef().opacity(1, 2.5)
  );

  yield* all(
    totalAnnualCostSignal(0, 0).to(44.7, 2),
    totalAnnualCostCircleRef().size(600, 2),
    totalAnnualCostCircleRef().opacity(1, 2)
  );

  yield* everythingLayoutRef().scale(1.1, 3.1);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
