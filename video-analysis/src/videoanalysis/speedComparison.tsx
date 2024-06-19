import {Audio, Img, Video, makeScene2D,Layout,Txt,Rect} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';
import { DDKUGY, weather } from "../images";

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const ddkguyLayoutRef = createRef<Layout>();
    const weatherLayoutRef = createRef<Layout>();
  
    const ddkguyImgRef = createRef<Img>();
    const weatherImgRef = createRef<Img>();
  
    const speedTxtRef = createRef<Txt>();
    const txtRef1 = createRef<Txt>();
    const txtRef2 = createRef<Txt>();
  
    const durationRectRef = createRef<Rect>();
    const durationTxtRef = createRef<Txt>();
  
    view.fontFamily("outfit");

 

    view.add(
        <Txt
          ref={speedTxtRef}
          // text={"Video Production Analysis"}
          fill={"blue"}
          fontSize={90}
          fontWeight={500}
          letterSpacing={4}
        />
      );
    
      yield* speedTxtRef().text("Comparing the speed of progress", 1.5);
    
      yield* speedTxtRef().opacity(0, 0.5);
    
      view.add(
        <Layout ref={everythingLayoutRef} y={-100}>
          <Layout
            ref={ddkguyLayoutRef}
            layout
            direction={"column"}
            gap={40}
            alignItems={"center"}
            opacity={0}
            x={-1380}
          >
            <Img
              src={DDKUGY}
              ref={ddkguyImgRef}
              // x={-450}
              // y={-250}
              width={800}
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
            x={1380}
          >
            <Img
              src={weather}
              ref={weatherImgRef}
              // x={450}
              // y={-250}
              width={800}
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
        </Layout>
      );
    
      yield* all(
        ddkguyLayoutRef().position.x(-450, 1.5),
        ddkguyLayoutRef().opacity(1, 1.5)
      );
    
      yield* waitFor(0.3);
    
      yield* all(
        weatherLayoutRef().position.x(450, 1),
        weatherLayoutRef().opacity(1, 1)
      );
    
      view.add(
        <Rect
          ref={durationRectRef}
          // x={-400}
          opacity={0}
          y={300}
          width={900}
          height={100}
          radius={10}
          fill={"blue"}
        >
          <Txt
            ref={durationTxtRef}
            // text={"Completed in single day"}
            fontSize={60}
            fontWeight={400}
            letterSpacing={3}
            fill={"white"}
          />
        </Rect>
      );
    
      yield* all(
        durationRectRef().opacity(1, 1.5),
        durationTxtRef().text("Completed in a single day", 2)
      );
    
      yield* waitFor(1);
    
      yield* all(
        everythingLayoutRef().opacity(0, 0.8),
        durationRectRef().opacity(0, 0.8)
      );
    });
    