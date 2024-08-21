export default function Coin ({width = 52}) {
    return (
 <svg width={width} height={width} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx={26} cy={26} r={26} fill="#F9E160" />
  <g filter="url(#filter0_i_2016_21902)">
    <circle cx="26.0002" cy={26} r="21.5932" fill="#FE881C" fillOpacity="0.72" />
  </g>
  <g filter="url(#filter1_d_2016_21902)">
    <path d="M25.0029 40.5424V37.6181C21.8585 37.3798 19.3999 36.2534 17.6272 34.2389L19.6848 31.3145C21.141 32.9175 22.9137 33.8814 25.0029 34.2064V27.9353C24.0111 27.6754 23.188 27.4263 22.5338 27.188C21.8796 26.9281 21.1937 26.5707 20.4762 26.1158C19.7587 25.6392 19.21 25.0327 18.8301 24.2962C18.4713 23.538 18.292 22.6499 18.292 21.6318C18.292 19.9639 18.904 18.545 20.128 17.3753C21.352 16.2056 22.977 15.5341 25.0029 15.3608V12.339H27.5354V15.3933C30.0889 15.6749 32.2098 16.6496 33.8981 18.3176L31.7772 21.1444C30.6165 19.9747 29.2026 19.2165 27.5354 18.87V24.4586C28.3162 24.6753 28.981 24.8811 29.5297 25.076C30.0784 25.271 30.6798 25.5526 31.334 25.9208C32.0093 26.2674 32.5475 26.6573 32.9485 27.0905C33.3494 27.5021 33.6871 28.0436 33.9614 28.7152C34.2358 29.3867 34.373 30.1448 34.373 30.9896C34.373 32.7659 33.7926 34.2713 32.6319 35.5061C31.4923 36.7191 29.7935 37.4231 27.5354 37.6181V40.5424H25.0029ZM29.8462 33.1666C30.3527 32.6251 30.606 32.0185 30.606 31.347C30.606 30.6755 30.3422 30.134 29.8146 29.7224C29.287 29.2892 28.5272 28.9209 27.5354 28.6177V34.2389C28.5695 34.0656 29.3397 33.7081 29.8462 33.1666ZM22.0906 21.3719C22.0906 22.4116 23.0614 23.2131 25.0029 23.7763V18.7075C24.0955 18.7941 23.3779 19.0866 22.8504 19.5848C22.3439 20.0613 22.0906 20.657 22.0906 21.3719Z" fill="#FFEA7C" />
  </g>
  <defs>
    <filter id="filter0_i_2016_21902" x="4.40698" y="4.40674" width="43.1865" height="43.8983" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feMorphology radius="0.711864" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2016_21902" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2016_21902" />
    </filter>
    <filter id="filter1_d_2016_21902" x="17.6272" y="12.339" width="16.7458" height="28.9152" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
      <feOffset dy="0.711864" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2016_21902" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2016_21902" result="shape" />
    </filter>
  </defs>
</svg>


    )
}