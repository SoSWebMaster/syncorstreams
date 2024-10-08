import { useState, useCallback, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../util/Modal";

interface SocialShareProps {
   url: string,
}

export default function SocialShare( { url } :  SocialShareProps )  {
   const [isModalActive, setIsModalActive] = useState( false );

   const copyLinkOnClickHandler = useCallback(( e: MouseEvent<HTMLElement> ) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const element = e.currentTarget.querySelector( '.text' ) as HTMLAnchorElement | null;
      if( !element )  return

      let text = element.textContent;
      const link = anchor.href;

      (async () => {
         try {
            if( !text )  return
            await navigator.clipboard.writeText( link );

            setTimeout( () => {
               element.textContent = text;
            }, 2000 );

            element.textContent = "LINK COPIED";
         } catch (err) {}
      })();
   }, []);

   return(
      <>
      <FontAwesomeIcon
         className="cursor-pointer"
         icon={faShareNodes}
         onClick={() => setIsModalActive( true )}
      />
      {isModalActive &&
         <Modal
            active={isModalActive}
            onClose={() => {
               setIsModalActive( false );
            }}
         >
         <div className="w-full max-w-md p-3 m-2 text-white bg-black border-2 rounded border-white/20 md:p-4 md:m-0">
            <div className="text-right">
               <button
                  className="text-lg cursor-pointer"
                  onClick={() => {
                     setIsModalActive( false );
                  }}
               >
                  <FontAwesomeIcon
                     icon={faXmark}
                  />
               </button>
            </div>
            <h4 className="mb-3 text-lg font-bold text-center md:text-2xl">Share Song</h4>
            <a
               className="p-3 md:p-5 font-semibold text-lg md:text-xl block bg-[#3b5998]"
               href={"https://www.facebook.com/sharer/sharer.php?u=" + url}
               target="_blank"
               rel="nofollow"
            >
               <FontAwesomeIcon
                  className="mr-2 md:mr-4"
                  icon={faFacebookF}
               />
               SHARE ON FACEBOOK
            </a>
            <a
               className="p-3 md:p-5 font-semibold text-lg md:text-xl block bg-[#00aced]"
               href={"https://twitter.com/intent/tweet?text=Hello%20world&url=" + url}
               target="_blank"
               rel="nofollow"
            >
               <FontAwesomeIcon
                  className="mr-2 md:mr-4"
                  icon={faTwitter}
               />
               SHARE ON TWITTER
            </a>
            <a
               className="p-3 md:p-5 font-semibold text-lg md:text-xl block bg-[#242424]"
               onClick={copyLinkOnClickHandler}
               href={url}
            >
               <FontAwesomeIcon
                  className="mr-2 md:mr-4"
                  icon={faLink}
               />
               <span className="text">COPY LINK</span>
            </a>
         </div>
         </Modal>
      }
      </>
   );
}
