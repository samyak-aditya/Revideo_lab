import {Audio, Img, Video, makeScene2D,Layout,Circle,Txt,Rect} from '@revideo/2d';
import {all, chain, createRef, waitFor,tween,createSignal} from '@revideo/core';


export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
   
  
    const Rect1Ref = createRef<Rect>();
    const txtRef1 = createRef<Txt>();
  
    const Rect2Ref = createRef<Rect>();
    const txtRef2 = createRef<Txt>();
  
    const Rect3Ref = createRef<Rect>();
    const txtRef3 = createRef<Txt>();
  
 
const txtRef = createRef<Txt>();
    const fullText =
      "ideally from your former professors";
  
    const duration = 3.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");
  
    view.fontFamily("outfit");

    view.add(
        <Layout ref={everythingLayoutRef}>
       
         
            <Rect
            ref={Rect1Ref}
            opacity={0}
            x={-400}
            y={-400}
            width={650}
            height={100}
            radius={10}
            fill={"white"}
            shadowColor={"#555"}
             shadowBlur={30}
             shadowOffsetX={10}
             shadowOffsetY={10}
            stroke={"#7C47E1"}
            lineWidth={10}
         
           lineJoin="round" 
          >
            <Txt
              ref={txtRef1}
              text={"statement of purpose"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"purple"}
            />
          </Rect>
       
            <Rect
            ref={Rect2Ref}
            opacity={0}
            x={-300}
            y={-200}
            width={700}
            height={100}
            radius={10}
            fill={"white"}
            shadowColor={"#555"}
             shadowBlur={30}
             shadowOffsetX={10}
             shadowOffsetY={10}
            stroke={"#7C47E1"}
            lineWidth={10}
         
           lineJoin="round" 
          >
            <Txt
              ref={txtRef2}
              text={"writing sample"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"purple"}
            />
          </Rect>
         
    
         
            <Rect
            ref={Rect3Ref}
            opacity={0}
            x={-300}
            y={0}
            width={700}
            height={100}
            radius={10}
            fill={"white"}
            shadowColor={"#555"}
             shadowBlur={30}
             shadowOffsetX={10}
             shadowOffsetY={10}
            stroke={"#7C47E1"}
            lineWidth={10}
         
           lineJoin="round" 
          >
            <Txt
              ref={txtRef3}
              text={"recommendation letters"}
              fontSize={60}
              fontWeight={400}
              letterSpacing={3}
              fill={"purple"}
            />
          </Rect>
        
    
    
          <Txt
            ref={txtRef}
            text={textSignal}
            fill={"purple"}
            fontSize={70}
            fontWeight={500}
            letterSpacing={4}
            y={350}
            textAlign={"center"}
          />
          </Layout>
    
          
      );
    
      yield* all(
   
        txtRef1().opacity(1, 1),
       Rect1Ref().opacity(1, 1.5),
       Rect1Ref().position.x(0, 1.5),
      );
      // yield* ,
      yield* all(
        
        txtRef2().opacity(1, 1),
        Rect2Ref().opacity(1, 1.5),
        Rect2Ref().position.x(0, 1.5),
      );
    
      yield* all(
      
        txtRef3().opacity(1, 1),
       Rect3Ref().opacity(1, 1.5),
        Rect3Ref().position.x(0, 1.5),
      );
      // yield* 
  
    
      for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
          textSignal(fullText.substring(0, i + 1));
        });
      }
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    });