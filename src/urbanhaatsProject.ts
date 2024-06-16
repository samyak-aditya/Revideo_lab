import {makeProject} from '@revideo/core';

import { Heading, craftindustry, platform,research,study, severalfactors, amenitis, studyconcludes } from "./urban-haats"
import carftproductAudio from "./urban-haats/output_tts.mp3"

export default makeProject({
  scenes: [Heading, craftindustry, platform, research,study, severalfactors, amenitis, studyconcludes],
  audio: carftproductAudio
});
