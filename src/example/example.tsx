import { Audio, Img, Video, makeScene2D } from "@revideo/2d";
import { all, chain, createRef, waitFor } from "@revideo/core";

export default makeScene2D(function* (view) {
  const logoRef = createRef<Img>();
  const audioRef = createRef<Audio>();

  view.add(
    <>
      <Video
        src={"https://revideo-example-assets.s3.amazonaws.com/stars.mp4"}
        play={true}
        size={["100%", "100%"]}
        png={false}
      />
      <Audio
        ref={audioRef}
        src={"/manpower-2-new-bgm.mp3"}
        play={true}
        time={0}
      />
    </>
  );

  yield* waitFor(1);

  view.add(
    <Img
      width={"1%"}
      ref={logoRef}
      src={"/images/acko-life-insurance-sby-images/initialAvatar.png"}
    />
  );

  yield* chain(
    all(logoRef().scale(40, 2), logoRef().rotation(360, 2)),
    logoRef().scale(60, 1)
  );
});
