import {Txt, makeScene2D, Polygon} from '@revideo/2d';
import {all, createRef, waitFor, createSignal, tween} from '@revideo/core';

export default makeScene2D(function* (view) {
    // Create references for the heading and the hexagons
    const headingRef = createRef<Txt>();
    const hexagonRef1 = createRef<Polygon>();
    const hexagonRef2 = createRef<Polygon>();
    const hexagonRef3 = createRef<Polygon>();

    // Create signals for the typewriter effect
    const textSignal1 = createSignal("");
    const textSignal2 = createSignal("");
    const textSignal3 = createSignal("");

    const fullText1 = "deep dive into a single discipline";
    const fullText2 = "focus on a theme like social justice";
    const fullText3 = "go into an applied area like GIS or Public History";

    // Add the heading to the view
    view.add(
        <Txt
            ref={headingRef}
            text="Choose a Concentration"
            fontSize={50}
            fill={"purple"}
            fontWeight={600}
            x={0}
            y={-900}
        />
    );

    // Animate the heading from the top to the top of the frame
    yield* headingRef().y(-350, 1);

    // Wait for 1 second
    yield* waitFor(1);

    // Create the hexagons
    const hexagonPoints = [
        {x: 150, y: 0},
        {x: 75, y: 129.9},
        {x: -75, y: 129.9},
        {x: -150, y: 0},
        {x: -75, y: -129.9},
        {x: 75, y: -129.9}
    ];

    // Add and animate the first hexagon with text
    view.add(
        <Polygon
            ref={hexagonRef1}
            sides={6}
            x={-100}
            y={-150}
            fill={"white"}
            stroke={"#7C47E1"} lineWidth={"7"}
            size={330}
            shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        radius={5}
        >
            <Txt
                text={textSignal1}
                fontSize={30}
                fill={"purple"}
                fontWeight={800}
                x={0}
                y={0}
                padding={10}
                textAlign="center"
                textWrap
                width={300}
            />
        </Polygon>
    );

    // Typewriter effect for the first hexagon
    const duration1 = 1.5; // Faster duration
    const charDuration1 = duration1 / fullText1.length;
    for (let i = 0; i < fullText1.length; i++) {
        yield* tween(charDuration1, () => {
            textSignal1(fullText1.substring(0, i + 1));
        });
    }

    // Wait for 1 second before showing the second hexagon
    yield* waitFor(1);

    // Add and animate the second hexagon originating from the first one
    view.add(
        <Polygon
            ref={hexagonRef2}
            sides={6}
            x={50}
            y={110}
            fill={'white'}
            stroke={"#7C47E1"} lineWidth={"7"}
            size={330}
            shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        radius={5}
        >
            <Txt
                text={textSignal2}
                fontSize={30}
                fill={"purple"}
                fontWeight={600}
                x={0}
                y={0}
                padding={10}
                textAlign="center"
                textWrap
                width={300}
            />
        </Polygon>
    );

    // Typewriter effect for the second hexagon
    const duration2 = 1.5; // Faster duration
    const charDuration2 = duration2 / fullText2.length;
    for (let i = 0; i < fullText2.length; i++) {
        yield* tween(charDuration2, () => {
            textSignal2(fullText2.substring(0, i + 1));
        });
    }

    // Wait for 1 second before showing the third hexagon
    yield* waitFor(1);

    // Add and animate the third hexagon originating from the second one
    view.add(
        <Polygon
            ref={hexagonRef3}
            sides={6}
            x={-100}
            y={370}
            fill={"white"}
            stroke={"#7C47E1"} lineWidth={"7"}
            size={330}
            shadowColor={"#555"}
        shadowBlur={30}
        shadowOffsetX={10}
        shadowOffsetY={10}
        radius={5}
        >
            <Txt
                text={textSignal3}
                fontSize={30}
                fill={"purple"}
                fontWeight={800}
                x={0}
                y={0}
                padding={10}
                textAlign="center"
                textWrap
                width={300}
            />
        </Polygon>
    );

    // Typewriter effect for the third hexagon
    const duration3 = 1.5; // Faster duration
    const charDuration3 = duration3 / fullText3.length;
    for (let i = 0; i < fullText3.length; i++) {
        yield* tween(charDuration3, () => {
            textSignal3(fullText3.substring(0, i + 1));
        });
    }

    // Wait for 2 seconds before making everything disappear
    yield* waitFor(1);

    // Fade out the hexagons and heading
    yield* all(
        hexagonRef1().opacity(0, 1),
        hexagonRef2().opacity(0, 1),
        hexagonRef3().opacity(0, 1),
        headingRef().opacity(0, 1)
    );
});

