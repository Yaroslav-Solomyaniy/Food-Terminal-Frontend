import React, { CSSProperties } from 'react';
/* eslint-disable max-len */
interface Svg {
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
  style?: CSSProperties;
}

export const Svg = ({ children, className, viewBox, ...props }: Svg): JSX.Element => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox={viewBox}
    className={className}
    {...props}
  >
    {children}
  </svg>
);

Svg.defaultProps = {
  className: '',
  viewBox: '0 0 24 24',
  style: {},
};

export const Review = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path
      d="M10.5 3.75C6.33331 3.75 2.77498 6.34167 1.33331 10C2.77498 13.6583 6.33331 16.25 10.5 16.25C14.6666 16.25 18.225 13.6583 19.6666 10C18.225 6.34167 14.6666 3.75 10.5 3.75ZM10.5 14.1667C8.19998 14.1667 6.33331 12.3 6.33331 10C6.33331 7.7 8.19998 5.83333 10.5 5.83333C12.8 5.83333 14.6666 7.7 14.6666 10C14.6666 12.3 12.8 14.1667 10.5 14.1667ZM10.5 7.5C9.11665 7.5 7.99998 8.61667 7.99998 10C7.99998 11.3833 9.11665 12.5 10.5 12.5C11.8833 12.5 13 11.3833 13 10C13 8.61667 11.8833 7.5 10.5 7.5Z"
      fill="currentColor"
    />
  </Svg>
);
export const Settings = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 23 19" {...props}>
    <path
      d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z"
      fill="currentColor"
    />
  </Svg>
);
export const Discount = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 26" {...props}>
    <path
      d="M 21.46875 12.714844 C 20.265625 10.882812 19.429688 9.589844 18.539062 8.222656 C 18.070312 7.5 17.585938 6.757812 16.957031 5.792969 L 16.679688 5.972656 C 16.476562 6.101562 16.210938 6.085938 16.023438 5.9375 C 15.832031 5.792969 15.753906 5.542969 15.828125 5.3125 C 15.867188 5.191406 15.949219 5.085938 16.058594 5.015625 L 16.335938 4.835938 C 15.699219 3.84375 14.898438 2.636719 13.871094 1.074219 C 13.851562 1.042969 13.820312 1.023438 13.785156 1.015625 C 13.75 1.007812 13.714844 1.015625 13.683594 1.035156 L 13.203125 1.335938 C 13.351562 1.726562 13.386719 2.148438 13.300781 2.554688 C 13.183594 3.113281 12.847656 3.601562 12.371094 3.917969 L 12.355469 3.929688 C 11.507812 4.476562 10.394531 4.371094 9.660156 3.679688 L 9.164062 3.992188 C 9.304688 4.367188 9.339844 4.773438 9.265625 5.167969 C 9.15625 5.738281 8.820312 6.238281 8.332031 6.558594 L 8.253906 6.609375 C 7.773438 6.910156 7.195312 7.003906 6.640625 6.882812 C 6.242188 6.792969 5.875 6.59375 5.578125 6.308594 L 4.957031 6.710938 C 4.929688 6.730469 4.914062 6.761719 4.90625 6.792969 C 4.894531 6.820312 4.894531 6.851562 4.90625 6.882812 L 4.925781 6.914062 C 5.925781 8.4375 6.710938 9.652344 7.367188 10.664062 L 7.382812 10.664062 L 8.34375 10.027344 C 8.546875 9.902344 8.808594 9.914062 9 10.0625 C 9.191406 10.210938 9.269531 10.460938 9.195312 10.6875 C 9.152344 10.8125 9.070312 10.914062 8.964844 10.984375 L 8.003906 11.609375 L 7.976562 11.625 C 8.21875 12 8.449219 12.355469 8.691406 12.722656 Z M 7.503906 12.714844 L 6.683594 11.445312 C 6.027344 10.421875 5.230469 9.1875 4.082031 7.4375 C 3.734375 6.910156 3.878906 6.199219 4.410156 5.851562 C 4.679688 5.671875 5.152344 5.328125 5.417969 5.195312 C 5.65625 5.042969 5.96875 5.113281 6.121094 5.347656 L 6.121094 5.363281 C 6.289062 5.625 6.554688 5.8125 6.855469 5.882812 C 7.148438 5.949219 7.453125 5.898438 7.707031 5.742188 L 7.761719 5.707031 C 8.015625 5.539062 8.195312 5.273438 8.25 4.972656 C 8.308594 4.667969 8.242188 4.355469 8.070312 4.097656 L 8.050781 4.066406 C 7.902344 3.824219 7.980469 3.515625 8.21875 3.367188 L 9.484375 2.597656 C 9.597656 2.523438 9.734375 2.496094 9.867188 2.523438 C 10 2.550781 10.113281 2.628906 10.1875 2.742188 C 10.355469 3 10.621094 3.179688 10.921875 3.242188 C 11.226562 3.308594 11.539062 3.246094 11.796875 3.078125 L 11.8125 3.078125 C 12.0625 2.910156 12.242188 2.648438 12.304688 2.351562 C 12.363281 2.0625 12.304688 1.757812 12.140625 1.507812 L 12.109375 1.460938 C 11.957031 1.226562 12.023438 0.910156 12.257812 0.757812 L 13.109375 0.203125 C 13.644531 -0.140625 14.359375 0.0078125 14.707031 0.539062 C 17.03125 4.019531 18.25 5.925781 19.390625 7.671875 C 20.242188 8.996094 21.054688 10.234375 22.683594 12.714844 L 22.820312 12.714844 C 23.457031 12.714844 23.976562 13.230469 23.976562 13.867188 L 23.976562 15.050781 C 23.976562 15.332031 23.75 15.558594 23.46875 15.558594 L 23.40625 15.558594 C 23.105469 15.558594 22.816406 15.679688 22.605469 15.890625 C 22.390625 16.105469 22.265625 16.398438 22.265625 16.703125 L 22.265625 16.734375 C 22.261719 17.039062 22.386719 17.332031 22.609375 17.542969 L 22.632812 17.566406 C 22.855469 17.769531 23.148438 17.878906 23.449219 17.875 L 23.46875 17.875 C 23.75 17.875 23.976562 18.101562 23.980469 18.378906 L 23.980469 20.496094 C 23.980469 20.773438 23.75 21.003906 23.46875 21.003906 L 23.449219 21.003906 C 23.136719 21 22.835938 21.117188 22.609375 21.332031 C 22.390625 21.542969 22.261719 21.835938 22.261719 22.144531 L 22.261719 22.175781 C 22.265625 22.480469 22.386719 22.769531 22.605469 22.984375 C 22.816406 23.199219 23.105469 23.320312 23.40625 23.320312 L 23.464844 23.320312 C 23.746094 23.316406 23.976562 23.542969 23.976562 23.820312 L 23.976562 24.832031 C 23.976562 25.46875 23.457031 25.980469 22.820312 25.984375 L 1.179688 25.984375 C 0.546875 25.980469 0.0351562 25.476562 0.0234375 24.847656 L 0.0234375 23.835938 C 0.0234375 23.558594 0.25 23.328125 0.53125 23.328125 L 0.597656 23.328125 C 0.898438 23.328125 1.1875 23.210938 1.398438 22.996094 C 1.613281 22.78125 1.734375 22.492188 1.738281 22.1875 L 1.738281 22.171875 C 1.742188 21.863281 1.617188 21.570312 1.398438 21.351562 C 1.179688 21.136719 0.882812 21.015625 0.574219 21.015625 C 0.292969 21.015625 0.0664062 20.789062 0.0664062 20.507812 L 0.0664062 20.472656 L 0.0234375 18.390625 C 0.015625 18.113281 0.238281 17.878906 0.519531 17.875 L 0.554688 17.875 C 0.871094 17.882812 1.175781 17.765625 1.402344 17.550781 C 1.625 17.335938 1.75 17.042969 1.75 16.738281 L 1.75 16.703125 C 1.746094 16.398438 1.625 16.105469 1.402344 15.890625 L 1.371094 15.871094 C 1.148438 15.667969 0.855469 15.558594 0.554688 15.558594 L 0.496094 15.558594 C 0.230469 15.542969 0.0195312 15.320312 0.0234375 15.054688 L 0.0234375 13.867188 C 0.0234375 13.230469 0.542969 12.714844 1.179688 12.714844 Z M 13.050781 22.28125 C 12.976562 22.414062 12.867188 22.519531 12.734375 22.589844 C 12.523438 22.679688 12.292969 22.71875 12.0625 22.703125 C 11.75 22.703125 11.59375 22.617188 11.59375 22.453125 C 11.597656 22.425781 11.601562 22.402344 11.613281 22.378906 L 15.015625 16.40625 C 15.058594 16.320312 15.113281 16.242188 15.175781 16.167969 C 15.25 16.097656 15.339844 16.042969 15.4375 16.007812 C 15.589844 15.949219 15.753906 15.921875 15.917969 15.925781 C 16.3125 15.925781 16.511719 16.011719 16.511719 16.183594 C 16.511719 16.214844 16.503906 16.242188 16.492188 16.269531 Z M 11.503906 19.5625 C 11.253906 19.566406 11.007812 19.539062 10.765625 19.484375 C 10.558594 19.433594 10.363281 19.34375 10.1875 19.21875 C 9.824219 18.957031 9.640625 18.453125 9.640625 17.703125 C 9.640625 16.949219 9.832031 16.480469 10.214844 16.21875 C 10.601562 15.996094 11.046875 15.886719 11.492188 15.90625 C 11.945312 15.890625 12.390625 15.996094 12.785156 16.21875 C 13.167969 16.46875 13.359375 16.957031 13.359375 17.703125 C 13.359375 18.445312 13.179688 18.972656 12.8125 19.21875 C 12.421875 19.460938 11.964844 19.582031 11.503906 19.5625 Z M 11.503906 18.636719 C 11.550781 18.636719 11.597656 18.617188 11.625 18.578125 C 11.707031 18.492188 11.75 18.265625 11.75 17.902344 C 11.757812 17.652344 11.746094 17.402344 11.714844 17.152344 C 11.707031 17.0625 11.675781 16.976562 11.628906 16.898438 C 11.59375 16.867188 11.550781 16.851562 11.503906 16.851562 C 11.335938 16.851562 11.253906 17.148438 11.253906 17.742188 C 11.253906 18.339844 11.335938 18.636719 11.503906 18.636719 Z M 16.542969 22.796875 C 16.292969 22.800781 16.046875 22.773438 15.808594 22.71875 C 15.597656 22.667969 15.402344 22.578125 15.226562 22.453125 C 14.863281 22.195312 14.691406 21.6875 14.691406 20.949219 C 14.691406 20.207031 14.882812 19.726562 15.265625 19.488281 C 15.648438 19.257812 16.09375 19.144531 16.542969 19.160156 C 16.996094 19.144531 17.445312 19.257812 17.835938 19.488281 C 18.21875 19.726562 18.410156 20.214844 18.410156 20.949219 C 18.410156 21.703125 18.230469 22.21875 17.863281 22.464844 C 17.46875 22.710938 17.007812 22.828125 16.542969 22.808594 Z M 16.542969 21.871094 C 16.585938 21.875 16.632812 21.855469 16.664062 21.824219 C 16.75 21.726562 16.789062 21.5 16.789062 21.136719 C 16.796875 20.886719 16.785156 20.636719 16.75 20.386719 C 16.742188 20.296875 16.714844 20.210938 16.664062 20.132812 C 16.632812 20.101562 16.585938 20.085938 16.542969 20.085938 C 16.375 20.085938 16.292969 20.382812 16.292969 20.980469 C 16.292969 21.574219 16.375 21.871094 16.542969 21.871094 Z M 22.820312 13.730469 L 6.238281 13.730469 L 6.238281 14.492188 C 6.238281 14.511719 6.238281 14.535156 6.238281 14.558594 C 6.21875 14.804688 6.003906 14.988281 5.753906 14.972656 C 5.503906 14.953125 5.320312 14.738281 5.335938 14.492188 L 5.335938 13.730469 L 1.179688 13.730469 C 1.144531 13.730469 1.109375 13.746094 1.082031 13.769531 C 1.058594 13.796875 1.042969 13.828125 1.042969 13.867188 L 1.042969 14.601562 C 1.425781 14.683594 1.78125 14.867188 2.070312 15.136719 L 2.101562 15.164062 C 2.519531 15.566406 2.753906 16.117188 2.757812 16.695312 L 2.757812 16.746094 C 2.753906 17.324219 2.519531 17.878906 2.101562 18.277344 C 1.808594 18.554688 1.445312 18.746094 1.050781 18.832031 L 1.085938 20.054688 C 2.074219 20.285156 2.769531 21.164062 2.769531 22.171875 C 2.769531 22.171875 2.769531 22.195312 2.769531 22.199219 C 2.757812 23.210938 2.046875 24.082031 1.054688 24.296875 L 1.054688 24.847656 C 1.058594 24.921875 1.117188 24.984375 1.191406 24.984375 L 5.335938 24.984375 L 5.335938 24.269531 C 5.335938 24.25 5.335938 24.226562 5.335938 24.207031 C 5.371094 23.972656 5.578125 23.808594 5.8125 23.824219 C 6.046875 23.839844 6.226562 24.035156 6.226562 24.269531 L 6.226562 24.984375 L 22.808594 24.984375 C 22.882812 24.980469 22.941406 24.921875 22.945312 24.847656 L 22.945312 24.296875 C 22.539062 24.210938 22.164062 24.007812 21.867188 23.710938 C 21.46875 23.308594 21.238281 22.765625 21.230469 22.199219 L 21.230469 22.148438 C 21.234375 21.570312 21.472656 21.019531 21.886719 20.617188 C 22.183594 20.335938 22.550781 20.140625 22.949219 20.054688 L 22.949219 18.832031 C 22.566406 18.75 22.210938 18.566406 21.925781 18.296875 L 21.890625 18.269531 C 21.476562 17.867188 21.238281 17.316406 21.234375 16.738281 L 21.234375 16.6875 C 21.242188 16.117188 21.472656 15.578125 21.871094 15.171875 C 22.171875 14.882812 22.546875 14.683594 22.957031 14.601562 L 22.957031 13.867188 C 22.957031 13.828125 22.941406 13.796875 22.914062 13.769531 C 22.890625 13.742188 22.855469 13.730469 22.820312 13.730469 Z M 5.335938 17.15625 C 5.335938 17.390625 5.515625 17.589844 5.75 17.605469 C 5.984375 17.621094 6.195312 17.457031 6.226562 17.222656 C 6.226562 17.203125 6.226562 17.179688 6.226562 17.15625 L 6.226562 16.269531 C 6.226562 16.035156 6.046875 15.839844 5.8125 15.824219 C 5.578125 15.808594 5.371094 15.972656 5.335938 16.207031 C 5.335938 16.226562 5.335938 16.246094 5.335938 16.269531 Z M 5.335938 19.824219 C 5.335938 20.058594 5.515625 20.253906 5.75 20.269531 C 5.984375 20.289062 6.195312 20.121094 6.226562 19.890625 C 6.226562 19.867188 6.226562 19.847656 6.226562 19.824219 L 6.226562 18.9375 C 6.226562 18.703125 6.046875 18.507812 5.8125 18.488281 C 5.578125 18.472656 5.371094 18.640625 5.335938 18.871094 C 5.335938 18.894531 5.335938 18.914062 5.335938 18.9375 Z M 5.335938 22.492188 C 5.335938 22.726562 5.515625 22.921875 5.75 22.941406 C 5.984375 22.957031 6.195312 22.789062 6.226562 22.558594 C 6.226562 22.535156 6.226562 22.515625 6.226562 22.492188 L 6.226562 21.601562 C 6.226562 21.367188 6.046875 21.171875 5.8125 21.15625 C 5.578125 21.136719 5.371094 21.304688 5.335938 21.539062 C 5.335938 21.558594 5.335938 21.582031 5.335938 21.601562 Z M 11.875 9.097656 C 11.980469 9.027344 12.0625 8.925781 12.105469 8.804688 C 12.179688 8.574219 12.101562 8.324219 11.914062 8.175781 C 11.722656 8.027344 11.457031 8.015625 11.253906 8.140625 L 10.292969 8.777344 C 10.027344 8.953125 9.957031 9.308594 10.132812 9.570312 C 10.308594 9.835938 10.664062 9.910156 10.929688 9.734375 L 11.890625 9.097656 Z M 14.757812 7.222656 C 14.867188 7.152344 14.945312 7.050781 14.988281 6.925781 C 15.0625 6.699219 14.984375 6.449219 14.796875 6.300781 C 14.605469 6.152344 14.339844 6.136719 14.136719 6.265625 L 13.171875 6.898438 C 13.0625 6.96875 12.980469 7.074219 12.9375 7.195312 C 12.863281 7.421875 12.9375 7.675781 13.128906 7.824219 C 13.320312 7.96875 13.582031 7.984375 13.789062 7.855469 L 14.75 7.222656 Z M 14.757812 7.222656 "
      fill="currentColor"
    />
  </Svg>
);

