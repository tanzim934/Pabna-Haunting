import * as React from 'react';
export const Image=React.forwardRef(({src,fittingType='fill',originWidth,originHeight,focalPointX,focalPointY,quality=90,...props},ref)=><img ref={ref} src={src||'/assets/hospital.svg'} style={{objectFit:fittingType==='fit'?'contain':'cover',...props.style}} {...props}/>);
Image.displayName='Image';
