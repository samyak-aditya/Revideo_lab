import {
  Audio,
  Circle,
  Img,
  Layout,
  Rect,
  Txt,
  makeScene2D,
} from "@revideo/2d";

import { tween, all, createRef, createSignal, waitFor } from "@revideo/core";
// import {
//   budgeting,
//   financialBacking,
//   machinery,
//   manpower,
//   planning,
// } from "../../images/agri-edii-images";

export default makeScene2D(function* (view) {
  const selfinjuryCircleRef = createRef<Circle>();
  const sucideCircleRef = createRef<Circle>();
  const addictionCircleRef = createRef<Circle>();
  const dangerousCircleRef = createRef<Circle>();
  const foreignCircleRef = createRef<Circle>();

  const carefulPlanningTxtRef = createRef<Txt>();
  const budgetingTxtRef = createRef<Txt>();
  const rightManpowerTxtRef = createRef<Txt>();
  const machineryTxtRef = createRef<Txt>();
  const financialBackingTxtRef = createRef<Txt>();

  const carefulPlanningImgRef = createRef<Img>();
  const budgetingImgRef = createRef<Img>();
  const rightManpowerImgRef = createRef<Img>();
  const machineryImgRef = createRef<Img>();
  const financialBackingImgRef = createRef<Img>();

  const carefulPlanningRectRef = createRef<Rect>();
  const budgetingRectRef = createRef<Rect>();
  const rightManpowerRectRef = createRef<Rect>();
  const machineryRectRef = createRef<Rect>();
  const financialBackingRectRef = createRef<Rect>();
  const everythingLayoutRef = createRef<Layout>();
  const textRectRef = createRef<Rect>();
  const introtext = "";
  const fullText = "Your venture promises to be profitable.";
  const duration = 2; // total duration for the entire text animation
  const charDuration = duration / fullText.length; // duration per character

  // Create a signal to hold the text
  const textSignal = createSignal("");

  const fullText1 =
    "Starting an agricultural implements manufacturing business involves";
  const duration1 = 3; // total duration for the entire text animation
  const charDuration1 = duration1 / fullText1.length; // duration per character

  // Create a signal to hold the text
  const textSignal1 = createSignal("");
  const textRectRef1 = createRef<Rect>();

  // Tween the text signal
  // Tween the text signal for fullText1

  view.fontFamily("outfit");

  const audioRef = createRef<Audio>();

  view.add(
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={91.9} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Rect
        opacity={1}
        ref={textRectRef1}
        fill={"#f0f0f0"}
        radius={20}
        padding={20}
      >
        <Txt
          text={textSignal1}
          fontSize={60}
          fontWeight={500}
          fontFamily={"outfit"}
          fill={"blue"}
        />
      </Rect>
      <Circle
        ref={selfinjuryCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={-200}
        y={-300}
      >
        <Img
          ref={carefulPlanningImgRef}
          src={"/images/agri-edii-images/planning.png"}
          opacity={0}
          width={290}
          radius={400}
        />
        <Rect
          ref={carefulPlanningRectRef}
          fill={"blue"}
          radius={10}
          width={450}
          height={70}
          y={200}
          opacity={0}
        >
          <Txt
            ref={carefulPlanningTxtRef}
            text={"Careful planning"}
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={sucideCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={200}
        y={-300}
      >
        <Img
          ref={budgetingImgRef}
          src={"/images/agri-edii-images/budgeting.png"}
          opacity={0}
          width={290}
          radius={400}
        />
        <Rect
          ref={budgetingRectRef}
          fill={"blue"}
          radius={10}
          width={300}
          height={70}
          y={200}
          opacity={0}
        >
          <Txt
            ref={budgetingTxtRef}
            text={"Budgeting"}
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={addictionCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={-400}
        y={100}
      >
        <Img
          ref={rightManpowerImgRef}
          src={"/images/agri-edii-images/manpower.png"}
          opacity={0}
          width={290}
          radius={400}
        />
        <Rect
          ref={rightManpowerRectRef}
          fill={"blue"}
          radius={10}
          width={450}
          height={70}
          y={200}
          opacity={0}
        >
          <Txt
            ref={rightManpowerTxtRef}
            text={"Right manpower"}
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={dangerousCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={0}
        y={100}
      >
        <Img
          ref={machineryImgRef}
          src={"/images/agri-edii-images/machinery.png"}
          opacity={0}
          width={290}
          radius={400}
        />
        <Rect
          ref={machineryRectRef}
          fill={"blue"}
          radius={10}
          width={300}
          height={70}
          y={200}
          opacity={0}
        >
          <Txt
            ref={machineryTxtRef}
            text={"Machinery"}
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Circle
        ref={foreignCircleRef}
        size={300}
        endAngle={0}
        stroke={"blue"}
        lineWidth={10}
        x={400}
        y={100}
      >
        <Img
          ref={financialBackingImgRef}
          src={"/images/agri-edii-images/financialBacking.png"}
          opacity={0}
          width={290}
          radius={400}
        />
        <Rect
          ref={financialBackingRectRef}
          fill={"blue"}
          radius={10}
          width={470}
          height={70}
          y={200}
          opacity={0}
        >
          <Txt
            ref={financialBackingTxtRef}
            text={"Financial backing"}
            fontSize={50}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      </Circle>
      <Rect ref={textRectRef} fill={"#f0f0f0"} radius={20} padding={20} y={400}>
        <Txt
          text={textSignal}
          fontSize={60}
          fontWeight={400}
          fontFamily={"outfit"}
          fill={"blue"}
          y={30}
          letterSpacing={2}
        />
      </Rect>
    </Layout>
  );

  for (let i = 0; i < fullText1.length; i++) {
    yield* tween(charDuration1, () => {
      textSignal1(fullText1.substring(0, i + 1)); // Update textSignal1, not textSignal
    });
  }

  // Make the text disappear
  yield* textRectRef1().opacity(0, 0.5);

  yield* all(
    selfinjuryCircleRef().endAngle(360, 1),
    carefulPlanningImgRef().opacity(1, 0.6),
    carefulPlanningRectRef().opacity(1, 1),
    carefulPlanningTxtRef().opacity(1, 1)
  );

  yield* all(
    sucideCircleRef().endAngle(360, 1),
    budgetingImgRef().opacity(1, 0.6),
    budgetingRectRef().opacity(1, 1),
    budgetingTxtRef().opacity(1, 1)
  );

  yield* all(
    addictionCircleRef().endAngle(360, 1),
    rightManpowerImgRef().opacity(1, 0.6),
    rightManpowerRectRef().opacity(1, 1),
    rightManpowerTxtRef().opacity(1, 1)
  );

  yield* all(
    dangerousCircleRef().endAngle(360, 1),
    machineryImgRef().opacity(1, 0.6),
    machineryRectRef().opacity(1, 1),
    machineryTxtRef().opacity(1, 1)
  );

  yield* all(
    foreignCircleRef().endAngle(360, 1),
    financialBackingImgRef().opacity(1, 0.6),
    financialBackingRectRef().opacity(1, 1),
    financialBackingTxtRef().opacity(1, 1)
  );

  // Tween the text signal
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }

  yield* waitFor(1);

  yield* everythingLayoutRef().opacity(0, 2);

  audioRef().pause();
  audioRef().remove();
});
