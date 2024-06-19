import {Audio, Img, Video, makeScene2D,Layout,Rect,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';
import team from "../images/team.jpeg"

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();

    const teamImgRef = createRef<Img>();
  
    const ackoDurationRectRef = createRef<Rect>();
    const ackoDurationTxtRef = createRef<Txt>();
  
    const ackoDurationRect1Ref = createRef<Rect>();
    const ackoDurationTxt1Ref = createRef<Txt>();
  
    const ackoDurationRect2Ref = createRef<Rect>();
    const ackoDurationTxt2Ref = createRef<Txt>();

    view.add(
        <Layout ref={everythingLayoutRef}>
        <Layout
            // ref={ackoLayoutRef}
            layout
            direction={"column"}
            gap={40}
            alignItems={"center"}
            opacity={1}
            x={-430}
            y={0}
            zIndex={1}
          >
            <Img
              src={team}
              ref={teamImgRef}
              // x={-450}
              // y={-250}
              width={800}
              stroke={"blue"}
              radius={50}
              lineWidth={10}
              scale={0}
            />
          </Layout>
          <Rect
            ref={ackoDurationRectRef}
            opacity={0}
            x={-400}
            y={-250}
            width={500}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={ackoDurationTxtRef}
              text={"3-4 Video/week"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          <Rect
            ref={ackoDurationRect1Ref}
            opacity={0}
            x={-800}
            y={0}
            width={850}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={ackoDurationTxt1Ref}
              text={"maintain the current quality"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          <Rect
            ref={ackoDurationRect2Ref}
            opacity={0}
            x={-800}
            y={230}
            width={500}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={ackoDurationTxt2Ref}
              text={"thoroughness"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          </Layout>
          
      );
      yield* all(
        // circleRef().endAngle(360, 1),
        // circleRef().endArrow(false, 1),
        // criteriaImgRef().opacity(1, 1),
        teamImgRef().scale(1, 1).to(1, 1)
      );
      yield* waitFor(1);
    
      yield* all(
        ackoDurationRectRef().opacity(1, 1.5),
        ackoDurationRectRef().position.x(300, 1.5),
        ackoDurationTxtRef().text("3-4 Video/week", 1.5)
      );
    
      yield* all(
        ackoDurationRect1Ref().opacity(1, 1.5),
        ackoDurationRect1Ref().position.x(450, 1.5),
        ackoDurationTxt1Ref().text("maintain the current quality", 1.5)
      );
      // yield* waitFor(0.5);
      yield* all(
        ackoDurationRect2Ref().opacity(1, 1.5),
        ackoDurationRect2Ref().position.x(300, 1.5),
        ackoDurationTxt2Ref().text("thoroughness", 1.5)
      );
    });