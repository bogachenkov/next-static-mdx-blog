import dynamic from 'next/dynamic';
import Blockquote from './Blockquote';
import MdxImage from './MdxImage';
import MdxLink from './MdxLink';

export const mdxElements = {
  a: MdxLink,
  img: MdxImage,
  blockquote: Blockquote,
  pre: dynamic(() => import('./PreBlock'), { ssr: false }),
  Youtube: dynamic(() => import('./Youtube'), { ssr: false })
}