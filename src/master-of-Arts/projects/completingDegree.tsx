import {Txt, Rect, makeScene2D} from '@revideo/2d';
import {all, createRef, waitFor, createSignal, tween} from '@revideo/core';
import {Img} from '@revideo/2d';
import exam from '../images/exam.jpg';
import thesis from '../images/thesis.jpg';

export default makeScene2D(function* (view) {
    // Create references for the images, the heading, and the text
    const headingRef = createRef<Txt>();
    const leftImageRef = createRef<Img>();
    const rightImageRef = createRef<Img>();
    const rectRef1 = createRef<Rect>();
    const rectRef2 = createRef<Rect>();
    const textSignal = createSignal("");

    // Add the heading to the view
    view.add(
        <Txt
            ref={headingRef}
            text="Completing Your Degree"
            fontSize={50}
            fill={"purple"}
            fontWeight={600}
            x={0}
            y={-900}
        />
    );

    // Animate the heading from the top to the top of the frame
    yield* headingRef().y(-300, 1);

    // Wait for 1 second
    yield* waitFor(1);

    // Add and animate the left image inside a square
    view.add(
        <Rect ref={rectRef1}
         stroke={"#7C47E1"} 
         shadowColor={"#555"}
         shadowBlur={30}
         shadowOffsetX={10}
         shadowOffsetY={10}
         radius={5}
         lineWidth={"10"} width={350} height={350} x={-1500} y={0} fill={"#f0f0f0"} cornerRadius={10}>
            <Img
                ref={leftImageRef}
                src={exam}
                width={320}
                height={320}
                x={0}
                y={0}
                zIndex={5}
            />
        </Rect>
    );

    yield* rectRef1().x(-300, 3);

    // Wait for 1 second
    yield* waitFor(1);

    // Add and animate the right image inside a square
    view.add(
        <Rect ref={rectRef2}
        shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        radius={5}
         stroke={"#7C47E1"} lineWidth={"10"} width={350} height={350} x={1500} y={0} fill={"#f0f0f0"} cornerRadius={10}>
            <Img
                ref={rightImageRef}
                src={thesis}
                width={320}
                height={320}
                x={0}
                y={0}
            />
        </Rect>
    );

    yield* rectRef2().x(300, 2);

    // Wait for 1 second
    yield* waitFor(1);

    // Add the text below the right square with a typewriter effect
    const fullText = "Requires faculty approval";
    const duration = 2;
    const charDuration = duration / fullText.length;

    const textRef = createRef<Txt>();
    view.add(
        <Txt
            ref={textRef}
            text={textSignal}
            fontSize={35}
            fill={"purple"}
            fontWeight={800}
            letterSpacing={2}
            x={300}
            y={250}
        />
    );

    for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
            textSignal(fullText.substring(0, i + 1));
        });
    }

    // Wait for 1 second before making everything disappear
    yield* waitFor(0.5);

    // Make everything disappear
    yield* all(
        tween(1, () => headingRef().opacity(0)),
        tween(1, () => rectRef1().opacity(0)),
        tween(1, () => rectRef2().opacity(0)),
        tween(1, () => textRef().opacity(0))
    );
});
