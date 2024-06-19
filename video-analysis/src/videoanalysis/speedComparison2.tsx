import {Audio, Img, Video, makeScene2D,Layout,Txt,Rect} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';
import { acko, DDKUGY, agri } from "../images";

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const ackoLayoutRef = createRef<Layout>();
    const agriLayoutRef = createRef<Layout>();
  
    const ackoImgRef = createRef<Img>();
    const agriImgRef = createRef<Img>();
  
    const txtRef1 = createRef<Txt>();
    const txtRef2 = createRef<Txt>();
  
    const ackoDurationRectRef = createRef<Rect>();
    const ackoDurationTxtRef = createRef<Txt>();
  
    const agriDurationRectRef = createRef<Rect>();
    const agriDurationTxtRef = createRef<Txt>();
  
    view.fontFamily("outfit");


    view.add(
        <Layout ref={everythingLayoutRef}>
          <Layout
            ref={ackoLayoutRef}
            layout
            direction={"column"}
            gap={40}
            alignItems={"center"}
            opacity={0}
            x={-1380}
            y={-200}
            zIndex={1}
          >
            <Img
              src={acko}
              ref={ackoImgRef}
              // x={-450}
              // y={-250}
              width={800}
              stroke={"blue"}
              radius={50}
              lineWidth={10}
            />
            <Txt
              ref={txtRef1}
              text="Acko Insurance SBY"
              fill={"blue"}
              fontSize={50}
              fontWeight={500}
              letterSpacing={3}
            />
          </Layout>
    
          <Rect
            ref={ackoDurationRectRef}
            opacity={0}
            x={-400}
            y={-350}
            width={500}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={ackoDurationTxtRef}
              // text={"6 days"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
    
          <Layout
            ref={agriLayoutRef}
            layout
            direction={"column"}
            gap={40}
            alignItems={"center"}
            opacity={0}
            x={1380}
            y={200}
            zIndex={1}
          >
            <Img
              src={agri}
              ref={agriImgRef}
              // x={450}
              // y={-250}
              width={800}
              stroke={"blue"}
              radius={50}
              lineWidth={10}
            />
            <Txt
              ref={txtRef2}
              text="EDII Combined Business Plan Summary"
              fill={"blue"}
              fontSize={50}
              fontWeight={500}
              letterSpacing={3}
            />
          </Layout>
    
          <Rect
            ref={agriDurationRectRef}
            opacity={0}
            x={400}
            y={250}
            width={500}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={agriDurationTxtRef}
              // text={"4 days"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
        </Layout>
      );

      yield* all(
        ackoLayoutRef().position.x(-450, 1.5),
        ackoLayoutRef().opacity(1, 1.5)
      );
    
      yield* waitFor(0.5);
    
      yield* all(
        ackoDurationRectRef().opacity(1, 1.5),
        ackoDurationRectRef().position.x(300, 1.5),
        ackoDurationTxtRef().text("6 days", 1.5)
      );
    
      yield* all(agriLayoutRef().position.x(450, 1), agriLayoutRef().opacity(1, 1));
    
      yield* waitFor(1.5);
    
      yield* all(
        agriDurationRectRef().opacity(1, 1.5),
        agriDurationRectRef().position.x(-300, 1.5),
        agriDurationTxtRef().text("4 days", 1.5)
      );
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    });
    