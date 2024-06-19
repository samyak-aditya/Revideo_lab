import {Audio, Img, Video, makeScene2D,Layout,Circle,Txt,Rect} from '@revideo/2d';
import {all, chain, createRef, waitFor,tween,createSignal} from '@revideo/core';
import quality from "../images/quality.png"
import template from "../images/template.png"
import planning from "../images/planning.png"
import speed from "../images/speed.png"

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const circleRef = createRef<Circle>();
    const circlequalityRef = createRef<Circle>();
    const circltemplateRef = createRef<Circle>();
    const circlplanningRef = createRef<Circle>();
    // const myCircle = createRef<Circle>();
    const speedImgRef = createRef<Img>();
    const qualityImgRef = createRef<Img>();
    const templateImgRef = createRef<Img>();
    const planningImgRef = createRef<Img>();
  
    const ackoDurationRectRef = createRef<Rect>();
    const txtRef1 = createRef<Txt>();
  
    const ackoDurationRect1Ref = createRef<Rect>();
    const txtRef2 = createRef<Txt>();
  
    const ackoDurationRect2Ref = createRef<Rect>();
    const txtRef3 = createRef<Txt>();
  
    const ackoDurationRect3Ref = createRef<Rect>();
    const txtRef4 = createRef<Txt>();
    const txtRef = createRef<Txt>();

    const fullText =
      "Implementing feedback loops \ncan help maintain high standards";
  
    const duration = 3.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");
  
    view.fontFamily("outfit");

    view.add(
        <Layout ref={everythingLayoutRef}>
        <Circle
            ref={circleRef}
            endAngle={0}
            endArrow
            size={200}
            y={-400}
            x={-500}
            lineWidth={5}
            stroke={"blue"}
          >
            <Img ref={speedImgRef} opacity={0} src={speed} width={180} />
            <Rect
            ref={ackoDurationRectRef}
            opacity={0}
            x={-500}
            y={0}
            width={650}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={txtRef1}
              text={"Boost speed & quality"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          </Circle>
          <Circle
            ref={circlequalityRef}
            endAngle={0}
            endArrow
            size={200}
            y={-220}
            x={500}
            lineWidth={5}
            stroke={"blue"}
          >
            <Img ref={qualityImgRef} opacity={0} src={quality} width={190} />
            <Rect
            ref={ackoDurationRect1Ref}
            opacity={0}
            x={-500}
            y={0}
            width={700}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={txtRef2}
              text={"standardize the process"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          </Circle>
    
          <Circle
            ref={circltemplateRef}
            endAngle={0}
            endArrow
            size={200}
            y={-40}
            x={-500}
            lineWidth={5}
            stroke={"blue"}
          >
            <Img ref={templateImgRef} opacity={0} src={template} width={180} />
            <Rect
            ref={ackoDurationRect2Ref}
            opacity={0}
            x={-500}
            y={0}
            width={650}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={txtRef3}
              text={"use template"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          </Circle>
    
          <Circle
            ref={circlplanningRef}
            endAngle={0}
            endArrow
            size={200}
            y={140}
            x={500}
            lineWidth={5}
            stroke={"blue"}
          >
            <Img ref={planningImgRef} opacity={0} src={planning} width={180} />
            <Rect
            ref={ackoDurationRect3Ref}
            opacity={0}
            x={1500}
            y={0}
            width={650}
            height={100}
            radius={10}
            fill={"blue"}
          >
            <Txt
              ref={txtRef4}
              text={"  pre-planning"}
              fontSize={60}
            
              fontWeight={400}
              letterSpacing={3}
              fill={"white"}
            />
          </Rect>
          </Circle>
    
          <Txt
            ref={txtRef}
            text={textSignal}
            fill={"blue"}
            fontSize={70}
            fontWeight={500}
            letterSpacing={4}
            y={350}
            textAlign={"center"}
          />
          </Layout>
    
          
      );
    
      yield* all(
        circleRef().endAngle(360, 1),
        circleRef().endArrow(false, 1),
        speedImgRef().opacity(1, 1),
        txtRef1().opacity(1, 1),
        ackoDurationRectRef().opacity(1, 1.5),
        ackoDurationRectRef().position.x(500, 1.5),
      );
      // yield* ,
      yield* all(
        circlequalityRef().endAngle(360, 1),
        circlequalityRef().endArrow(false, 1),
        qualityImgRef().opacity(1, 1),
        txtRef2().opacity(1, 1),
        ackoDurationRect1Ref().opacity(1, 1.5),
        ackoDurationRect1Ref().position.x(-500, 1.5),
      );
    
      yield* all(
        circltemplateRef().endAngle(360, 1),
        circltemplateRef().endArrow(false, 1),
        templateImgRef().opacity(1, 1),
        txtRef3().opacity(1, 1),
        ackoDurationRect2Ref().opacity(1, 1.5),
        ackoDurationRect2Ref().position.x(500, 1.5),
      );
      // yield* 
      yield* all(
        circlplanningRef().endAngle(360, 1),
        circlplanningRef().endArrow(false, 1),
        planningImgRef().opacity(1, 1),
        txtRef4().opacity(1, 1),
        ackoDurationRect3Ref().opacity(1, 1.5),
        ackoDurationRect3Ref().position.x(-500, 1.5),
      );
    
      for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
          textSignal(fullText.substring(0, i + 1));
        });
      }
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    });