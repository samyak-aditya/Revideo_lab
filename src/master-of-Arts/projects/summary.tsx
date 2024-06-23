import {Txt, Rect, makeScene2D} from '@revideo/2d';
import {all, createRef, waitFor, createSignal, tween} from '@revideo/core';

export default makeScene2D(function* (view) {
    // Create references for the rectangle and the text
    const rectRef = createRef<Rect>();
    const textSignal = createSignal("");

    const fullText = "This program is versatile and prepares you well for diverse professional and academic paths.";

    // Add the rectangle to the view
    view.add(
        <Rect
            ref={rectRef}
            width={0}
            height={0}
            x={0}
            y={0}
            fill={"#f0f0f0"}
            cornerRadius={10}
            stroke={"#7C47E1"}
            lineWidth={7}
            shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        radius={5}
        />
    );

    // Scale the rectangle in the center of the screen
    yield* rectRef().width(900, 0.7);
    yield* rectRef().height(250, 0.7);

   

    // Add the text inside the rectangle with a typewriter effect
    view.add(
        <Txt
            text={textSignal}
            fontSize={30}
            fill={"purple"}
            fontWeight={600}
            x={0}
            y={0}
            padding={10}
            textAlign="center"
            textWrap
            width={880} // Ensures the text stays within the rectangle
        />
    );

    // Typewriter effect for the text
    const duration = 4; // Faster duration
    const charDuration = duration / fullText.length;
    for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
            textSignal(fullText.substring(0, i + 1));
        });
    }

    // Wait for 3 seconds
    yield* waitFor(1);

    // Make everything disappear with a fade-out effect
    yield* all(
        rectRef().opacity(0, 0.5),
        tween(1, () => {
            textSignal("");
        })
    );
});
