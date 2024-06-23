import {Audio, Img, Video, makeScene2D,Txt,Polygon} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';
import animation from "../images/Animation.mp4";

export default makeScene2D(function* (view) {
  const fullText = "To get into the program";
  const duration = 2;
  const charDuration = duration / fullText.length;

  const titleSignal = createSignal("");
const textRef = createRef<Txt>();

  view.add(
    <Txt
    text={titleSignal}
    ref={textRef}
    fontSize={50}
    fill={"purple"}
    fontWeight={600}
    letterSpacing={3}
    zIndex={1}
    y={-400}
  />,
  );
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      titleSignal(fullText.substring(0, i + 1));
      
    });
  }

  const ref = createRef<Polygon>();
  const ref1 = createRef<Polygon>();
  const ref2 = createRef<Polygon>();

view.add(
  <>
  <Polygon
        ref={ref}
        opacity={0}
        sides={4}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       fill={"white"}
       shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
       stroke={"#7C47E1"}
       scale={0}
       alignContent={"center"}
       radius={25}
       x={0}
       y={-50}
       zIndex={1}
      >
        <Txt
             text={"bachelor's\n degree"}
             alignContent={"center"}
             fontSize={52}
             fontWeight={700}
             fill={"purple"}
     />
      </Polygon>

<Polygon
        ref={ref1}
        opacity={0}
        sides={4}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       fill={"white"}
       shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       radius={25}
       x={0}
       y={50}
       zIndex={1}
      >
         <Txt
             text={"relevant\ndiscipline"}
             alignContent={"center"}
             fontSize={52}
             fontWeight={700}
             fill={"purple"}
     />
      </Polygon>
      <Polygon
        ref={ref2}
        opacity={0}
        sides={4}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       fill={"white"}
       shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       radius={25}
       x={0}
       y={50}
       zIndex={1}
      >
         <Txt
             text={" related \ncoursework"}
             alignContent={"center"}
             alignSelf={"center"}
             fontSize={52}
             fontWeight={700}
             fill={"purple"}
     />
      </Polygon>

      </>
      
)
yield* all(
  ref().scale(1,1),
  ref().opacity(1,1),
)
yield* all(
  ref1().scale(1,1),
  ref1().opacity(1,1),
  ref1().position.x(-300,1.5),
  ref1().position.y(250,1.5),
  
)
yield* all(
  ref2().scale(1,1),
  ref2().opacity(1,1),
  ref2().position.x(300,1.5),
  ref2().position.y(250,1.5),

)


});
