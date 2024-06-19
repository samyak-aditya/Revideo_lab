import {Audio, Img, Video, makeScene2D,Layout,Txt,Circle} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';
import scene from "../images/scene5.png"

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const txtRef = createRef<Txt>();
  
    const fullText =
      "Scenes were divided logically \nacross all videos";
  
    const duration = 3.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");
  
    const criteriaImgRef = createRef<Img>();
    const circleRef = createRef<Circle>();
    view.fontFamily("outfit");
    view.add(
        <Layout ref={everythingLayoutRef}>
          <Txt
            ref={txtRef}
            text={textSignal}
            fill={"blue"}
            fontSize={70}
            fontWeight={500}
            y={-400}
            opacity={5}
            letterSpacing={4}
            textAlign={"center"}
          />
           <Circle
            ref={circleRef}
            endAngle={0}
            endArrow
            size={1500}
            y={450}
            x={0}
            lineWidth={10}
            stroke={"blue"}
            zIndex={1}
          >
          
          </Circle>
          <Img ref={criteriaImgRef} opacity={0} src={scene} width={1500} height={1000} scale={0} y={0}/>
          
        </Layout>
      );
    
     
    
      for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
          textSignal(fullText.substring(0, i + 1));
        });
      }
    
      yield* all(
     
        criteriaImgRef().opacity(1, 1),
        criteriaImgRef().scale(1, 1).to(1, 1)
      );
    
      yield* all(
        circleRef().endAngle(360, 1),
        circleRef().endArrow(false, 1),
        
      );
      yield* waitFor(0.8);
    
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    });