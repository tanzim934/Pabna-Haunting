export const DEFAULT_TRANSFORM_WIDTH=1024;export const IMAGE_LOAD_MODE={OPTIMIZED:'optimized',ORIGINAL:'original',FALLBACK:'fallback'};
export function splitImageProps(props){const wrapperProps={},imageProps={};for(const [key,value] of Object.entries(props)){(key.startsWith('data-')?wrapperProps:imageProps)[key]=value;}return{wrapperProps,imageProps};}
export function getImagePreviewClassName(cls,current){return current||cls||'';}
export function parseWixMediaUrl(src){try{const url=new URL(src);return url.protocol==='https:'&&['media.base44.com','static.wixstatic.com'].includes(url.hostname)?{baseUrl:url.origin+url.pathname,filename:url.pathname.split('/').pop()}:null;}catch{return null}}
export function buildTransformUrl(parsed,{width=1024,height=width}={}){return parsed?.baseUrl||'';}
export function buildSrcSet(parsed){return parsed?.baseUrl||'';}
export function getOriginalImageUrl(src,parsed){return parsed?.baseUrl||src;}
export function nextImageLoadMode(mode){return mode==='optimized'?'original':'fallback';}
