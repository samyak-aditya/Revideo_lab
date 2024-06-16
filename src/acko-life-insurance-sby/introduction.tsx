import { Audio, Img, Layout, Txt, Video, makeScene2D } from "@revideo/2d";

import { all, createRef, waitFor } from "@revideo/core";

// import { ackoSVG, initialAvatar, laterAvatar } from "../../images";
// import congratulation from "/videos/acko-life-insurance-sby-videos/congratulation.mp4";

export default makeScene2D(function* (view) {
  const ackoImgRef = createRef<Img>();
  const initialAvatarImgRef = createRef<Img>();
  const laterAvatarImgRef = createRef<Img>();

  const txtRef = createRef<Txt>();
  const insuranceTxtRef = createRef<Txt>();

  const videoRef = createRef<Video>();
  const congratulationVideoRef = createRef<Video>();

  const audioRef = createRef<Audio>();

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

  yield view.add(
    <Audio ref={audioRef} src={"/ackoscene1.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Img
        ref={initialAvatarImgRef}
        src={"/images/acko-life-insurance-sby-images/initialAvatar.png"}
        lineWidth={15}
        stroke={"#7C47E1"}
        radius={1000}
        width={900}
      />

      <Img
        ref={laterAvatarImgRef}
        src={"/images/acko-life-insurance-sby-images/laterAvatar.png"}
        opacity={0}
        lineWidth={15}
        stroke={"#7C47E1"}
        radius={1000}
        x={-550}
        width={600}
      />

      <Video
        ref={congratulationVideoRef}
        src={"/congratulation.mp4"}
        size={600}
        opacity={0}
        x={700}
        radius={1000}
        y={-300}
      />

      <Txt
        ref={txtRef}
        fontWeight={600}
        fontSize={80}
        fill={"#7C47E1"}
        letterSpacing={3}
        x={330}
        y={-170}
      />

      <Img
        ref={ackoImgRef}
        src={"/images/acko-life-insurance-sby-images/acko-company-logo.svg"}
        opacity={0}
        width={800}
        x={310}
        y={760}
      />

      <Txt
        ref={insuranceTxtRef}
        fontWeight={600}
        fontSize={80}
        fill={"#7C47E1"}
        letterSpacing={3}
        x={330}
        y={170}
      />
    </Layout>
  );

  yield* all(
    initialAvatarImgRef().position.x(-550, 1),
    initialAvatarImgRef().width(600, 1),
    congratulationVideoRef().position.x(350, 1),
    congratulationVideoRef().opacity(1, 1)
  );

  congratulationVideoRef().play();
  yield* waitFor(1.5);

  yield* txtRef().text("Saral Suraksha Bima Policy", 1);

  yield* all(
    ackoImgRef().position.y(0, 1.2),
    ackoImgRef().width(500, 1.2),
    ackoImgRef().opacity(1, 1.2)
  );

  yield* insuranceTxtRef().text("General Insurance", 1);

  yield* waitFor(1.5);

  yield* all(
    initialAvatarImgRef().opacity(0, 1),
    laterAvatarImgRef().opacity(1, 1)
  );

  yield* waitFor(0.3);

  yield* everythingLayoutRef().opacity(0, 0.8);
});
