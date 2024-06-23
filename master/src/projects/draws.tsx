import {Audio, Img, Video, makeScene2D,Polygon} from '@revideo/2d';
import {Center, all, chain, createRef, waitFor} from '@revideo/core';
import anthorpology from '../images/Anthropology.png'
import economics from "../images/economics.png"
import geography from "../images/grography.png"
import History from "../images/History.png"
import political from "../images/political-science.png"
import sociology from "../images/sociology.png"

export default makeScene2D(function* (view) {
    
    const ref = createRef<Polygon>();
    const ImageRef = createRef<Img>();

    const ref1 = createRef<Polygon>();
    const Image1Ref = createRef<Img>();

    const ref2 = createRef<Polygon>();
    const Image2Ref = createRef<Img>();

    const ref3 = createRef<Polygon>();
    const Image3Ref = createRef<Img>();

    const ref4 = createRef<Polygon>();
    const Image4Ref = createRef<Img>();

    
    const ref5 = createRef<Polygon>();
    const Image5Ref = createRef<Img>();

    view.add(
      <>
      <Polygon
        ref={ref}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       
      
       opacity={0}
       x={-480}
       y={120}
       zIndex={1}
      > <Img
      ref={ImageRef}
      src={anthorpology}
      width={410}
      shadowColor={"#222"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={470}
     /> </Polygon>
      <Polygon
        ref={ref1}
        opacity={0}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       x={-250}
       y={-280}
       zIndex={1}
      > <Img
      ref={Image1Ref}
      src={economics}
      width={420}
      shadowColor={"#000"}
      shadowBlur={20}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={480}
     /> </Polygon>
     <Polygon
        ref={ref2}
        opacity={0}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       x={-20}
       y={120}
       zIndex={1}
      > <Img
      ref={Image2Ref}
      src={geography}
      width={410}
      shadowColor={"#222"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={470}
     /> </Polygon>
      <Polygon
        ref={ref3}
        opacity={0}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       x={210}
       y={-280}
       zIndex={1}
      > <Img
      ref={Image3Ref}
      src={History}
      width={410}
      shadowColor={"#222"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={470}
     /> </Polygon>

<Polygon
        ref={ref4}
        opacity={0}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       x={440}
       y={120}
       zIndex={1}
      > <Img
      ref={Image4Ref}
      src={political}
      width={410}
      shadowColor={"#222"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={470}
     /> </Polygon>

<Polygon
        ref={ref5}
        opacity={0}
        sides={6}
        size={460}
        width={500}
        height={500}
       lineWidth={10}
       stroke={"#7C47E1"}
       alignContent={"center"}
       x={670}
       y={-280}
       zIndex={1}
      > <Img
      ref={Image5Ref}
      src={sociology}
      width={410}
      shadowColor={"#222"}
      shadowBlur={30}
      shadowOffsetX={10}
      shadowOffsetY={10}
      height={470}
     /> </Polygon>
      </>
    );

  yield* chain(
    all(ref().opacity(1,2),));
    yield* ref1().opacity(1,1.5);
    yield* ref2().opacity(1,1);
    yield* ref3().opacity(1,0.8);
    yield* ref4().opacity(1,0.8);
    yield* ref5().opacity(1,0.8);

});
