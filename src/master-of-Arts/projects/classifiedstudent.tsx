import {Audio, Img, Video, makeScene2D,Circle,Txt,Line,Spline, Knot} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';

export default makeScene2D(function* (view) {
    const circleRef = createRef<Circle>();
  const circle1Ref = createRef<Circle>();
  const circle2Ref = createRef<Circle>();
  const circle3Ref = createRef<Circle>();
  const circle4Ref = createRef<Circle>();
  const circle5Ref = createRef<Circle>();
//   const line1Ref = createRef<Line>();
//   const spline = createRef<Spline>();

const txtRef = createRef<Txt>();
    const fullText =
      "Once you're in,\n you move to the\n next stage";
  
    const duration = 2.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");

  view.add(
<>
<Circle
      ref={circleRef}
      opacity={0} // Initially invisible
      width={800}
      height={1000}
      endAngle={360}
      x={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
    //   shadowColor={"#555"}
    //     shadowBlur={30}
    //     shadowOffsetX={10}
    //     shadowOffsetY={10}
        lineDash={[15,10]}
     ><Txt
     ref={txtRef}
     text={textSignal}
     fill={"purple"}
     fontSize={58}
     fontWeight={700}
     letterSpacing={4}
     y={-150}
     textAlign={"center"}
   />
   </Circle>


<Circle
      ref={circle1Ref}
      opacity={0} // Initially invisible
      width={300}
      height={300}
      endAngle={360}
      x={0}
      scale={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"classified\nstudent"}
             fontSize={45}
             fontWeight={700}
             fill={"purple"}
     /></Circle>

<Circle
      ref={circle2Ref}
      opacity={0} // Initially invisible
      width={300}
      height={300}
      endAngle={360}
      x={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"graduate\nadvisor"}
             fontSize={45}
             fontWeight={700}
             fill={"purple"}
     /></Circle>
     <Circle
      ref={circle3Ref}
      opacity={0} // Initially invisible
      width={300}
      height={300}
      endAngle={360}
      x={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"nine\nsemester\n3.0 GPA,"}
             fontSize={45}
             fontWeight={700}
             fill={"purple"}
     /></Circle>
     <Circle
      ref={circle4Ref}
      opacity={0} // Initially invisible
      width={300}
      height={300}
      endAngle={360}
      x={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"Graduate\nWriting\nRequirement"}
             fontSize={42}
             fontWeight={700}
             fill={"purple"}
     /></Circle>

<Circle
      ref={circle5Ref}
      opacity={0} // Initially invisible
      width={300}
      height={300}
      endAngle={360}
      x={0}
      y={500}
      stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"study\nprogram\napproved"}
             fontSize={44}
             fontWeight={700}
             fill={"purple"}
     /></Circle>
       
</>
  );
  yield* all(
    circleRef().opacity(1,0.5),
    
  )
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }
  yield* chain(
    all(
        circle1Ref().scale(1,1.5),
        circle1Ref().opacity(1,1.5),
        circle1Ref().position.x(-600,1.5),
        circle1Ref().position.y(300,1.5)
// line1Ref().opacity(1,1)
    ),
    all(
        circle2Ref().scale(1,1.5),
        circle2Ref().opacity(1,1.5),
        circle2Ref().position.x(-450,2),
        circle2Ref().position.y(-120,2)
// line1Ref().opacity(1,1)
    ),
    all(
        circle3Ref().scale(1,2),
        circle3Ref().opacity(1,2),
        circle3Ref().position.x(0,2),
        circle3Ref().position.y(-250,2)
// line1Ref().opacity(1,1)
    ),
    all(
        circle4Ref().scale(1,2),
        circle4Ref().opacity(1,2),
        circle4Ref().position.x(600,2),
        circle4Ref().position.y(300,2),
        waitFor(1.5)
// line1Ref().opacity(1,1)
    ),
    
    all(
        circle5Ref().scale(1,2.5),
        circle5Ref().opacity(1,2.5),
        circle5Ref().position.x(450,2.5),
        circle5Ref().position.y(-120,2.5)
// line1Ref().opacity(1,1)
    )
  )
//   yield* spline().end(1, 1.5);
//   yield* spline().start(1, 1.5).to(0.5, 1);
//   yield* spline().end(0.5, 1);
//   yield* all(spline().start(0, 1.5), spline().end(1, 1.5));

//   yield* chain(
//     all(logoRef().scale(40, 2), logoRef().rotation(360, 2)),
//     logoRef().scale(60, 1),
//   );
});
