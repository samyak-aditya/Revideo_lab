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

import { all, createRef, createSignal, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const annualSalesCircleRef = createRef<Circle>();

  const annualSalesRsTxtRef = createRef<Txt>();
  const annualSalesTxtRef = createRef<Txt>();
  const taxesTxtRef = createRef<Txt>();
  const depreciationTxtRef = createRef<Txt>();
  const netProfitTxtRef = createRef<Txt>();

  const productionCostTxtRef = createRef<Txt>();

  // const videoRef = createRef<Video>();

  const productionCostCircleRef = createRef<Circle>();
  const taxesCircleRef = createRef<Circle>();
  const depreciationCircleRef = createRef<Circle>();

  const everythingLayoutRef = createRef<Layout>();

  const annualSalesSignal = createSignal(0);
  const productionCostSignal = createSignal(0);

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
    <Audio ref={audioRef} src={"/agriWithBg.mp3"} play={true} time={58.1} />
  );

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Circle
        ref={annualSalesCircleRef}
        fill={"blue"}
        size={150}
        // x={450}
        // y={-150}
        opacity={1}
      >
        <Txt
          ref={annualSalesRsTxtRef}
          fontSize={80}
          opacity={0}
          scale={0}
          fill={"white"}
          letterSpacing={4}
          fontWeight={500}
          text={() => `${annualSalesSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={annualSalesTxtRef}
        text={"Annual sales"}
        fontSize={70}
        opacity={0}
        y={400}
        fontWeight={500}
        letterSpacing={3}
        fill={"blue"}
      />

      <Circle
        ref={productionCostCircleRef}
        opacity={0}
        size={400}
        x={-300}
        y={-100}
        fill={"blue"}
      >
        <Txt
          ref={productionCostTxtRef}
          fontSize={50}
          fontWeight={500}
          letterSpacing={4}
          fill={"white"}
          text={() => `${productionCostSignal().toFixed(2)} lakhs`}
        />
      </Circle>

      <Txt
        ref={productionCostTxtRef}
        text={"Production cost"}
        fontSize={50}
        opacity={0}
        x={200}
        y={-50}
        fontWeight={500}
        letterSpacing={3}
        fill={"blue"}
      />

      <Circle
        ref={taxesCircleRef}
        opacity={0}
        x={-600}
        size={300}
        fill={"blue"}
      >
        <Txt
          ref={taxesTxtRef}
          text={"Taxes"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={4}
          fill={"white"}
        />
      </Circle>

      <Circle
        ref={depreciationCircleRef}
        opacity={0}
        x={-600}
        size={400}
        fill={"blue"}
      >
        <Txt
          ref={depreciationTxtRef}
          text={"Depreciation"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={4}
          fill={"white"}
        />
      </Circle>

      <Txt
        ref={netProfitTxtRef}
        text={"Net profit"}
        fontSize={70}
        opacity={0}
        y={300}
        fontWeight={500}
        letterSpacing={3}
        fill={"blue"}
      />
    </Layout>
  );

  yield* all(
    annualSalesTxtRef().opacity(1, 2),
    annualSalesCircleRef().size(700, 2),
    annualSalesRsTxtRef().opacity(1, 2),
    annualSalesRsTxtRef().scale(1, 2),
    annualSalesSignal(0, 0).to(260, 2)
  );

  yield* all(annualSalesCircleRef().x(-400, 1), annualSalesTxtRef().x(-400, 1));

  yield* all(
    annualSalesSignal(260, 0).to(26.43, 2),
    annualSalesTxtRef().fontSize(50, 1),
    annualSalesTxtRef().x(-600, 1),
    annualSalesTxtRef().y(250, 1),
    annualSalesTxtRef().opacity(0, 1),
    annualSalesRsTxtRef().fontSize(50, 1),
    annualSalesCircleRef().size(400, 1),
    annualSalesCircleRef().x(-600, 1),
    productionCostCircleRef().x(200, 1),
    productionCostCircleRef().y(-300, 1),
    productionCostCircleRef().opacity(1, 1),
    productionCostSignal(0, 0).to(233.57, 2),
    productionCostTxtRef().opacity(1, 2)
  );

  yield* waitFor(3);

  yield* all(
    productionCostCircleRef().opacity(0, 2),
    productionCostTxtRef().opacity(0, 1),
    annualSalesTxtRef().opacity(0, 2),
    annualSalesCircleRef().size(350, 2),
    annualSalesSignal(26.43, 1).to(22.83, 2),
    taxesCircleRef().opacity(1, 2),
    taxesCircleRef().x(200, 2),
    taxesCircleRef().y(-250, 2),
    depreciationCircleRef().x(200, 2),
    depreciationCircleRef().y(200, 2),
    depreciationCircleRef().opacity(1, 2)
  );

  yield* all(
    taxesCircleRef().opacity(0, 0.2),
    depreciationCircleRef().opacity(0, 0.2),
    annualSalesCircleRef().x(0, 2),
    annualSalesCircleRef().y(-100, 2),
    annualSalesCircleRef().size(600, 2),
    netProfitTxtRef().opacity(1, 2),
    annualSalesRsTxtRef().fontSize(90, 2)
  );

  yield* everythingLayoutRef().scale(1.1, 3);

  // yield* annualSalesSignal(260, 0).to(23, 2);

  yield* everythingLayoutRef().opacity(0, 0.8);

  audioRef().pause();
  audioRef().remove();
});
