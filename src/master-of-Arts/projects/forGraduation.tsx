import {Txt, Rect, makeScene2D} from '@revideo/2d';
import {all, createRef, waitFor, createSignal, tween} from '@revideo/core';
import {Img} from '@revideo/2d';
import student from '../images/student.png'

export default makeScene2D(function* (view) {
    // Create references for the image, the text, and the rects
    const imageRef = createRef<Img>();
    const rectRef1 = createRef<Rect>();
    const rectRef2 = createRef<Rect>();
    const rectRef3 = createRef<Rect>();
    const bulletSignal1 = createSignal("");
    const bulletSignal2 = createSignal("");
    const bulletSignal3 = createSignal("");
  
    // Add the image to the view
    view.add(
        <Img
            ref={imageRef}
            src={student}
            width={100}
            height={100}
            x={0}
            y={0}
            scale={0}
        />,
    );
  
    // Scale up the image in the center
    yield* all(
        imageRef().scale(5, 1),
        
    );
  
    // Move the image to the left
    yield* imageRef().x(-400, .5);

    // Add the bullet points inside rects
    const bulletPoints = [
        "30 semester units with a 3.0 GPA",
        "Passing some specific writing tasks",
        "Units should be 6000-level or higher"
    ];
    const duration = 1.5;
    const charDuration = duration / bulletPoints[0].length;
  
    view.add(
        <Rect ref={rectRef1} width={600} stroke={"#7C47E1"} lineWidth={"5"} height={100} x={1500} y={-250} fill={"#f0f0f0"} cornerSharpness={"10"}>
            <Txt
                text={bulletSignal1}
                fontSize={30}
                fill={"purple"}
                fontWeight={600}
                letterSpacing={2}
                x={0}
                y={0}
            />
        </Rect>),
        view.add( <Rect ref={rectRef2} stroke={"#7C47E1"} lineWidth={"5"} height={100} fill={"#f0f0f0"} width={600} height={100} x={1500} y={0} fill={"#f0f0f0"} cornerRadius={10}>
            <Txt
                text={bulletSignal2}
                fontSize={30}
                fill={"purple"}
                fontWeight={600}
                letterSpacing={2}
                x={0}
                y={0}
            />
        </Rect>),
        view.add( <Rect ref={rectRef3} stroke={"#7C47E1"} lineWidth={"5"} height={100}  fill={"#f0f0f0"} width={600} height={100} x={1500} y={250} fill={"#f0f0f0"} cornerRadius={10}>
            <Txt
                text={bulletSignal3}
                fontSize={30}
                fill={"purple"}
                fontWeight={600}
                letterSpacing={2}
                x={0}
                y={0}
            />
        </Rect>)
    

    yield* rectRef1().x(400, 2);
    
    
  
    // Typewriter effect for the bullet points
    for (let i = 0; i < bulletPoints[0].length; i++) {
        yield* tween(charDuration, () => {
            bulletSignal1(bulletPoints[0].substring(0, i + 1));
        });
    }

    yield* rectRef2().x(400, 2);

    for (let i = 0; i < bulletPoints[1].length; i++) {
        yield* tween(charDuration, () => {
            bulletSignal2(bulletPoints[1].substring(0, i + 1));
        });
    }
    yield* rectRef3().x(400, 2);

    for (let i = 0; i < bulletPoints[2].length; i++) {
        yield* tween(charDuration, () => {
            bulletSignal3(bulletPoints[2].substring(0, i + 1));
        });
    }
 yield* waitFor(0.6)

 yield* all(
    imageRef().scale(0, 0.3),
     rectRef1().x(1500, 0.3),
     rectRef2().x(1500, 0.3),
     rectRef3().x(1500, 0.3)
    
);
   
});
