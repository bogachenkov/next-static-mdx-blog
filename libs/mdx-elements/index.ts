import dynamic from 'next/dynamic';
import Blockquote from './Blockquote';
import MdxImage from './MdxImage';
import MdxLink from './MdxLink';
import PreBlock from './PreBlock';

export const mdxElements = {
  a: MdxLink,
  img: MdxImage,
  blockquote: Blockquote,
  pre: PreBlock,
  Youtube: dynamic(() => import('./Youtube'))
}