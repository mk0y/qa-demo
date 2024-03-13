import { AspectRatio } from '@/components/ui/aspect-ratio'
import gdocs from '../assets/google-docs.png'
import gdrive from '../assets/google-drive-logo.png'

const Integrations = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="text-3xl mb-4">Connect</div>
      <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
        <AspectRatio
          ratio={16 / 9}
          className="flex justify-center items-center"
        >
          <div className="flex flex-1 justify-center items-center">
            <SlackSVG />
          </div>
        </AspectRatio>
      </div>
      <div className="w-5 h-20"></div>
      <div className="text-3xl mb-4">Import</div>
      <div className="ign-row flex">
        <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer first:ml-0">
          <AspectRatio
            ratio={16 / 9}
            className="flex justify-center items-center p-6"
          >
            <img src={gdocs} alt="google docs" />
          </AspectRatio>
        </div>
        <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer first:ml-0 ml-5">
          <AspectRatio
            ratio={16 / 9}
            className="flex justify-center items-center p-6"
          >
            <img src={gdrive} alt="google drive" />
          </AspectRatio>
        </div>
        <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer first:ml-0 ml-5">
          <AspectRatio
            ratio={16 / 9}
            className="flex justify-center items-center"
          >
            <ConfluenceSVG />
          </AspectRatio>
        </div>
        <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer first:ml-0 ml-5">
          <AspectRatio
            ratio={16 / 9}
            className="flex justify-center items-center"
          >
            <div className="flex items-center">
              <div className="w-[40px]">
                <NotionSVG />
              </div>
              <span className="text-2xl inline-block ml-2">Notion</span>
            </div>
          </AspectRatio>
        </div>
        {/* <div className="w-[240px] shadow-md hover:shadow-xl transition-shadow cursor-pointer first:ml-0 ml-5">
          <AspectRatio
            ratio={16 / 9}
            className="flex justify-center items-center"
          >
            <YouTubeSVG />
          </AspectRatio>
        </div> */}
      </div>
    </div>
  )
}

// function YouTubeSVG() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       height="800"
//       width="1200"
//       xmlSpace="preserve"
//       y="0"
//       x="0"
//       id="Layer_1"
//       version="1.1"
//       viewBox="-57.15 -21.25 495.3 127.5"
//     >
//       <g id="g7433">
//         <path
//           id="path7429"
//           d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"
//           fill="red"
//         />
//         <path id="polygon7431" fill="#fff" d="M48.6 24.3v36.4l31.6-18.2z" />
//       </g>
//       <g id="g7451">
//         <g id="g7449">
//           <path
//             id="path7435"
//             d="M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6z"
//             className="st2"
//           />
//           <path
//             id="path7437"
//             d="M360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11-2.7 2.4-6.5 3.6-11.4 3.6-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1z"
//             className="st2"
//           />
//           <path
//             id="path7439"
//             d="M147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3z"
//             className="st2"
//           />
//           <path
//             id="path7441"
//             d="M241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z"
//             className="st2"
//           />
//           <path
//             id="path7443"
//             d="M303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7z"
//             className="st2"
//           />
//           <path
//             id="path7445"
//             d="M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5z"
//             className="st2"
//           />
//           <path
//             id="path7447"
//             d="M342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z"
//             className="st2"
//           />
//         </g>
//       </g>
//     </svg>
//   )
// }

function SlackSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      viewBox="-74.46 -31.4 645.32 188.4"
    >
      <g fill="none">
        <path
          fill="#000"
          d="M158.8 98.9l6.2-14.4c6.7 5 15.6 7.6 24.4 7.6 6.5 0 10.6-2.5 10.6-6.3-.1-10.6-38.9-2.3-39.2-28.9-.1-13.5 11.9-23.9 28.9-23.9 10.1 0 20.2 2.5 27.4 8.2l-5.8 14.7c-6.6-4.2-14.8-7.2-22.6-7.2-5.3 0-8.8 2.5-8.8 5.7.1 10.4 39.2 4.7 39.6 30.1 0 13.8-11.7 23.5-28.5 23.5-12.3 0-23.6-2.9-32.2-9.1m237.9-19.6c-3.1 5.4-8.9 9.1-15.6 9.1-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 6.7 0 12.5 3.7 15.6 9.1l17.1-9.5C407.4 40.8 395.1 33 381.1 33c-20.7 0-37.5 16.8-37.5 37.5s16.8 37.5 37.5 37.5c14.1 0 26.3-7.7 32.7-19.2zM228.1 1.9h21.4v104.7h-21.4zm194.1 0v104.7h21.4V75.2l25.4 31.4h27.4l-32.3-37.3L494 34.5h-26.2l-24.2 28.9V1.9zM313.1 79.5c-3.1 5.1-9.5 8.9-16.7 8.9-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9 7.2 0 13.6 4 16.7 9.2zm0-45V43c-3.5-5.9-12.2-10-21.3-10-18.8 0-33.6 16.6-33.6 37.4 0 20.8 14.8 37.6 33.6 37.6 9.1 0 17.8-4.1 21.3-10v8.5h21.4v-72z"
        />
        <path
          fill="#E01E5A"
          d="M26.5 79.4c0 7.3-5.9 13.2-13.2 13.2C6 92.6.1 86.7.1 79.4c0-7.3 5.9-13.2 13.2-13.2h13.2zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2z"
        />
        <path
          fill="#36C5F0"
          d="M46.3 26.4c-7.3 0-13.2-5.9-13.2-13.2C33.1 5.9 39 0 46.3 0c7.3 0 13.2 5.9 13.2 13.2v13.2zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.2C5.9 59.5 0 53.6 0 46.3 0 39 5.9 33.1 13.2 33.1z"
        />
        <path
          fill="#2EB67D"
          d="M99.2 46.3c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.2zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.2C66.2 5.9 72.1 0 79.4 0c7.3 0 13.2 5.9 13.2 13.2z"
        />
        <path
          fill="#ECB22E"
          d="M79.4 99.2c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2z"
        />
      </g>
    </svg>
  )
}

