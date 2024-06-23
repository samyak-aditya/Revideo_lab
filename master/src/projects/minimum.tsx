import {Audio, Img, Video, makeScene2D,Txt} from '@revideo/2d';
import {all, chain, createRef, waitFor,createSignal,tween} from '@revideo/core';


export default makeScene2D(function* (view) {
    
        const fullText = "They look for a minimum GPA of 2.5 overall and 3.0 in your major";
        const duration = 5;
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
          y={0}
        />,
        );
        for (let i = 0; i < fullText.length; i++) {
          yield* tween(charDuration, () => {
            titleSignal(fullText.substring(0, i + 1));
            
          });
        }
});
