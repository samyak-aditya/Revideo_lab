import {Audio, Img, Video, makeScene2D,Layout,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';

export default makeScene2D(function* (view) {
    const everythingLayoutRef = createRef<Layout>();
    const txtRef = createRef<Txt>();
  
    const fullText =
      "Most scenes across all videos had\n affirmative answers for quality checks";
  
    const duration = 3.5;
    const charDuration = duration / fullText.length;
    const textSignal = createSignal("");
  
    view.fontFamily("outfit");



    view.add(
        <Layout ref={everythingLayoutRef}>
          <Txt
            ref={txtRef}
            text={textSignal}
            fill={"blue"}
            fontSize={70}
            fontWeight={500}
            letterSpacing={4}
            textAlign={"center"}
          />
        </Layout>
      );
    
      // yield* txtRef().text(
      //   "Most scenes across all videos had affirmative answers for quality checks",
      //   3.5
      // );
    
      for (let i = 0; i < fullText.length; i++) {
        yield* tween(charDuration, () => {
          textSignal(fullText.substring(0, i + 1));
        });
      }
    
      yield* everythingLayoutRef().opacity(0, 0.8);
    });
