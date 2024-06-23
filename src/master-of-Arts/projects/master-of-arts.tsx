import {Audio, Img, Video, makeScene2D
    ,Txt,Circle,
    Layout
} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';
import study from "../images/study.jpg"
import social from "../images/social-science.png"
import global from "../images/global.png"

export default makeScene2D(function* (view) {
    const videoRef = createRef<Img>();
  const logoRef = createRef<Img>();

  yield view.add(
    <>
      <Img
        src={study}
        ref={videoRef}
        width={950}
        height={950}
        // y={-200}
      />
     
    </>,
  );

//   yield* waitFor(1);
  yield* chain(
    all(videoRef().scale(1.2, 1.5)),
    all(videoRef().scale(1, 1),
    videoRef().position.y(-200,1)));
  const fullText = "The Master of Arts in Social Sciences and Globalization";
  const duration = 2;
  const charDuration = duration / fullText.length;

  const titleSignal = createSignal("");
const textRef = createRef<Txt>();

  view.add(
    <Txt
    text={titleSignal}
    ref={textRef}
    fontSize={50}
    fill={"blue"}
    fontWeight={500}
    letterSpacing={3}
    zIndex={1}
    y={400}
  />,
  );
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      titleSignal(fullText.substring(0, i + 1));
      
    });
  }
  
//   yield* ;

  yield* chain(
    all(textRef().opacity(0, 0.5),
  videoRef().opacity(0,0.5),
   
   ) );
   const layOutRef = createRef<Layout>();
const socialRef = createRef<Img>();
const circleRef = createRef<Circle>();
const globalRef = createRef<Img>();

const circle2Ref = createRef<Circle>();

   view.add(
    <Layout ref={layOutRef}>
      <Circle
        ref={circleRef}
        opacity={1} // Initially invisible
        width={450}
        height={450}
        endAngle={360}
        x={0}
        y={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img
          ref={socialRef}
          src={social}
          width={430}
          height={430}
          shadowColor={"#222"}
          shadowBlur={30}
          shadowOffsetX={10}
          shadowOffsetY={10}
          
        />
        </Circle>
        <Circle
        ref={circle2Ref}
        opacity={0} // Initially invisible
        width={450}
        height={450}
        endAngle={360}
        x={0}
        y={0}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img
          ref={globalRef}
          src={global}
          width={430}
        
          height={430}
          shadowColor={"#222"}
          shadowBlur={30}
          shadowOffsetX={10}
          shadowOffsetY={10}
        />
        </Circle>
   

    </Layout>
   )
   yield* chain (
    all(circleRef().scale(1.2, 1.5),
circleRef().position.x(-200,2)),
    all(circle2Ref().scale(1.2, 1.5),
    circle2Ref().position.x(200,2),
    circle2Ref().opacity(1,1.5)),
   )
   yield* layOutRef().scale(1.3, 1.3)
});
