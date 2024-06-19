import {Audio, Img, Video, makeScene2D,Layout,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';
import {   DDKUGY,
  weather,
  acko,
  agri, } from '../images';

export default makeScene2D(function* (view) {
  const everythingLayoutRef = createRef<Layout>();
  const ddkguyLayoutRef = createRef<Layout>();
  const weatherLayoutRef = createRef<Layout>();
  const ackoLayoutRef = createRef<Layout>();
  const agriLayoutRef = createRef<Layout>();

  const ddkguyImgRef = createRef<Img>();
  const weatherImgRef = createRef<Img>();
  const ackoImgRef = createRef<Img>();
  const agriImgRef = createRef<Img>();

  const titleTxtRef = createRef<Txt>();
  const severalTxtRef = createRef<Txt>();
  const txtRef1 = createRef<Txt>();
  const txtRef2 = createRef<Txt>();
  const txtRef3 = createRef<Txt>();
  const txtRef4 = createRef<Txt>();
  const eachVideoTxtRef = createRef<Txt>();

  view.fontFamily("outfit");


  view.add(
    <Txt
      ref={titleTxtRef}
      // text={"Video Production Analysis"}
      fill={"blue"}
      fontSize={90}
      fontWeight={500}
      letterSpacing={4}
    />
  );

  yield* titleTxtRef().text("Video Production Analysis", 1.5);

  yield* titleTxtRef().opacity(0, 0.5);

  view.add(
    <Layout ref={everythingLayoutRef}>
      <Txt
        ref={severalTxtRef}
        // text="The project involves several videos"
        fill={"blue"}
        fontSize={80}
        fontWeight={500}
        letterSpacing={4}
      />

      <Layout
        ref={ddkguyLayoutRef}
        layout
        direction={"column"}
        gap={40}
        alignItems={"center"}
        opacity={0}
      >
        <Img
          src={DDKUGY}
          ref={ddkguyImgRef}
          // x={-450}
          // y={-250}
          width={1000}
          stroke={"blue"}
          radius={50}
          lineWidth={10}
        />
        <Txt
          ref={txtRef1}
          text="DDKUGY"
          fill={"blue"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
        />
      </Layout>

      <Layout
        ref={weatherLayoutRef}
        layout
        direction={"column"}
        gap={40}
        alignItems={"center"}
        opacity={0}
      >
        <Img
          src={weather}
          ref={weatherImgRef}
          // x={450}
          // y={-250}
          width={1000}
          stroke={"blue"}
          radius={50}
          lineWidth={10}
        />
        <Txt
          ref={txtRef2}
          text="Weather Data"
          fill={"blue"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
        />
      </Layout>

      <Layout
        ref={ackoLayoutRef}
        layout
        direction={"column"}
        gap={40}
        alignItems={"center"}
        opacity={0}
      >
        <Img
          src={acko}
          ref={ackoImgRef}
          // x={-450}
          // y={250}
          width={1000}
          stroke={"blue"}
          radius={50}
          lineWidth={10}
        />
        <Txt
          ref={txtRef3}
          text="Acko Insurance SBY"
          y={100}
          fill={"blue"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
        />
      </Layout>

      <Layout
        ref={agriLayoutRef}
        layout
        direction={"column"}
        gap={40}
        alignItems={"center"}
        opacity={0}
      >
        <Img
          src={agri}
          ref={agriImgRef}
          // x={450}
          // y={250}
          width={1000}
          stroke={"blue"}
          radius={50}
          lineWidth={10}
        />
        <Txt
          ref={txtRef4}
          text="EDII Combined Business Plan Summary"
          y={300}
          fill={"blue"}
          fontSize={50}
          fontWeight={500}
          letterSpacing={3}
        />
      </Layout>

      <Txt
        ref={eachVideoTxtRef}
        text={
          "Multiple scenes covering various aspects of their respective topics"
        }
        y={570}
        fill={"blue"}
        fontSize={50}
        fontWeight={500}
        letterSpacing={3}
      />
    </Layout>
  );
  yield* severalTxtRef().text("The project involves several videos", 2);

  yield* severalTxtRef().opacity(0, 0.5);

  yield* all(ddkguyLayoutRef().opacity(1, 1));

  yield* all(
    ddkguyLayoutRef().opacity(0, 0.5),
    weatherLayoutRef().opacity(1, 1)
  );

  yield* all(weatherLayoutRef().opacity(0, 0.5), ackoLayoutRef().opacity(1, 1));

  yield* waitFor(1);

  yield* all(ackoLayoutRef().opacity(0, 0.5), agriLayoutRef().opacity(1, 1));

  yield* waitFor(2);

  yield* agriLayoutRef().opacity(0, 0.5);

  yield* all(
    ddkguyLayoutRef().position.x(-450, 0).to(-400, 0.5),
    ddkguyLayoutRef().position.y(-300, 0).to(-220, 0.5),
    ddkguyImgRef().width(700, 0.5),
    ddkguyLayoutRef().opacity(1, 0.5),
    txtRef1().opacity(0, 0),

    weatherLayoutRef().position.x(450, 0).to(400, 0.5),
    weatherLayoutRef().position.y(-300, 0).to(-220, 0.5),
    weatherImgRef().width(700, 0.5),
    weatherLayoutRef().opacity(1, 0.5),
    txtRef2().opacity(0, 0),

    ackoLayoutRef().position.x(-450, 0).to(-400, 0.5),
    ackoLayoutRef().position.y(200, 0).to(250, 0.5),
    ackoImgRef().width(700, 0.5),
    ackoLayoutRef().opacity(1, 0.5),
    txtRef3().opacity(0, 0),

    agriLayoutRef().position.x(350, 0).to(400, 0.5),
    agriLayoutRef().position.y(200, 0).to(250, 0.5),
    agriImgRef().width(700, 0.5),
    agriLayoutRef().opacity(1, 0.5),
    txtRef4().opacity(0, 0)
  );

  yield* eachVideoTxtRef().position.y(475, 1.5);

  yield* waitFor(1.5);

  yield* everythingLayoutRef().opacity(0, 0.8);
});
