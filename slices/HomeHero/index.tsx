
'use client'
import useIsMobileView from "@/app/hooks/useIsMobileView";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";

/**
 * Props for `HomeHero`.
 */
export type HomeHeroProps = SliceComponentProps<Content.HomeHeroSlice>;

/**
 * Component for "HomeHero" Slices.
 */
const HomeHero = ({ slice }: HomeHeroProps): JSX.Element => {
  //console.log('Home slice ',slice);
  const isMobileView = useIsMobileView();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  
  useEffect(() => {
    setIsMobile(isMobileView)
    //console.log('is mobile ',isMobileView + ' ' + isMobile);
    return () => {}
  },[isMobileView]);

  return (
    
    <section
      className='w-full'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='relative z-10 '>
        <h1>{slice.primary.hero_heading} </h1>
        <p>{slice.primary.hero_copy_intro}</p>
      </div>
      

      { isMobile &&
          <video className='z-0 absolute top-0 w-full' poster="" muted playsInline autoPlay loop>
            <source src={slice.primary.hero_mobile_video.url}  type="video/mp4" />
          </video>
      }
      {
        isMobile !== null && !isMobile && 
          <video className='z-0 absolute top-0 w-full' poster="" muted playsInline autoPlay loop>
            <source src={slice.primary.hero_desktop_video.url}  type="video/mp4" />
          </video>
      }

    </section>
  );
};

export default HomeHero;
