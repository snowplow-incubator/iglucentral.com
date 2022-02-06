/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const rotation = keyframes`
      0% { 
          transform: rotate(0deg); 
      }
      4% { 
          transform: rotate(0deg); 
      }
      16.6% { 
          transform: rotate(60deg); 
      }
      20% { 
          transform: rotate(60deg); }
      33.2% { 
          transform: rotate(120deg); }
      37% { 
          transform: rotate(120deg); }
      49.8% { transform: rotate(180deg); }
      53% { transform: rotate(180deg); }
      66.4% { transform: rotate(240deg); }
      70% { transform: rotate(240deg); }
      84% { transform: rotate(300deg); }
      88% { transform: rotate(300deg); }
      100% { transform: rotate(360deg); }
`;

const LargeSpinner = () => {
  return (
    <svg
      width="72px"
      height="67px"
      viewBox="0 0 72 67"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <path
        css={css`
          animation-name: ${rotation};
          animation-duration: 5.4s;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.7, -0.6, 0.55, 1.215);
          transform-origin: 50% 50%;
        `}
        d="M51.5494532,-1.42108547e-14 C53.3004453,-1.42108547e-14 54.9184287,0.970169198 55.7939248,2.54505425 L71.343378,30.5161702 C72.218874,32.0910553 72.218874,34.0313937 71.343378,35.6062787 L55.7939248,63.5773947 C54.9184287,65.1522798 53.3004453,66.122449 51.5494532,66.122449 L20.4505468,66.122449 C18.6995547,66.122449 17.0815713,65.1522798 16.2060752,63.5773947 L0.656622033,35.6062787 C-0.218874011,34.0313937 -0.218874011,32.0910553 0.656622033,30.5161702 L16.2060752,2.54505425 C17.0815713,0.970169198 18.6995547,-1.42108547e-14 20.4505468,-1.42108547e-14 L51.5494532,-1.42108547e-14 Z M25.1004736,49.4693878 L11.164898,49.4693878 L18.3465454,62.3874836 C18.7743548,63.157048 19.5275697,63.6309942 20.3394914,63.6707521 L20.4505468,63.6734694 L34.3856327,63.6734694 L27.204475,50.7553735 C26.7766656,49.9858091 26.0234507,49.511863 25.211529,49.472105 L25.1004736,49.4693878 Z M51.5494532,2.44897959 L37.1872653,2.44897959 L29.3449452,16.5569866 C28.4694491,18.1318716 26.8514657,19.1020408 25.1004736,19.1020408 L9.80326531,19.1020408 L2.79709222,31.7060813 C2.35403978,32.5030657 2.33390104,33.4872731 2.73667598,34.3012777 L2.79709222,34.4163676 L9.8037551,47.0204082 L25.1004736,47.0204082 C26.8514657,47.0204082 28.4694491,47.9905774 29.3449452,49.5654624 L37.1877551,63.6734694 L51.5494532,63.6734694 C52.3661608,63.6734694 53.1362843,63.2329826 53.593125,62.4905789 L53.6534546,62.3874836 L60.5578776,49.9665306 L52.5749894,35.6062787 C51.6994933,34.0313937 51.6994933,32.0910553 52.5749894,30.5161702 L60.5578776,16.1554286 L53.6534546,3.73496534 C53.2256452,2.96540096 52.4724303,2.49145482 51.6605086,2.45169687 L51.5494532,2.44897959 Z M61.9591837,18.6754286 L54.7154596,31.7060813 C54.2724071,32.5030657 54.2522684,33.4872731 54.6550433,34.3012777 L54.7154596,34.4163676 L61.9591837,47.4465306 L69.2029078,34.4163676 C69.6459602,33.6193833 69.666099,32.6351759 69.263324,31.8211713 L69.2029078,31.7060813 L61.9591837,18.6754286 Z M34.3856327,2.44897959 L20.4505468,2.44897959 C19.6338392,2.44897959 18.8637157,2.88946641 18.406875,3.6318701 L18.3465454,3.73496534 L11.164898,16.6530612 L25.1004736,16.6530612 C25.9171812,16.6530612 26.6873047,16.2125744 27.1441454,15.4701707 L27.204475,15.3670755 L34.3856327,2.44897959 Z"
        fill="#323742"
      ></path>
      <path
        d="M43.5827179,16.6530612 C44.4641697,16.6530612 45.2786648,17.1345526 45.7193907,17.9161622 L53.5470066,31.7981235 L53.6118333,31.9207638 L53.6118333,31.9207638 L53.669591,32.0460125 L53.711393,32.1496989 L53.711393,32.1496989 L53.7350127,32.2148412 L53.7653924,32.3080084 L53.7950364,32.4131387 L53.7950364,32.4131387 L53.8107324,32.4770586 C53.8424699,32.6138174 53.8629089,32.7527407 53.872033,32.8922657 L53.877551,33.0336144 L53.877551,33.0883459 C53.8759338,33.2380029 53.8613601,33.3875492 53.8338237,33.5351528 L53.8019662,33.6820408 L53.778882,33.7687054 L53.7370484,33.9017242 L53.6867727,34.0353847 L53.6373236,34.1485861 C53.6096238,34.2080375 53.579514,34.2666748 53.5470066,34.3243255 L45.7193907,48.2062868 C45.2786648,48.9878964 44.4641697,49.4693878 43.5827179,49.4693878 L27.9274861,49.4693878 L27.8089839,49.4664821 L27.6968032,49.4583499 L27.6246872,49.4503308 L27.5081586,49.4326895 L27.5081586,49.4326895 L27.4496293,49.421612 C26.7590121,49.2820796 26.1504628,48.8441104 25.7908134,48.2062868 L17.9631975,34.3243255 C17.5224716,33.5427159 17.5224716,32.5797331 17.9631975,31.7981235 L25.7908134,17.9161622 C26.1604338,17.2606553 26.7929468,16.8162381 27.5073704,16.6898987 L27.6271684,16.6718057 L27.6959292,16.664196 L27.8084921,16.6559911 L27.9274861,16.6530612 L43.5827179,16.6530612 Z M50.762449,34.2857143 L36.9149525,34.2863183 L29.7345306,47.0204082 L43.5513891,47.0204082 L50.762449,34.2857143 Z M27.4285714,20.0385306 L20.1019755,32.9760735 C20.0802765,33.0143887 20.0759367,33.0697407 20.0889561,33.1148706 L20.1019755,33.1463755 L27.4285714,46.0839184 L34.7551674,33.1463755 C34.7768664,33.1080602 34.7812062,33.0527083 34.7681868,33.0075784 L34.7551674,32.9760735 L27.4285714,20.0385306 Z M43.5513891,19.1020408 L29.7350204,19.1020408 L36.8939454,31.7981235 L36.914449,31.8367347 L50.7629388,31.8367347 L43.5513891,19.1020408 Z"
        fill="#323742"
        transform="translate(35.755102, 33.061224) rotate(360.000000) translate(-35.755102, -33.061224) "
      ></path>
    </svg>
  );
};

export default LargeSpinner;
