import {Audio, Img, Video, makeScene2D,Layout,Circle,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';
import { DDKUGY, agri, criteria } from "../images";

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const ddkguyLayoutRef = createRef<Layout>();
    const agriLayoutRef = createRef<Layout>();
  
    const circleRef = createRef<Circle>();
  
    const ddkguyImgRef = createRef<Img>();
    const agriImgRef = createRef<Img>();
    const criteriaImgRef = createRef<Img>();
  
    const txtRef1 = createRef<Txt>();
    const txtRef2 = createRef<Txt>();
    const performanceTxtRef = createRef<Txt>();
  
    view.fontFamily("outfit");

    view.add(
        <Layout ref={everythingLayoutRef}>
          <Layout
            ref={ddkguyLayoutRef}
            layout
            direction={"column"}
            gap={20}
            alignItems={"center"}
            opacity={0}
            // x={-1380}
            x={-400}
            y={-2730}
          >
            <Img
              src={DDKUGY}
              ref={ddkguyImgRef}
              // x={-450}
              // y={-250}
              width={700}
              stroke={"blue"}
              radius={50}
              lineWidth={10}
            />
            <Txt
              ref={txtRef1}
              text="DDKUGY"
              fill={"blue"}
              fontSize={40}
              fontWeight={500}
              letterSpacing={3}
            />
          </Layout>
    
          <Layout
            ref={agriLayoutRef}
            layout
            direction={"column"}
            gap={20}
            alignItems={"center"}
            opacity={0}
            x={-400}
            y={900}
            zIndex={1}
          >
            <Img
              src={agri}
              ref={agriImgRef}
              // x={450}
              // y={-250}
              width={700}
              stroke={"blue"}
              radius={50}
              lineWidth={10}
            />
            <Txt
              ref={txtRef2}
              text="EDII Combined Business Plan Summary"
              fill={"blue"}
              fontSize={40}
              fontWeight={500}
              letterSpacing={3}
            />
          </Layout>
    
          <Txt
            ref={performanceTxtRef}
            text="Performed well"
            fontSize={80}
            fill={"blue"}
            fontWeight={500}
            letterSpacing={4}
            x={450}
            y={-300}
            opacity={0}
          />
    
          <Circle
            ref={circleRef}
            endAngle={0}
            endArrow
            size={500}
            y={150}
            x={450}
            lineWidth={10}
            stroke={"blue"}
          >
            <Img ref={criteriaImgRef} opacity={0} src={criteria} width={460} />
          </Circle>
        </Layout>
      );
    
      yield* all(
        ddkguyLayoutRef().opacity(1, 1),
        ddkguyLayoutRef().position.y(-250, 1)
      );
    
      yield* waitFor(0.5);
    
      yield* all(agriLayoutRef().opacity(1, 1), agriLayoutRef().position.y(270, 1));
    
      yield* waitFor(2);
    
      yield* performanceTxtRef().opacity(1, 1),
        yield* all(
          circleRef().endAngle(360, 1),
          circleRef().endArrow(false, 1),
          criteriaImgRef().opacity(1, 1)
        );
    
      yield* waitFor(1);
    
      yield* everythingLayoutRef().opacity(0, 1);
    });
    