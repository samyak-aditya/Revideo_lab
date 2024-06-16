import { Layout, Txt, Rect, makeScene2D, Circle, Audio } from "@revideo/2d";
import { all, tween, createRef, createSignal, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const txtRentRef = createRef<Txt>();
  const txtDepreciationRef = createRef<Txt>();
  const txtManpowerRef = createRef<Txt>();
  const rectRentRef = createRef<Rect>();
  const rectDepreciationRef = createRef<Rect>();
  const rectManpowerRef = createRef<Rect>();

  const everythingLayoutRef = createRef<Layout>();

  const txtContainerRef = createRef<Layout>();
  const myCircle2 = createRef<Circle>();
  const foreignCircleRef = createRef<Circle>();
  const offerletter = createSignal(0);

  const fullText = " Lakhs";
  const duration = 1; // total duration for the entire text animation
  const charDuration = duration / fullText.length; // duration per character

  // Create a signal to hold the text
  const textSignal = createSignal("");

  view.fontFamily("outfit");

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={74.95} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={txt2Ref}
        fontSize={100}
        fontWeight={600}
        y={-800}
        x={0}
        fill={"blue"}
        letterSpacing={3}
      >
        Fixed cost
      </Txt>
      <Txt
        text={textSignal}
        fontSize={60}
        fontWeight={700}
        fill="blue"
        y={300}
        x={300}
      />

      <Circle
        scale={0}
        ref={myCircle2}
        x={0}
        width={440}
        height={440}
        fill="#B4D4FF"
      >
        <Txt
          ref={txt1Ref}
          fontSize={95}
          fontWeight={500}
          letterSpacing={3}
          fill={"blue"}
          text={() => `₹${offerletter().toFixed(2)}`}
        />
      </Circle>

      <Rect
        radius={10}
        fill="blue"
        width={650}
        height={120}
        x={-1400}
        y={-195}
        ref={rectRentRef}
      />
      <Txt
        ref={txtRentRef}
        fontSize={70}
        fontWeight={400}
        fill="white"
        padding={20}
        y={-190}
        x={-1400}
      >
        Rent
      </Txt>

      <Rect
        radius={10}
        fill="blue"
        width={650}
        height={120}
        x={-1400}
        y={25}
        ref={rectDepreciationRef}
      />
      <Txt
        ref={txtDepreciationRef}
        fontSize={70}
        fontWeight={400}
        fill="white"
        padding={20}
        y={30}
        x={-1400}
      >
        Depreciation
      </Txt>

      <Rect
        radius={10}
        fill="blue"
        width={650}
        height={120}
        x={-1400}
        y={240}
        ref={rectManpowerRef}
      />
      <Txt
        ref={txtManpowerRef}
        fontSize={70}
        fontWeight={400}
        fill="white"
        padding={20}
        y={250}
        x={-1400}
      >
        Manpower Cost
      </Txt>
    </Layout>
  );

  yield* all(txt2Ref().position.y(-400, 1));

  yield* all(
    myCircle2().position.x(0, 0).to(300, 1),
    txtRentRef().position.x(-1400, 0).to(-550, 1),
    rectRentRef().position.x(-1400, 0).to(-550, 1)
  );
  yield* all(
    txtDepreciationRef().position.x(-1400, 0).to(-550, 1),
    rectDepreciationRef().position.x(-1400, 0).to(-550, 1)
  );
  yield* all(
    rectManpowerRef().position.x(-1400, 0).to(-550, 1),
    txtManpowerRef().position.x(-1400, 0).to(-550, 1)
  );

  yield* all(
    myCircle2().scale(0, 0).to(1, 1),
    txt1Ref().scale(0, 0).to(1, 1),
    offerletter(0.0, 0).to(16.95, 2)
  );

  // yield* offerletter(0.0, 0).to(16.95, 2);

  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }

  yield* waitFor(0.5);

  yield* everythingLayoutRef().opacity(0, 1);

  audioRef().pause();
  audioRef().remove();
});
