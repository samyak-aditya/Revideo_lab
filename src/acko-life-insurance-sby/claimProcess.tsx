import {
  Audio,
  Circle,
  Img,
  Layout,
  Txt,
  Video,
  makeScene2D,
} from "@revideo/2d";

import { all, createRef, waitFor } from "@revideo/core";

// import { claimForm, photoID, report } from "/images/index.ts";
// import insuranceVideo from "/videos/acko-life-insurance-sby-videos/Insurance.mp4";

export default makeScene2D(function* (view) {
  const claimFormImgRef = createRef<Img>();
  const photoIdImgRef = createRef<Img>();
  const reportImgRef = createRef<Img>();

  const txtRef = createRef<Txt>();
  const claimTxtRef = createRef<Txt>();

  const claimFormCircleRef = createRef<Circle>();
  const photoIdCircleRef = createRef<Circle>();
  const reportCircleRef = createRef<Circle>();

  const videoRef = createRef<Video>();
  const insuranceVideoRef = createRef<Video>();

  const everythingLayoutRef = createRef<Layout>();

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
    <Audio ref={audioRef} src={"/ackoscene5.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={claimTxtRef}
        text={"Claim"}
        fontSize={80}
        fontWeight={600}
        opacity={0}
        x={-50}
        y={-570}
        letterSpacing={2}
        fill={"#7C47E1"}
        zIndex={1}
      />

      <Video
        ref={insuranceVideoRef}
        size={700}
        y={-50}
        png={false}
        src={"/Insurance.mp4"}
      />

      <Txt
        ref={txtRef}
        fontSize={60}
        fontWeight={500}
        y={340}
        letterSpacing={2}
        fill={"#7C47E1"}
      />

      <Circle
        ref={claimFormCircleRef}
        x={200}
        y={-270}
        endAngle={0}
        opacity={0}
        size={430}
        lineWidth={10}
        stroke={"#7C47E1"}
      >
        <Img
          ref={claimFormImgRef}
          src={"/images/acko-life-insurance-sby-images/claim-form.png"}
          radius={1000}
          size={420}
        />
      </Circle>

      <Circle
        ref={photoIdCircleRef}
        x={700}
        size={430}
        endAngle={0}
        opacity={0}
        lineWidth={10}
        stroke={"#7C47E1"}
      >
        <Img
          ref={photoIdImgRef}
          src={"/images/acko-life-insurance-sby-images/photo-id.png"}
          radius={1000}
          size={420}
        />
      </Circle>

      <Circle
        ref={reportCircleRef}
        x={200}
        y={270}
        endAngle={0}
        opacity={0}
        size={430}
        lineWidth={10}
        stroke={"#7C47E1"}
      >
        <Img
          ref={reportImgRef}
          src={"/images/acko-life-insurance-sby-images/report.png"}
          radius={1000}
          size={420}
        />
      </Circle>
    </Layout>
  );

  yield* all(
    claimTxtRef().opacity(1, 0.5),
    claimTxtRef().position.y(-420, 0.5)
  );

  insuranceVideoRef().play();

  yield* waitFor(1.5);

  yield* txtRef().text("Notify within 30 days of the event", 3);

  yield* all(
    claimTxtRef().position.y(-300, 1.5),
    claimTxtRef().position.x(-500, 1.5),
    insuranceVideoRef().position.x(-450, 1.5),
    insuranceVideoRef().size(500, 1.5),
    insuranceVideoRef().position.y(0, 1.5),
    txtRef().position.x(-470, 1.5),
    txtRef().position.y(300, 1.5),
    txtRef().fontSize(40, 1.5)
  );

  yield* all(
    claimFormCircleRef().opacity(1, 1),
    claimFormCircleRef().endAngle(360, 1)
  );

  yield* waitFor(0.5);

  yield* all(
    photoIdCircleRef().opacity(1, 1),
    photoIdCircleRef().endAngle(360, 1)
  );

  yield* waitFor(0.5);

  yield* all(
    reportCircleRef().opacity(1, 1),
    reportCircleRef().endAngle(360, 1)
  );

  yield* waitFor(0.9);

  yield* everythingLayoutRef().opacity(0, 0.8);
});
