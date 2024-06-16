import { Layout, Txt, makeScene2D, Circle, Img, Audio } from "@revideo/2d";
import { all, tween, createRef, createSignal, waitFor } from "@revideo/core";

// import money from "/images/money-growing.png";

export default makeScene2D(function* (view) {
  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const imgRef = createRef<Img>();
  const claimFree = createRef<Txt>();

  const everythingLayoutRef = createRef<Layout>();

  const txtContainerRef = createRef<Layout>();
  const myCircle2 = createRef<Circle>();
  const foreignCircleRef = createRef<Circle>();
  const offerletter = createSignal(5);

  const fullText = "Staying claim-free and enhances your coverage over time";
  const duration = 3;
  const charDuration = duration / fullText.length;

  const textSignal = createSignal("");

  const audioRef = createRef<Audio>();

  view.fontFamily("outfit");

  view.add(
    <Audio
      ref={audioRef}
      src={"/ackoscene10.mp3"}
      play={true}
      time={0}
    />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={claimFree}
        fontSize={80}
        fontWeight={500}
        fill={"#7C47E1"}
        letterSpacing={2}
      />

      <Txt
        ref={txt2Ref}
        fontSize={100}
        fontWeight={600}
        y={-800}
        x={0}
        fill={"#7C47E1"}
        letterSpacing={3}
      >
        Cumulative Bonus
      </Txt>

      <Txt
        text={textSignal}
        fontSize={60}
        fontWeight={500}
        letterSpacing={2}
        fill={"#7C47E1"}
        y={400}
      />
      <Circle
        scale={0}
        ref={myCircle2}
        x={0}
        y={100}
        width={440}
        height={440}
        fill={"#7C47E1"}
      >
        <Txt
          ref={txt1Ref}
          fontSize={100}
          fontWeight={500}
          letterSpacing={2}
          fill={"white"}
          text={() => `${offerletter().toFixed(0)}%`}
        />
      </Circle>

      <Circle
        ref={imgRef}
        opacity={0} // Initially invisible
        width={440}
        height={440}
        endAngle={360}
        x={0}
        y={100}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img src={"/images/money-growing.png"} width={440} height={440} />
      </Circle>
    </Layout>
  );

  yield* claimFree().text("For each claim-free year", 1.5);

  yield* all(txt2Ref().position.y(-300, 2), claimFree().opacity(0, 1));

  yield* all(
    myCircle2().scale(1, 1.8),
    myCircle2().endAngle(360, 1.8),
    txt1Ref().scale(1, 1.8)
  );

  yield* waitFor(0.5);

  yield* all(
    myCircle2().position.x(300, 2),
    imgRef().opacity(1, 1),
    imgRef().position.x(-300, 2),
    offerletter(5, 0).to(50, 3)
  );

  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }

  yield* everythingLayoutRef().opacity(0, 2);
});
