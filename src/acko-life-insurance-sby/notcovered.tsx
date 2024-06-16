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

import { tween, all, createRef, createSignal, waitFor } from "@revideo/core";

// import {
//   sucide,
//   selfinjury,
//   addiction,
//   war,
//   dangerous,
//   foreign,
// } from "../../images";

export default makeScene2D(function* (view) {
  const warImgRef = createRef<Img>();
  const sucideImgRef = createRef<Img>();
  const selfinjuryImgRef = createRef<Img>();
  const addictionImgRef = createRef<Img>();
  const dangerousImgRef = createRef<Img>();
  const foreignImgRef = createRef<Img>();

  const warCircleRef = createRef<Circle>();
  const sucideCircleRef = createRef<Circle>();
  const selfinjuryCircleRef = createRef<Circle>();
  const addictionCircleRef = createRef<Circle>();
  const dangerousCircleRef = createRef<Circle>();
  const foreignCircleRef = createRef<Circle>();

  const warTxtRef = createRef<Txt>();
  const permanentTotalDisablementTxtRef = createRef<Txt>();
  const addictionTxtRef = createRef<Txt>();
  const dangerousTxtRef = createRef<Txt>();
  const foreignTxtRef = createRef<Txt>();

  const videoRef = createRef<Video>();

  const warRectRef = createRef<Rect>();
  const sucideRectRef = createRef<Rect>();
  const selfinjuryRectRef = createRef<Rect>();
  const addictionRectRef = createRef<Rect>();
  const dangerousRectRef = createRef<Rect>();
  const foreignRectRef = createRef<Rect>();

  const everythingLayoutRef = createRef<Layout>();

  const fullText = "The policy doesn’t cover claims arising from";
  const duration = 1.5; // total duration for the entire text animation
  const charDuration = duration / fullText.length; // duration per character

  // Create a signal to hold the text
  const textSignal = createSignal("");
  const textRectRef = createRef<Rect>();

  view.fontFamily("outfit");

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/ackoscene8.mp3"} play={true} time={0} />
  );

  // Add the Txt node with the signal, centered horizontally and vertically
  view.add(
    <Rect ref={textRectRef} fill={"#f0f0f0"} radius={20} padding={20}>
      <Txt text={textSignal} fontSize={80} fontWeight={500} fill={"#7C47E1"} />
    </Rect>
  );

  // Tween the text signal
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }

  // Make the text disappear
  yield* textRectRef().opacity(0, 0.5);

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
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={warCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-700}
        y={-350}
        zIndex={1}
      >
        <Img
          ref={warImgRef}
          src={"/images/acko-life-insurance-sby-images/war.jpg"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={warRectRef}
        opacity={0}
        x={-470}
        y={-350}
        width={200}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          ref={warTxtRef}
          text={"War"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={selfinjuryCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-700}
        y={0}
        zIndex={1}
      >
        <Img
          ref={selfinjuryImgRef}
          src={"/images/acko-life-insurance-sby-images/selfinjury.jpg"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={selfinjuryRectRef}
        opacity={0}
        x={-400}
        y={0}
        width={340}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Self-injury"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={sucideCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={-700}
        y={350}
        zIndex={1}
      >
        <Img
          ref={sucideImgRef}
          src={"/images/acko-life-insurance-sby-images/sucide.jpg"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={sucideRectRef}
        opacity={0}
        x={-440}
        y={350}
        width={270}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          ref={permanentTotalDisablementTxtRef}
          text={"Sucide"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={addictionCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={100}
        y={-350}
        zIndex={1}
      >
        <Img
          ref={addictionImgRef}
          src={"/images/acko-life-insurance-sby-images/addiction.avif"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={addictionRectRef}
        opacity={0}
        x={440}
        y={-350}
        width={420}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          ref={dangerousTxtRef}
          text={"Intoxiciation"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={dangerousCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={100}
        y={0}
        zIndex={1}
      >
        <Img
          ref={dangerousImgRef}
          src={"/images/acko-life-insurance-sby-images/dangerous.jpg"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={dangerousRectRef}
        opacity={0}
        x={520}
        y={0}
        width={550}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Hazardous activities"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>

      <Circle
        ref={foreignCircleRef}
        size={300}
        endAngle={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        x={100}
        y={350}
        zIndex={1}
      >
        <Img
          ref={foreignImgRef}
          src={"/images/acko-life-insurance-sby-images/foreign.jpg"}
          opacity={0}
          width={290}
          radius={400}
        />
      </Circle>

      <Rect
        radius={10}
        ref={foreignRectRef}
        opacity={0}
        x={570}
        y={350}
        width={660}
        height={80}
        fill={"#7C47E1"}
      >
        <Txt
          ref={foreignTxtRef}
          text={"Treatment outside India"}
          fontSize={50}
          fontWeight={400}
          letterSpacing={3}
          fill={"white"}
        />
      </Rect>
    </Layout>
  );

  yield* all(
    warCircleRef().endAngle(360, 0.8),
    warImgRef().opacity(1, 0.8),
    warRectRef().opacity(1, 1)
  );

  yield* all(
    selfinjuryCircleRef().endAngle(360, 0.8),
    selfinjuryImgRef().opacity(1, 0.8),
    selfinjuryRectRef().opacity(1, 1)
  );

  yield* all(
    sucideCircleRef().endAngle(360, 0.8),
    sucideImgRef().opacity(1, 0.8),
    sucideRectRef().opacity(1, 1)
  );

  yield* all(
    addictionCircleRef().endAngle(360, 0.8),
    addictionImgRef().opacity(1, 0.8),
    addictionRectRef().opacity(1, 1)
  );
  yield* all(
    dangerousCircleRef().endAngle(360, 0.8),
    dangerousImgRef().opacity(1, 0.8),
    dangerousRectRef().opacity(1, 1)
  );
  yield* all(
    foreignCircleRef().endAngle(360, 0.8),
    foreignImgRef().opacity(1, 0.8),
    foreignRectRef().opacity(1, 1)
  );

  yield* waitFor(4.4);

  yield* everythingLayoutRef().opacity(0, 0.8);
});
