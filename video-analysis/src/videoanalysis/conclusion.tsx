import {Audio, Img, Video, makeScene2D,Layout,Circle,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor,tween,createSignal} from '@revideo/core';
import conclusion from "../images/highquality.jpg"
import correct from "../images/all.png"

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const conclusionLayoutRef = createRef<Layout>();
    const circlplanningRef = createRef<Circle>();
    const circl2Ref = createRef<Circle>();
    const circl3Ref = createRef<Circle>();
    const circl4Ref = createRef<Circle>();
    
    const conclusionImgRef = createRef<Img>();
    const conclusionTxtRef = createRef<Txt>();
  
    const correctImgRef = createRef<Img>();
  
    const txtRef = createRef<Txt>();
  
    const fullText =
      "Implementing feedback loops \ncan help maintain high standards";
  
    const duration = 3.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");
  
    view.fontFamily("outfit");

    view.add(
        <Layout ref={everythingLayoutRef}>
        <Layout
        ref={conclusionLayoutRef}
        layout
        direction={"column"}
        x={0}
        y={-150}
        gap={40}
        alignItems={"center"}
        opacity={0}
      >
        <Img
          src={conclusion}
          ref={conclusionImgRef}
          // x={-450}
          // y={-250}
          width={500}
          height={600}
          scale={0}
          // stroke={"blue"}
          radius={50}
          lineWidth={10}
        />
        
      </Layout>
      <Txt
            ref={conclusionTxtRef}
            text={
              "The project showcases efficient video production\n with high-quality standards"
            }
            y={600}
           x={-150}
            fill={"blue"}
            fontSize={50}
            fontWeight={500}
            letterSpacing={3}
          />
           <Img
          src={correct}
          ref={correctImgRef}
          x={0}
          y={0}
          width={1500}
          // stroke={"blue"}
          // radius={50}
          scale={0}
          lineWidth={10}
        />
        <Circle
            ref={circlplanningRef}
            endAngle={0}
            endArrow
            size={200}
            y={-160}
            x={-500}
            lineWidth={5}
            stroke={"blue"}
          ></Circle>
          <Circle
            ref={circl2Ref}
            endAngle={0}
            endArrow
            size={170}
            y={-310}
            x={580}
            lineWidth={5}
            stroke={"blue"}
          ></Circle>
           <Circle
            ref={circl3Ref}
            endAngle={0}
            endArrow
            size={170}
            y={140}
            x={385}
            lineWidth={5}
            stroke={"blue"}
          ></Circle>
           <Circle
            ref={circl4Ref}
            endAngle={0}
            endArrow
            size={150}
            y={280}
            x={-385}
            lineWidth={5}
            stroke={"blue"}
          ></Circle>
      </Layout>
      );
    
      yield* all(
        
        conclusionImgRef().width(700, 0.5),
        conclusionLayoutRef().opacity(1, 0.5),
      
      );
      // yield* waitFor(0.5);
      yield* conclusionTxtRef().position.y(250, 1.5);
     
    
      
      // yield* waitFor(1.5);
      yield* waitFor(1);
      yield*   conclusionImgRef().opacity(0, 0)
      yield*   conclusionTxtRef().opacity(0, 0)
      
      yield* all(
        
        correctImgRef().opacity(1, 1),
        correctImgRef().scale(1, 1).to(1, 1)
      );
      yield* waitFor(1.5);
    
      yield* all(
        circlplanningRef().endAngle(360, 1),
        circlplanningRef().endArrow(false, 1),
      
        circlplanningRef().opacity(0, 1),
       
      );
      yield* all(
        circl2Ref().endAngle(360, 1),
        circl2Ref().endArrow(false, 1),
       
        circl2Ref().opacity(0, 1),
     
      );
      yield* all(
        circl3Ref().endAngle(360, 1),
        circl3Ref().endArrow(false, 1),
    
        circl3Ref().opacity(0, 1),
    
      );
    
      yield* all(
        circl4Ref().endAngle(360, 1),
        circl4Ref().endArrow(false, 1),
      
        circl4Ref().opacity(0, 1),
       
      );
    
      for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
          textSignal(fullText.substring(0, i + 1));
        });
      }
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    
    });