export const Exit = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 32" {...props}>
    <path
      d="M 6.828125 0.015625 L 19.125 0.015625 C 20.46875 0.015625 21.683594 0.558594 22.566406 1.425781 C 23.449219 2.300781 24 3.503906 24 4.824219 L 24 27.175781 C 24 28.492188 23.449219 29.695312 22.566406 30.566406 L 22.5625 30.574219 C 21.675781 31.445312 20.457031 31.984375 19.125 31.984375 L 6.828125 31.984375 C 5.488281 31.984375 4.269531 31.445312 3.386719 30.570312 C 2.503906 29.703125 1.953125 28.5 1.953125 27.175781 L 1.953125 22.550781 L 4.332031 22.550781 L 4.332031 27.175781 C 4.332031 27.851562 4.613281 28.46875 5.066406 28.914062 C 5.519531 29.359375 6.144531 29.640625 6.828125 29.640625 L 19.125 29.640625 C 19.8125 29.640625 20.4375 29.363281 20.886719 28.917969 C 21.339844 28.46875 21.621094 27.851562 21.621094 27.175781 L 21.621094 4.824219 C 21.621094 4.148438 21.339844 3.53125 20.886719 3.085938 C 20.4375 2.640625 19.8125 2.359375 19.125 2.359375 L 6.828125 2.359375 C 6.140625 2.359375 5.515625 2.640625 5.066406 3.085938 C 4.613281 3.53125 4.332031 4.148438 4.332031 4.824219 L 4.332031 9.445312 L 1.953125 9.445312 L 1.953125 4.824219 C 1.953125 3.5 2.503906 2.296875 3.386719 1.425781 C 4.269531 0.554688 5.488281 0.015625 6.828125 0.015625 Z M 10.566406 10.121094 L 16.710938 15.847656 L 10.265625 21.875 L 8.632812 20.179688 L 11.859375 17.160156 L 0 17.179688 L 0 14.84375 L 12.160156 14.824219 L 8.941406 11.824219 Z M 10.566406 10.121094 "
      fill="currentColor"
    />
  </Svg>
);
export const Home = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path
      d="M9.73037 2.78835C11.0004 1.77935 12.7804 1.73935 14.0894 2.66835L14.2504 2.78835L20.3394 7.65935C21.0094 8.17835 21.4204 8.94936 21.4904 9.78835L21.5004 9.98935V18.0984C21.5004 20.1884 19.8494 21.8884 17.7804 21.9984H15.7904C14.8394 21.9794 14.0704 21.2394 14.0004 20.3094L13.9904 20.1684V17.3094C13.9904 16.9984 13.7594 16.7394 13.4504 16.6884L13.3604 16.6784H10.6894C10.3704 16.6884 10.1104 16.9184 10.0704 17.2184L10.0604 17.3094V20.1594C10.0604 20.2184 10.0494 20.2884 10.0404 20.3384L10.0304 20.3594L10.0194 20.4284C9.90037 21.2794 9.20037 21.9284 8.33037 21.9894L8.20037 21.9984H6.41037C4.32037 21.9984 2.61037 20.3594 2.50037 18.2984V9.98935C2.50937 9.13835 2.88037 8.34835 3.50037 7.79835L9.73037 2.78835ZM13.3804 3.87835C12.6204 3.26835 11.5404 3.23935 10.7404 3.76835L10.5894 3.87835L4.50937 8.77936C4.16037 9.03835 3.95037 9.42836 3.90037 9.83836L3.88937 9.99835V18.0984C3.88937 19.4284 4.92937 20.5184 6.25037 20.5984H8.20037C8.42037 20.5984 8.61037 20.4494 8.63937 20.2394L8.66037 20.0594L8.67037 20.0084V17.3094C8.67037 16.2394 9.49037 15.3694 10.5404 15.2884H13.3604C14.4294 15.2884 15.2994 16.1094 15.3804 17.1594V20.1684C15.3804 20.3784 15.5304 20.5594 15.7304 20.5984H17.5894C18.9294 20.5984 20.0194 19.5694 20.0994 18.2584L20.1104 18.0984V9.99835C20.0994 9.56936 19.9204 9.16835 19.6104 8.86935L19.4804 8.75835L13.3804 3.87835Z"
      fill="currentColor"
    />
  </Svg>
);
export const OrderList = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 25" {...props}>
    <path
      d="M 5.257812 17.664062 C 4.882812 17.664062 4.578125 17.367188 4.578125 17.003906 C 4.578125 16.636719 4.886719 16.34375 5.257812 16.34375 L 9.730469 16.34375 C 10.105469 16.34375 10.40625 16.636719 10.40625 17.003906 C 10.40625 17.367188 10.101562 17.664062 9.730469 17.664062 Z M 12.710938 15.75 C 12.511719 15.75 12.34375 15.582031 12.34375 15.378906 C 12.34375 15.183594 12.511719 15.019531 12.710938 15.019531 L 13.679688 15.019531 C 13.6875 15.019531 13.710938 15.019531 13.71875 15.019531 C 14.058594 15.027344 14.363281 15.089844 14.617188 15.25 C 14.902344 15.425781 15.113281 15.695312 15.226562 16.089844 C 15.226562 16.097656 15.226562 16.109375 15.238281 16.117188 L 15.332031 16.488281 L 23.632812 16.488281 C 23.839844 16.488281 24.003906 16.652344 24.003906 16.847656 C 24.003906 16.886719 23.992188 16.921875 23.984375 16.960938 L 23.015625 20.757812 C 22.976562 20.921875 22.828125 21.035156 22.65625 21.035156 L 16.585938 21.035156 C 16.71875 21.515625 16.851562 21.773438 17.03125 21.894531 C 17.25 22.03125 17.628906 22.042969 18.265625 22.03125 L 22.558594 22.03125 C 22.769531 22.03125 22.929688 22.199219 22.929688 22.394531 C 22.929688 22.59375 22.761719 22.753906 22.558594 22.753906 L 18.269531 22.753906 C 17.480469 22.761719 17 22.742188 16.609375 22.492188 C 16.210938 22.234375 16.003906 21.792969 15.792969 20.988281 L 14.523438 16.300781 C 14.523438 16.292969 14.523438 16.292969 14.515625 16.28125 C 14.457031 16.082031 14.363281 15.941406 14.230469 15.867188 C 14.097656 15.785156 13.917969 15.75 13.707031 15.75 C 13.695312 15.75 13.6875 15.75 13.679688 15.75 Z M 21.449219 23.175781 C 21.953125 23.175781 22.359375 23.574219 22.359375 24.0625 C 22.359375 24.554688 21.953125 24.953125 21.449219 24.953125 C 20.945312 24.953125 20.539062 24.554688 20.539062 24.0625 C 20.539062 23.574219 20.945312 23.175781 21.449219 23.175781 Z M 17.453125 23.175781 C 17.957031 23.175781 18.367188 23.574219 18.367188 24.0625 C 18.367188 24.554688 17.957031 24.953125 17.453125 24.953125 C 16.949219 24.953125 16.542969 24.554688 16.542969 24.0625 C 16.542969 23.574219 16.953125 23.175781 17.453125 23.175781 Z M 5.257812 6.855469 C 4.882812 6.855469 4.578125 6.558594 4.578125 6.195312 C 4.578125 5.828125 4.886719 5.535156 5.257812 5.535156 L 15.769531 5.535156 C 16.144531 5.535156 16.449219 5.828125 16.449219 6.195312 C 16.449219 6.558594 16.144531 6.855469 15.769531 6.855469 Z M 1.574219 0.0507812 L 19.390625 0.0507812 C 19.828125 0.0507812 20.222656 0.222656 20.503906 0.496094 C 20.789062 0.773438 20.964844 1.160156 20.964844 1.582031 L 20.964844 13.734375 L 19.613281 13.734375 L 19.613281 1.589844 C 19.613281 1.53125 19.585938 1.476562 19.546875 1.433594 C 19.503906 1.394531 19.449219 1.371094 19.390625 1.371094 L 1.574219 1.371094 C 1.515625 1.371094 1.457031 1.394531 1.417969 1.433594 C 1.375 1.472656 1.355469 1.53125 1.355469 1.589844 L 1.355469 21.582031 C 1.355469 21.640625 1.378906 21.695312 1.417969 21.734375 C 1.457031 21.777344 1.515625 21.800781 1.578125 21.800781 L 13.03125 21.800781 C 13.15625 22.285156 13.300781 22.707031 13.496094 23.109375 L 1.574219 23.109375 C 1.140625 23.109375 0.746094 22.9375 0.460938 22.664062 C 0.175781 22.386719 0 22.003906 0 21.582031 L 0 1.585938 C 0 1.160156 0.175781 0.773438 0.460938 0.496094 C 0.742188 0.222656 1.140625 0.0507812 1.574219 0.0507812 Z M 5.257812 12.257812 C 4.882812 12.257812 4.578125 11.964844 4.578125 11.597656 C 4.578125 11.234375 4.886719 10.9375 5.257812 10.9375 L 15.769531 10.9375 C 16.144531 10.9375 16.449219 11.234375 16.449219 11.597656 C 16.449219 11.964844 16.144531 12.257812 15.769531 12.257812 Z M 5.257812 12.257812 "
      fill="currentColor"
    />
  </Svg>
);
export const Orders = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 23 21" {...props}>
    <path
      d="M 0.734375 1.5625 C 0.328125 1.5625 0 1.222656 0 0.800781 C 0 0.378906 0.328125 0.0351562 0.734375 0.0351562 L 2.722656 0.0351562 C 3.347656 0.0234375 3.96875 0.191406 4.511719 0.519531 C 5.117188 0.921875 5.550781 1.558594 5.710938 2.289062 C 5.769531 2.566406 5.835938 2.839844 5.898438 3.113281 L 22.273438 3.113281 C 22.46875 3.113281 22.65625 3.191406 22.792969 3.335938 C 22.933594 3.480469 23.007812 3.675781 23.007812 3.875 C 23.007812 3.957031 22.996094 4.039062 22.972656 4.113281 L 21.0625 12.117188 C 20.980469 12.460938 20.6875 12.699219 20.351562 12.703125 L 8.359375 12.703125 C 8.628906 13.714844 8.875 14.257812 9.238281 14.519531 C 9.664062 14.816406 10.421875 14.835938 11.671875 14.816406 L 20.140625 14.816406 C 20.546875 14.816406 20.875 15.15625 20.875 15.578125 C 20.875 16.003906 20.546875 16.34375 20.140625 16.34375 L 11.691406 16.34375 C 10.144531 16.375 9.1875 16.328125 8.421875 15.792969 C 7.660156 15.257812 7.234375 14.324219 6.820312 12.621094 L 4.289062 2.691406 C 4.21875 2.335938 4.019531 2.023438 3.726562 1.820312 C 3.414062 1.640625 3.054688 1.554688 2.695312 1.566406 L 0.734375 1.566406 Z M 17.96875 17.226562 C 18.960938 17.226562 19.765625 18.066406 19.765625 19.097656 C 19.765625 20.128906 18.960938 20.964844 17.96875 20.964844 C 16.976562 20.964844 16.171875 20.128906 16.171875 19.097656 C 16.171875 18.066406 16.976562 17.226562 17.96875 17.226562 Z M 10.089844 17.226562 C 11.082031 17.226562 11.886719 18.066406 11.886719 19.097656 C 11.886719 20.128906 11.082031 20.964844 10.089844 20.964844 C 9.097656 20.964844 8.292969 20.128906 8.292969 19.097656 C 8.292969 18.066406 9.097656 17.226562 10.089844 17.226562 Z M 14.601562 4.640625 L 14.601562 7.429688 L 20.671875 7.429688 L 21.335938 4.652344 Z M 14.601562 8.949219 L 14.601562 11.171875 L 19.78125 11.171875 L 20.308594 8.949219 Z M 13.121094 11.171875 L 13.121094 8.949219 L 7.417969 8.949219 C 7.613281 9.691406 7.800781 10.429688 7.980469 11.171875 Z M 13.121094 7.421875 L 13.121094 4.640625 L 6.277344 4.640625 C 6.511719 5.566406 6.761719 6.496094 7.007812 7.421875 Z M 13.121094 7.421875 "
      fill="currentColor"
    />
  </Svg>
);
export const Profile = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 24 23" {...props}>
    <path
      d="M 0 21.4375 C 0.453125 15.492188 2.5 17.007812 7.160156 14.050781 C 8.597656 17.09375 14.445312 17.316406 15.644531 14.050781 C 16.179688 14.398438 16.699219 14.667969 17.195312 14.894531 C 16.964844 15.058594 16.75 15.246094 16.550781 15.445312 C 15.613281 16.398438 15.03125 17.714844 15.03125 19.167969 C 15.03125 19.980469 15.210938 20.75 15.535156 21.4375 Z M 22.753906 16.5625 C 22.683594 16.488281 22.597656 16.453125 22.503906 16.453125 C 22.40625 16.453125 22.324219 16.488281 22.253906 16.5625 L 21.871094 16.945312 C 21.664062 16.8125 21.4375 16.710938 21.203125 16.632812 L 21.203125 16.039062 C 21.203125 15.941406 21.167969 15.855469 21.101562 15.785156 C 21.03125 15.714844 20.949219 15.683594 20.851562 15.683594 L 20.117188 15.683594 C 20.023438 15.683594 19.941406 15.714844 19.871094 15.785156 C 19.800781 15.855469 19.765625 15.941406 19.765625 16.039062 L 19.765625 16.582031 C 19.527344 16.640625 19.296875 16.726562 19.082031 16.847656 L 18.660156 16.425781 C 18.59375 16.355469 18.515625 16.316406 18.417969 16.316406 C 18.320312 16.316406 18.238281 16.355469 18.164062 16.425781 L 17.652344 16.945312 C 17.582031 17.019531 17.546875 17.101562 17.546875 17.199219 C 17.546875 17.296875 17.582031 17.382812 17.652344 17.453125 L 18.03125 17.839844 C 17.898438 18.050781 17.800781 18.28125 17.722656 18.519531 L 17.136719 18.519531 C 17.039062 18.519531 16.957031 18.550781 16.886719 18.621094 C 16.820312 18.691406 16.785156 18.777344 16.785156 18.875 L 16.785156 19.621094 C 16.785156 19.714844 16.820312 19.796875 16.886719 19.867188 C 16.957031 19.941406 17.039062 19.976562 17.136719 19.976562 L 17.671875 19.976562 C 17.730469 20.222656 17.820312 20.453125 17.933594 20.675781 L 17.519531 21.097656 C 17.449219 21.164062 17.414062 21.246094 17.414062 21.34375 C 17.414062 21.441406 17.449219 21.527344 17.519531 21.597656 L 18.03125 22.125 C 18.101562 22.191406 18.1875 22.226562 18.28125 22.226562 C 18.378906 22.226562 18.464844 22.191406 18.53125 22.125 L 18.914062 21.734375 C 19.117188 21.867188 19.351562 21.96875 19.582031 22.046875 L 19.582031 22.640625 C 19.582031 22.738281 19.617188 22.824219 19.683594 22.894531 C 19.753906 22.960938 19.835938 22.996094 19.933594 22.996094 L 20.667969 22.996094 C 20.761719 22.996094 20.84375 22.960938 20.914062 22.894531 C 20.984375 22.824219 21.019531 22.738281 21.019531 22.640625 L 21.019531 22.097656 C 21.261719 22.039062 21.492188 21.949219 21.710938 21.832031 L 22.125 22.253906 C 22.191406 22.324219 22.273438 22.363281 22.371094 22.363281 C 22.472656 22.363281 22.554688 22.324219 22.621094 22.253906 L 23.140625 21.734375 C 23.207031 21.660156 23.238281 21.578125 23.238281 21.480469 C 23.238281 21.382812 23.207031 21.296875 23.140625 21.226562 L 22.753906 20.839844 C 22.886719 20.628906 22.984375 20.398438 23.0625 20.160156 L 23.648438 20.160156 C 23.746094 20.160156 23.828125 20.128906 23.898438 20.058594 C 23.964844 19.988281 24 19.902344 24 19.804688 L 24 19.0625 C 24 18.964844 23.964844 18.882812 23.898438 18.8125 C 23.828125 18.738281 23.746094 18.703125 23.648438 18.703125 L 23.113281 18.703125 C 23.054688 18.464844 22.96875 18.226562 22.851562 18.011719 L 23.269531 17.582031 C 23.335938 17.515625 23.375 17.433594 23.375 17.335938 C 23.375 17.238281 23.335938 17.15625 23.269531 17.082031 Z M 20.390625 17.898438 C 20.585938 17.898438 20.769531 17.9375 20.945312 18.011719 C 21.121094 18.089844 21.269531 18.191406 21.398438 18.320312 C 21.527344 18.449219 21.628906 18.601562 21.703125 18.777344 C 21.773438 18.957031 21.8125 19.140625 21.8125 19.339844 C 21.8125 19.539062 21.773438 19.722656 21.703125 19.902344 C 21.628906 20.078125 21.527344 20.230469 21.398438 20.359375 C 21.269531 20.488281 21.121094 20.59375 20.945312 20.667969 C 20.769531 20.742188 20.585938 20.78125 20.390625 20.78125 C 20.199219 20.78125 20.011719 20.742188 19.839844 20.667969 C 19.664062 20.59375 19.515625 20.488281 19.386719 20.359375 C 19.257812 20.230469 19.15625 20.078125 19.082031 19.902344 C 19.007812 19.722656 18.972656 19.539062 18.972656 19.339844 C 18.972656 19.140625 19.007812 18.957031 19.082031 18.777344 C 19.15625 18.601562 19.257812 18.449219 19.386719 18.320312 C 19.515625 18.191406 19.664062 18.089844 19.839844 18.011719 C 20.011719 17.9375 20.199219 17.898438 20.390625 17.898438 Z M 8.257812 13.8125 C 8.195312 13.730469 8.417969 13.167969 8.472656 13.078125 C 7.863281 12.53125 7.382812 11.976562 7.28125 10.835938 L 7.214844 10.835938 C 7.0625 10.835938 6.917969 10.800781 6.78125 10.722656 C 6.566406 10.597656 6.410156 10.378906 6.308594 10.136719 C 6.089844 9.628906 5.367188 7.933594 6.46875 8.066406 C 5.851562 6.902344 7.242188 4.914062 4.84375 4.179688 C 6.8125 1.648438 10.96875 -2.25 14.011719 1.664062 C 17.34375 1.988281 18.386719 6.003906 16.140625 8.203125 C 16.273438 8.210938 16.394531 8.242188 16.507812 8.300781 C 16.921875 8.527344 16.9375 9.019531 16.828125 9.429688 C 16.71875 9.773438 16.582031 10.007812 16.453125 10.34375 C 16.292969 10.796875 16.0625 10.882812 15.617188 10.832031 C 15.59375 11.953125 15.082031 12.503906 14.394531 13.164062 L 14.582031 13.808594 C 13.660156 15.792969 9.828125 15.875 8.257812 13.8125 Z M 8.257812 13.8125 "
      fill="currentColor"
    />
  </Svg>
);
export const Stats = ({ ...props }: Record<string, string>): JSX.Element => (
  <Svg viewBox="0 0 23 18" {...props}>
    <path
      d="M 2.007812 0 L 15.714844 0 C 16.261719 0 16.757812 0.234375 17.121094 0.605469 C 17.484375 0.976562 17.710938 1.496094 17.710938 2.054688 L 17.710938 4.277344 C 17.53125 4.328125 17.136719 4.421875 16.636719 4.539062 L 16.636719 2.054688 C 16.636719 1.796875 16.53125 1.558594 16.363281 1.386719 C 16.195312 1.214844 15.96875 1.105469 15.714844 1.105469 L 2.007812 1.105469 C 1.761719 1.105469 1.542969 1.203125 1.378906 1.359375 L 1.355469 1.382812 C 1.1875 1.554688 1.085938 1.792969 1.085938 2.054688 L 1.085938 8.535156 C 2.179688 7.582031 3.484375 6.511719 4.390625 5.730469 C 4.585938 5.554688 4.878906 5.558594 5.070312 5.726562 C 5.109375 5.761719 5.140625 5.800781 5.171875 5.839844 L 7.734375 10.207031 L 8.964844 7.074219 C 9.046875 6.636719 9.546875 6.492188 9.851562 6.785156 L 10.507812 7.429688 L 10.414062 8.839844 L 9.847656 8.28125 L 8.492188 11.539062 C 8.429688 12 7.871094 12.175781 7.570312 11.816406 L 4.683594 6.925781 L 1.085938 10.035156 L 1.085938 14.175781 C 1.085938 14.4375 1.191406 14.675781 1.355469 14.847656 C 1.523438 15.019531 1.753906 15.125 2.007812 15.125 L 10.003906 15.125 L 9.957031 15.785156 C 9.957031 15.929688 10.035156 16.0625 10.160156 16.132812 L 10.367188 16.230469 L 2.007812 16.230469 C 1.464844 16.230469 0.960938 15.996094 0.597656 15.625 C 0.238281 15.25 0.0117188 14.738281 0.0117188 14.175781 L 0.0117188 2.054688 C 0.0117188 1.488281 0.234375 0.976562 0.597656 0.601562 L 0.632812 0.570312 C 0.992188 0.214844 1.476562 0 2.007812 0 Z M 18.46875 11.699219 C 18.734375 11.566406 19 11.433594 19.261719 11.304688 C 19.527344 11.171875 19.792969 11.039062 20.054688 10.910156 C 20.367188 10.753906 20.621094 10.679688 20.820312 10.679688 C 21.019531 10.675781 21.1875 10.730469 21.332031 10.839844 C 21.472656 10.949219 21.585938 11.101562 21.667969 11.296875 C 21.753906 11.496094 21.808594 11.714844 21.839844 11.96875 C 21.886719 12.359375 21.878906 12.683594 21.816406 12.945312 C 21.753906 13.207031 21.648438 13.457031 21.503906 13.691406 C 21.355469 13.925781 21.191406 14.117188 21.007812 14.265625 C 20.757812 14.472656 20.523438 14.636719 20.316406 14.75 C 20.019531 14.910156 19.726562 15.070312 19.429688 15.230469 C 19.136719 15.390625 18.839844 15.550781 18.542969 15.710938 C 18.523438 15.050781 18.503906 14.386719 18.492188 13.71875 C 18.480469 13.046875 18.472656 12.375 18.46875 11.699219 Z M 19.574219 12.054688 C 19.589844 12.414062 19.605469 12.769531 19.625 13.125 C 19.640625 13.476562 19.660156 13.832031 19.683594 14.183594 C 19.777344 14.132812 19.871094 14.082031 19.964844 14.03125 C 20.210938 13.902344 20.378906 13.785156 20.480469 13.675781 C 20.574219 13.566406 20.648438 13.429688 20.691406 13.265625 C 20.738281 13.101562 20.746094 12.867188 20.722656 12.566406 C 20.6875 12.164062 20.605469 11.921875 20.472656 11.835938 C 20.339844 11.746094 20.132812 11.773438 19.847656 11.917969 C 19.753906 11.964844 19.664062 12.011719 19.574219 12.054688 Z M 14.078125 11.9375 C 13.886719 11.839844 13.695312 11.742188 13.503906 11.644531 C 13.308594 11.550781 13.117188 11.453125 12.925781 11.359375 C 13.035156 11.085938 13.230469 10.90625 13.515625 10.832031 C 13.65625 10.792969 13.824219 10.78125 14.019531 10.800781 C 14.214844 10.820312 14.4375 10.871094 14.6875 10.949219 C 14.976562 11.042969 15.222656 11.148438 15.429688 11.265625 C 15.636719 11.382812 15.800781 11.511719 15.925781 11.65625 C 16.175781 11.9375 16.296875 12.234375 16.285156 12.53125 C 16.277344 12.707031 16.21875 12.84375 16.109375 12.945312 C 16 13.046875 15.835938 13.109375 15.625 13.132812 C 15.792969 13.234375 15.921875 13.332031 16.011719 13.417969 C 16.15625 13.558594 16.265625 13.710938 16.339844 13.875 C 16.417969 14.042969 16.453125 14.21875 16.445312 14.40625 C 16.4375 14.636719 16.363281 14.832031 16.21875 14.988281 C 16.074219 15.140625 15.871094 15.214844 15.613281 15.210938 C 15.480469 15.210938 15.332031 15.1875 15.164062 15.140625 C 14.996094 15.09375 14.808594 15.023438 14.601562 14.933594 C 14.195312 14.757812 13.878906 14.578125 13.648438 14.398438 C 13.417969 14.222656 13.234375 14.027344 13.089844 13.816406 C 12.945312 13.605469 12.839844 13.375 12.769531 13.117188 C 12.976562 13.175781 13.183594 13.238281 13.390625 13.296875 C 13.597656 13.355469 13.804688 13.414062 14.011719 13.472656 C 14.050781 13.703125 14.117188 13.878906 14.214844 14 C 14.316406 14.125 14.441406 14.21875 14.601562 14.285156 C 14.765625 14.355469 14.90625 14.363281 15.019531 14.304688 C 15.136719 14.246094 15.195312 14.128906 15.203125 13.953125 C 15.210938 13.773438 15.164062 13.613281 15.0625 13.472656 C 14.960938 13.332031 14.820312 13.226562 14.636719 13.15625 C 14.542969 13.121094 14.40625 13.089844 14.238281 13.066406 C 14.269531 12.824219 14.300781 12.582031 14.335938 12.339844 C 14.402344 12.371094 14.453125 12.394531 14.492188 12.410156 C 14.652344 12.46875 14.785156 12.472656 14.894531 12.421875 C 15.003906 12.371094 15.0625 12.285156 15.070312 12.160156 C 15.074219 12.042969 15.035156 11.933594 14.960938 11.835938 C 14.882812 11.734375 14.773438 11.664062 14.636719 11.613281 C 14.492188 11.566406 14.371094 11.5625 14.277344 11.609375 C 14.1875 11.652344 14.121094 11.761719 14.078125 11.9375 Z M 11.898438 8.019531 L 17.214844 6.195312 C 17.277344 6.175781 17.34375 6.175781 17.402344 6.195312 L 22.785156 8.097656 C 22.917969 8.140625 23 8.273438 22.988281 8.414062 C 22.988281 8.417969 22.988281 8.425781 22.988281 8.433594 L 22.988281 14.882812 C 22.988281 14.996094 22.925781 15.105469 22.824219 15.15625 L 17.476562 17.957031 C 17.433594 17.984375 17.378906 18 17.324219 18 C 17.265625 18 17.207031 17.980469 17.160156 17.949219 L 11.804688 15.070312 C 11.707031 15.019531 11.644531 14.914062 11.644531 14.800781 L 11.644531 8.324219 C 11.644531 8.171875 11.753906 8.039062 11.898438 8.019531 Z M 17.027344 17.1875 L 17.027344 11.019531 L 12.238281 8.785156 L 12.238281 14.617188 Z M 22.390625 8.855469 L 17.621094 11.023438 L 17.621094 17.195312 L 22.390625 14.695312 Z M 17.304688 6.808594 L 12.777344 8.363281 L 17.324219 10.488281 L 21.875 8.421875 Z M 9.785156 2.527344 C 10.230469 2.527344 10.632812 2.714844 10.921875 3.011719 C 11.214844 3.3125 11.394531 3.726562 11.394531 4.183594 C 11.394531 4.640625 11.214844 5.054688 10.921875 5.355469 C 10.632812 5.65625 10.230469 5.839844 9.785156 5.839844 C 9.34375 5.839844 8.941406 5.65625 8.648438 5.355469 C 8.359375 5.054688 8.179688 4.640625 8.179688 4.183594 C 8.179688 3.726562 8.359375 3.3125 8.648438 3.011719 C 8.941406 2.714844 9.34375 2.527344 9.785156 2.527344 Z M 10.277344 3.679688 C 10.144531 3.546875 9.96875 3.46875 9.785156 3.46875 C 9.59375 3.46875 9.421875 3.550781 9.296875 3.679688 C 9.164062 3.8125 9.09375 3.996094 9.09375 4.183594 C 9.09375 4.382812 9.171875 4.5625 9.296875 4.691406 C 9.425781 4.824219 9.601562 4.898438 9.785156 4.898438 C 9.976562 4.898438 10.152344 4.816406 10.277344 4.691406 C 10.402344 4.5625 10.480469 4.382812 10.480469 4.183594 C 10.480469 3.988281 10.402344 3.808594 10.277344 3.679688 Z M 10.277344 3.679688 "
      fill="currentColor"
    />
  </Svg>
);
