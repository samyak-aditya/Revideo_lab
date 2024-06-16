import { Layout, Txt, makeScene2D, Circle, Audio } from "@revideo/2d";
import { all, createRef, tween, createSignal, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const fullText = "The policy typically runs for one year and is renewable";
  const duration = 3;
  const charDuration = duration / fullText.length;

  const textSignal = createSignal("");

  const txt1Ref = createRef<Txt>();
  const txt2Ref = createRef<Txt>();
  const txt3Ref = createRef<Txt>();
  const txt4Ref = createRef<Txt>();

  const everythingLayoutRef = createRef<Layout>();

  const myCircle1 = createRef<Circle>();
  const myCircle2 = createRef<Circle>();

  const audioRef = createRef<Audio>();

  view.fontFamily("outfit");

  view.add(
    <Audio ref={audioRef} src={"/ackoscene9.mp3"} play={true} time={0} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={txt2Ref}
        fontSize={100}
        fontWeight={600}
        y={-800}
        x={0}
        fill={"#7C47E1"}
        letterSpacing={3}
      >
        Premium Payments
      </Txt>

      <Circle
        scale={0}
        ref={myCircle1}
        x={390}
        y={100}
        width={440}
        height={440}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Quarterly"}
          fontSize={80}
          fontWeight={600}
          letterSpacing={2}
          fill={"white"}
        />
      </Circle>

      <Circle
        scale={0}
        ref={myCircle2}
        x={-390}
        y={100}
        width={440}
        height={440}
        fill={"#7C47E1"}
      >
        <Txt
          text={"Monthly"}
          fontSize={80}
          fontWeight={600}
          letterSpacing={2}
          fill={"white"}
        />
      </Circle>

      <Txt
        text={textSignal}
        fontSize={60}
        fontWeight={500}
        letterSpacing={2}
        y={400}
        fill={"#7C47E1"}
      />
    </Layout>
  );

  yield* txt2Ref().position.y(-300, 2);

  yield* waitFor(1);

  yield* myCircle2().scale(1, 1);

  yield* myCircle1().scale(1, 1);

  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }

  yield* everythingLayoutRef().opacity(0, 0.8);
});
