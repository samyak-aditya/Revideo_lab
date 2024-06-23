import {Audio, Img, Video, makeScene2D,Circle,Rect,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor,easeInCubic, easeOutCubic} from '@revideo/core';


export default makeScene2D(function* (view) {
  const circleRef = createRef<Circle>();
  const smallcircleRef = createRef<Circle>();

  const ref = createRef<Circle>();
  const rectRefs = [
    createRef<Rect>(),
    createRef<Rect>(),
    createRef<Rect>(),
    
];
const tickRefs = [
  createRef<Img>(),
  createRef<Img>(),
  createRef<Img>(),

];

  const bulletPoints = [
    "go into teaching",
    "work with non-profits",
    "pursue advanced studies",
    
  ];



  view.add(
<>
    <Circle
    ref={circleRef}
    opacity={0} // Initially invisible
    width={550}
    height={550}
    endAngle={360}
    x={-650}
    y={0}
    // stroke={"#7C47E1"}
    lineWidth={10}
    zIndex={0}
    fill={"white"}
    shadowColor={"#555"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
    >
     <Circle
      ref={smallcircleRef}
      opacity={0} // Initially invisible
      width={400}
      height={400}
      endAngle={360}
      x={0}
      y={0}
      // stroke={"#7C47E1"}
      lineWidth={10}
      zIndex={1}
      fill={"white"}
      shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
     ><Txt
             text={"Ideal"}
             fontSize={58}
             fontWeight={700}
             fill={"purple"}
     /></Circle>
    </Circle>

    <Circle
      ref={ref}
      size={900}
      stroke={'#7C47E1'}
      x={-700}
      lineWidth={8}
      endAngle={270}
   opacity={0}
     rotation={230}
    />,

{bulletPoints.map((point, index) => (
     <Rect
        //  key={index}
         ref={rectRefs[index]}
         x={1500}
         y={-300 + index * 280}
         width={740}
         height={150}
         shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        fill={"white"}
         stroke={"#7C47E1"}
         lineWidth={10}
         opacity={1}
         radius={15}
         zIndex={5}
        
     >
         <Img
             ref={tickRefs[index]}
             src="https://cdn-icons-png.flaticon.com/512/4315/4315445.png"  // Replace with your tick mark image URL
             x={-330}
             y={0}
             width={60}
             height={60}
         />
         <Txt
             text={point}
             fontSize={42}
             fontWeight={700}
             fill={"purple"}
             x={35}
             y={0}
             
         />
     </Rect>
 ))}
    </>
  );
  yield* chain(
    all(circleRef().opacity(1,0.8), smallcircleRef().opacity(1,0.8)),
    ref().opacity(1,0.5),
    all(ref().start(0, 0.5), ref().rotation(230, 0.5),
  ref().end(1,0.5)),
    // ref().start(0).end(1),
  );

  // yield* 

 

   // Animation for bullet points
 for (let i = 0; i < rectRefs.length; i++) {
  yield* all(
      rectRefs[i]().opacity(1, 0.5),
      rectRefs[i]().position.x(view.width, 0.5  ),
      
  );

  yield* all(
      rectRefs[i]().position.x(150, 1),
  
  );
}


  // yield* all(ref().end(1, 1), ref().rotation(360, 1, easeOutCubic));


});
