import { makeScene2D, Circle, Layout, Txt, Audio } from "@revideo/2d";
import { all, createRef, createSignal, tween, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const circle1 = createRef<Circle>();
  const circle2 = createRef<Circle>();
  const mergedCircle = createRef<Circle>();

  const yourContributionCircleTxtRef = createRef<Txt>();
  const bankFinanceCircleTxtRef = createRef<Txt>();
  const yourContributionTxtRef = createRef<Txt>();
  const bankFinanceTxtRef = createRef<Txt>();
  const fundingTxtRef = createRef<Txt>();

  const yourContributionSignal = createSignal(0);
  const bankFinanceSignal = createSignal(0);

  const everythingLayoutRef = createRef<Layout>();

  view.fontFamily("outfit");

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={30.9} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        // text={"The funding will come from two sources"}
        ref={fundingTxtRef}
        fontSize={80}
        fill={"blue"}
        fontWeight={500}
        letterSpacing={3}
      />

      <Circle ref={circle1} scale={0} size={500} x={-400} fill={"blue"}>
        <Txt
          ref={yourContributionCircleTxtRef}
          fontSize={70}
          letterSpacing={3}
          fontWeight={500}
          fill={"white"}
          text={() => `${yourContributionSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={yourContributionTxtRef}
        text={"Your Contribution"}
        x={-400}
        y={300}
        opacity={0}
        fontSize={50}
        letterSpacing={3}
        fontWeight={500}
        fill={"blue"}
      />

      <Circle ref={circle2} scale={0} size={500} x={400} fill={"blue"}>
        <Txt
          ref={bankFinanceCircleTxtRef}
          fontSize={70}
          letterSpacing={3}
          fontWeight={500}
          fill={"white"}
          text={() => `${bankFinanceSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={bankFinanceTxtRef}
        text={"Bank Finance"}
        x={400}
        y={300}
        opacity={0}
        fontSize={50}
        letterSpacing={3}
        fontWeight={500}
        fill={"blue"}
      />
      <Circle ref={mergedCircle} fill={"blue"} scale={0}>
        <Txt
          text={"Total project cost"}
          opacity={1}
          fontSize={40}
          letterSpacing={2}
          fontWeight={500}
          fill={"white"}
        />
      </Circle>
    </Layout>
  );

  // for (let i = 0; i < fullText.length; i++) {
  //   yield* tween(charDuration, () => {
  //     fundingSignal(fullText.substring(0, i + 1));
  //   });
  // }

  yield* all(
    fundingTxtRef().text("The funding will come from two sources", 1.5)
  );

  yield* fundingTxtRef().opacity(0, 0.5);

  yield* all(circle1().scale(1, 2), yourContributionSignal(0, 0).to(21.55, 2));

  yield* yourContributionTxtRef().opacity(1, 1);

  yield* waitFor(1);

  yield* all(circle2().scale(1, 2), bankFinanceSignal(0, 0).to(32.33, 2));

  yield* bankFinanceTxtRef().opacity(1, 1);

  yield* waitFor(0.2);

  yield* all(
    circle1().x(0, 1),
    yourContributionCircleTxtRef().opacity(0, 1),
    yourContributionTxtRef().opacity(0, 0.5),
    circle2().x(0, 1),
    bankFinanceCircleTxtRef().opacity(0, 1),
    bankFinanceTxtRef().opacity(0, 0.5),
    mergedCircle().scale(2, 1.5),
    mergedCircle().size(500, 1.5)
  );

  yield* everythingLayoutRef().opacity(0, 1.5);

  audioRef().pause();
  audioRef().remove();
});
