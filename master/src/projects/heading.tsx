import {Audio, Img, Video, makeScene2D,Txt
    ,Circle
} from '@revideo/2d';
import {Center, all, chain, createRef, waitFor} from '@revideo/core';
import university from "../images/UNIVERSITY_BUILDING.jpg"
import art from "../images/art.png"
import social from "../images/social.png"
import globlization from "../images/globlization.png"

export default makeScene2D(function* (view) {
  const logoRef = createRef<Img>();
  const textRef = createRef<Txt>();
  const circleRef = createRef<Circle>();
  const artRef = createRef<Img>();

  const circle2Ref = createRef<Circle>();
  const socialRef = createRef<Img>();

  const circle3Ref = createRef<Circle>();
  const globlizationRef = createRef<Img>();



  view.add(
    <>
    <Img
      width={'50%'}
      ref={logoRef}
      src={university }
      opacity={1}
    />,
    <Circle
        ref={circleRef}
        opacity={0} // Initially invisible
        width={350}
        height={350}
        endAngle={360}
        x={0}
        y={100}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img
          ref={artRef}
          src={art}
          width={300}
          height={300}
         
        />
        </Circle>

        <Circle
        ref={circle2Ref}
        opacity={0} // Initially invisible
        width={350}
        height={350}
        endAngle={360}
        x={0}
        y={100}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img
          ref={socialRef}
          src={social}
          width={330}
          height={330}
         
        />
        </Circle>

        <Circle
        ref={circle3Ref}
        opacity={0} // Initially invisible
        width={350}
        height={350}
        endAngle={360}
        x={0}
        y={100}
        stroke={"#7C47E1"}
        lineWidth={10}
        zIndex={1}
        fill={"white"}
      >
        <Img
          ref={globlizationRef}
          src={globlization}
          width={340}
          
          height={340}
         
        />
        </Circle>
     <Txt
    fontSize={50}
    opacity={0}
    y={450}
    textWrap={true}
    ref={textRef}
    fill={'#7C47E1'}
  >
    California State University, San Bernardino

  </Txt>,
    </>
   
  );

  yield* chain(
    all(logoRef().scale(1.2, 0.5)),
    all(
        circleRef().position.x(-700,1),
        circleRef().opacity(1,0.5)
    ),
    all(
        circle2Ref().position.y(-300,1.2),
        circle2Ref().position.x(-500,1.2),
        
        circle2Ref().opacity(1,0.5)
    ),
    all(
        circle3Ref().position.x(700,1.2),
        circle3Ref().opacity(1,0.8)
    ),
    // logoRef().scale(1, 1),
   all(
    textRef().opacity(1,1.2),
    textRef().scale(1.5, 2),
   )
  );
 
});
