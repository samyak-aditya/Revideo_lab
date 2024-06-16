import { Audio, makeScene2D, Txt } from "@revideo/2d";
import { createRef, createSignal, tween, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const audioRef = createRef<Audio>();
  const fullText = "There are a few exclusions to be aware of";
  const duration = 2; // total duration for the entire text animation
  const charDuration = duration / fullText.length; // duration per character

  // Create a signal to hold the text
  const textSignal = createSignal("");

  view.fontFamily("outfit");

  view.add(
    <Audio ref={audioRef} src={"/ackoscene7.mp3"} play={true} time={0} />
  );

  view.add(
    <Txt
      text={textSignal}
      fontSize={80}
      fontWeight={500}
      fill={"#7C47E1"}
      // justifyContent="center"
      // alignContent="center"
    />
  );

  // Tween the text signal
  for (let i = 0; i < fullText.length; i++) {
    yield* tween(charDuration, () => {
      textSignal(fullText.substring(0, i + 1));
    });
  }
  yield* waitFor(1);
});