function NotionSVG() {
  return (
    <svg
      width="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  )
}

function ConfluenceSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      id="svg79"
      version="1.1"
      viewBox="-76.55382 -15.954625 663.46644 95.72775"
    >
      <defs id="defs49">
        <linearGradient
          gradientUnits="userSpaceOnUse"
          y2="45.05"
          x2="20.35"
          y1="67.65"
          x1="59.68"
          id="linear-gradient"
        >
          <stop id="stop43" stop-color="#0052cc" offset=".18" />
          <stop id="stop45" stop-color="#2684ff" offset="1" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linear-gradient"
          gradientTransform="rotate(180 141.415 -808.355)"
          y2="-1638.95"
          x2="240.42"
          y1="-1616.34"
          x1="279.76"
          id="linear-gradient-2"
        />
        <linearGradient
          y2="45.05"
          x2="20.35"
          y1="67.65"
          x1="59.68"
          gradientUnits="userSpaceOnUse"
          id="linearGradient85"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g transform="translate(.0488 .0003)" id="Layer_2">
        <g id="Blue">
          <path
            id="path53"
            d="M134.47 60c-3.61 2.38-9.33 3.43-15.31 3.43-19 0-29.74-11.44-29.74-29.65 0-17.6 10.74-29.92 29.57-29.92 5.63 0 11.26 1.06 15.4 4v7.66c-4.14-2.64-8.71-4-15.4-4-13.55 0-21.65 9-21.65 22.26 0 13.26 8.36 22.09 22.09 22.09a32.46 32.46 0 0015-3.52z"
            className="cls-1"
          />
          <path
            id="path55"
            d="M140 40.48c0-13.2 7.74-22.79 20.94-22.79 13.2 0 20.77 9.59 20.77 22.79s-7.66 23-20.77 23-20.94-9.8-20.94-23zm7.39 0c0 8.36 4.14 15.93 13.55 15.93s13.38-7.57 13.38-15.93-4-15.75-13.37-15.75-13.54 7.39-13.54 15.75z"
            className="cls-1"
          />
          <path
            id="path57"
            d="M227.93 62.57h-7.57V36c0-7.92-3.17-11.44-10.38-11.44-7 0-11.88 4.66-11.88 13.55v24.46h-7.57v-44h7.57v7.22a15.42 15.42 0 0113.9-8.1c10.12 0 15.93 7 15.93 19.1z"
            className="cls-1"
          />
          <path
            id="path59"
            d="M249 18.57h11.35v7H249v37h-7.39v-37h-7.13v-7h7.13v-4.84c0-8.18 4.58-13.73 14-13.73a18.19 18.19 0 015.1.7v7a25 25 0 00-4.75-.44c-4.66 0-7 2.73-7 6.69z"
            className="cls-1"
          />
          <path
            id="path61"
            d="M280.29 62.83c-7.22 0-11.79-3.43-11.79-11.53V.18h7.57v50.24c0 4 2.64 5.37 5.9 5.37a19.17 19.17 0 002.2-.09v6.78a16.11 16.11 0 01-3.88.35z"
            className="cls-1"
          />
          <path
            id="path63"
            d="M290.58 18.57h7.57v26.57c0 7.92 3.17 11.44 10.38 11.44 7 0 11.88-4.66 11.88-13.55V18.57H328v44h-7.57v-7.22a15.42 15.42 0 01-13.9 8.1c-10.12 0-15.93-7-15.93-19.09z"
            className="cls-1"
          />
          <path
            id="path65"
            d="M360.45 63.45c-16.46 0-23.67-9.5-23.67-23 0-13.29 7.39-22.79 20.77-22.79 13.55 0 19 9.42 19 22.79v3.43h-32.11c1.06 7.48 5.9 12.32 16.28 12.32a39 39 0 0013.38-2.38v7c-3.62 1.92-9.16 2.63-13.65 2.63zm-16.1-26h24.55c-.44-8.18-4.14-12.85-11.7-12.85-8.01-.05-12.06 5.14-12.85 12.8z"
            className="cls-1"
          />
          <path
            id="path67"
            d="M422.93 62.57h-7.57V36c0-7.92-3.17-11.44-10.38-11.44-7 0-11.88 4.66-11.88 13.55v24.46h-7.57v-44h7.57v7.22a15.42 15.42 0 0113.9-8.1c10.12 0 15.93 7 15.93 19.1z"
            className="cls-1"
          />
          <path
            id="path69"
            d="M464.56 61.42c-2.64 1.41-6.69 2-10.74 2-15.66 0-23-9.5-23-23 0-13.29 7.3-22.79 23-22.79a23.26 23.26 0 0110.47 2.11v7a22.18 22.18 0 00-9.94-2.11c-11.44 0-16.1 7.22-16.1 15.75 0 8.53 4.75 15.85 16.27 15.85a27.8 27.8 0 0010-1.58z"
            className="cls-1"
          />
          <path
            id="path71"
            d="M494.21 63.45c-16.46 0-23.67-9.5-23.67-23 0-13.29 7.39-22.79 20.77-22.79 13.55 0 19 9.42 19 22.79v3.43h-32.12c1.06 7.48 5.9 12.32 16.28 12.32a39 39 0 0013.38-2.38v7c-3.61 1.92-9.15 2.63-13.64 2.63zm-16.1-26h24.55c-.44-8.18-4.14-12.85-11.7-12.85-8.01-.05-12.06 5.14-12.85 12.8z"
            className="cls-1"
          />
          <path
            id="path73"
            d="M2.23 49.53c-.65 1.06-1.38 2.29-2 3.27a2 2 0 00.67 2.72l13 8a2 2 0 002.77-.68c.52-.87 1.19-2 1.92-3.21 5.15-8.5 10.33-7.46 19.67-3l12.89 6.13a2 2 0 002.69-1l6.19-14a2 2 0 00-1-2.62c-2.72-1.28-8.13-3.83-13-6.18C28.51 30.45 13.62 31 2.23 49.53z"
            fill="url(#linearGradient85)"
          />
          <path
            id="path75"
            d="M60.52 17.76c.65-1.06 1.38-2.29 2-3.27a2 2 0 00-.67-2.72l-13-8a2 2 0 00-2.85.66c-.52.87-1.19 2-1.92 3.21-5.15 8.5-10.33 7.46-19.67 3l-12.85-6.1a2 2 0 00-2.69 1l-6.19 14a2 2 0 001 2.62c2.72 1.28 8.13 3.83 13 6.18 17.56 8.5 32.45 7.93 43.84-10.58z"
            fill="url(#linear-gradient-2)"
          />
        </g>
      </g>
    </svg>
  )
}

export default Integrations
