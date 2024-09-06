import React from "react";

interface IntegrationTestingProps {
  stroke?: string;
  addClass?: string;
}

export const IntegrationTesting: React.FC<IntegrationTestingProps> = ({
  stroke,
  addClass,
}) => {
  return (
    <svg
      className={addClass}
      width="68"
      height="67"
      viewBox="0 0 68 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34" cy="33.5" r="33.5" />
      <path
        d="M47.7081 19.2926C47.6152 19.1996 47.5049 19.1258 47.3835 19.0755C47.2621 19.0252 47.132 18.9993 47.0006 18.9993C46.8691 18.9993 46.739 19.0252 46.6176 19.0755C46.4962 19.1258 46.3859 19.1996 46.2931 19.2926L39.7431 25.8438L39.0718 25.1713C38.3208 24.4225 37.3036 24.002 36.2431 24.002C35.1825 24.002 34.1653 24.4225 33.4143 25.1713L30.5006 28.0863L29.7081 27.2926C29.5204 27.1049 29.2659 26.9995 29.0006 26.9995C28.7352 26.9995 28.4807 27.1049 28.2931 27.2926C28.1054 27.4802 28 27.7347 28 28.0001C28 28.2654 28.1054 28.5199 28.2931 28.7076L29.0868 29.5001L26.1718 32.4138C25.8003 32.7853 25.5056 33.2262 25.3045 33.7116C25.1034 34.197 24.9999 34.7172 24.9999 35.2426C24.9999 35.7679 25.1034 36.2881 25.3045 36.7735C25.5056 37.2589 25.8003 37.6999 26.1718 38.0713L26.8443 38.7426L20.2931 45.2926C20.2001 45.3855 20.1264 45.4958 20.0762 45.6172C20.0259 45.7386 20 45.8687 20 46.0001C20 46.1314 20.0259 46.2616 20.0762 46.3829C20.1264 46.5043 20.2001 46.6146 20.2931 46.7076C20.4807 46.8952 20.7352 47.0006 21.0006 47.0006C21.132 47.0006 21.2621 46.9747 21.3835 46.9244C21.5048 46.8742 21.6151 46.8005 21.7081 46.7076L28.2581 40.1563L28.9293 40.8288C29.3008 41.2003 29.7417 41.4951 30.2271 41.6961C30.7125 41.8972 31.2327 42.0007 31.7581 42.0007C32.2834 42.0007 32.8036 41.8972 33.289 41.6961C33.7744 41.4951 34.2154 41.2003 34.5868 40.8288L37.5006 37.9138L38.2931 38.7076C38.386 38.8005 38.4963 38.8742 38.6177 38.9244C38.7391 38.9747 38.8692 39.0006 39.0006 39.0006C39.132 39.0006 39.2621 38.9747 39.3835 38.9244C39.5048 38.8742 39.6151 38.8005 39.7081 38.7076C39.801 38.6146 39.8747 38.5043 39.9249 38.3829C39.9752 38.2616 40.0011 38.1314 40.0011 38.0001C40.0011 37.8687 39.9752 37.7386 39.9249 37.6172C39.8747 37.4958 39.801 37.3855 39.7081 37.2926L38.9143 36.5001L41.8293 33.5863C42.2008 33.2149 42.4956 32.7739 42.6966 32.2885C42.8977 31.8031 43.0012 31.2829 43.0012 30.7576C43.0012 30.2322 42.8977 29.712 42.6966 29.2266C42.4956 28.7412 42.2008 28.3003 41.8293 27.9288L41.1568 27.2576L47.7081 20.7076C47.801 20.6147 47.8748 20.5044 47.9251 20.383C47.9754 20.2616 48.0013 20.1315 48.0013 20.0001C48.0013 19.8686 47.9754 19.7385 47.9251 19.6171C47.8748 19.4957 47.801 19.3854 47.7081 19.2926ZM33.1718 39.4176C32.7968 39.7923 32.2883 40.0029 31.7581 40.0029C31.2278 40.0029 30.7193 39.7923 30.3443 39.4176L27.5868 36.6563C27.212 36.2813 27.0015 35.7728 27.0015 35.2426C27.0015 34.7123 27.212 34.2038 27.5868 33.8288L30.5006 30.9138L36.0868 36.5001L33.1718 39.4176ZM40.4143 32.1751L37.5006 35.0863L31.9143 29.5001L34.8293 26.5863C35.2043 26.2115 35.7129 26.001 36.2431 26.001C36.7733 26.001 37.2818 26.2115 37.6568 26.5863L40.4143 29.3363C40.601 29.5221 40.7492 29.743 40.8503 29.9863C40.9513 30.2295 41.0034 30.4904 41.0034 30.7538C41.0034 31.0172 40.9513 31.2781 40.8503 31.5213C40.7492 31.7646 40.601 31.9855 40.4143 32.1713V32.1751ZM29.0718 21.3751C28.9724 21.1287 28.9748 20.853 29.0787 20.6085C29.1825 20.364 29.3792 20.1708 29.6256 20.0713C29.8719 19.9718 30.1476 19.9743 30.3921 20.0782C30.6366 20.182 30.8299 20.3787 30.9293 20.6251L31.9293 23.1251C31.9786 23.247 32.0033 23.3775 32.0021 23.509C32.0009 23.6405 31.9739 23.7706 31.9224 23.8916C31.871 24.0127 31.7963 24.1224 31.7024 24.2146C31.6086 24.3068 31.4975 24.3796 31.3756 24.4288C31.2536 24.4781 31.1231 24.5028 30.9916 24.5016C30.8601 24.5004 30.7301 24.4734 30.609 24.4219C30.4879 24.3705 30.3782 24.2958 30.286 24.2019C30.1938 24.1081 30.1211 23.997 30.0718 23.8751L29.0718 21.3751ZM21.0718 28.6251C21.1209 28.503 21.1936 28.3917 21.2857 28.2978C21.3778 28.2038 21.4876 28.129 21.6087 28.0776C21.7299 28.0261 21.8599 27.9991 21.9915 27.998C22.1231 27.9969 22.2536 28.0218 22.3756 28.0713L24.8756 29.0713C24.9975 29.1206 25.1086 29.1933 25.2024 29.2855C25.2963 29.3777 25.371 29.4874 25.4224 29.6085C25.4739 29.7296 25.5009 29.8596 25.5021 29.9911C25.5033 30.1226 25.4786 30.2531 25.4293 30.3751C25.3801 30.497 25.3073 30.6081 25.2151 30.7019C25.1229 30.7958 25.0132 30.8705 24.8921 30.9219C24.7711 30.9734 24.641 31.0004 24.5095 31.0016C24.378 31.0028 24.2475 30.9781 24.1256 30.9288L21.6256 29.9288C21.5035 29.8797 21.3922 29.807 21.2983 29.7149C21.2043 29.6228 21.1295 29.513 21.0781 29.3919C21.0266 29.2708 20.9996 29.1407 20.9985 29.0091C20.9974 28.8775 21.0223 28.747 21.0718 28.6251ZM46.9293 37.3751C46.8806 37.497 46.8083 37.6082 46.7166 37.7023C46.6249 37.7963 46.5155 37.8713 46.3948 37.9231C46.2741 37.9749 46.1443 38.0024 46.013 38.004C45.8816 38.0056 45.7513 37.9813 45.6293 37.9326L43.1293 36.9326C43.0071 36.8836 42.8957 36.811 42.8016 36.7189C42.7074 36.6269 42.6323 36.5172 42.5805 36.3961C42.5288 36.2751 42.5014 36.145 42.4999 36.0133C42.4984 35.8817 42.5228 35.751 42.5718 35.6288C42.6208 35.5066 42.6934 35.3952 42.7854 35.3011C42.8775 35.2069 42.9872 35.1318 43.1082 35.08C43.2293 35.0283 43.3594 35.0009 43.491 34.9994C43.6227 34.9979 43.7533 35.0223 43.8756 35.0713L46.3756 36.0713C46.4977 36.1204 46.6089 36.1931 46.7028 36.2852C46.7968 36.3773 46.8716 36.4871 46.9231 36.6082C46.9745 36.7294 47.0015 36.8594 47.0026 36.991C47.0037 37.1226 46.9788 37.2531 46.9293 37.3751ZM38.9293 44.6326C38.9781 44.7545 39.0023 44.8849 39.0007 45.0162C38.999 45.1476 38.9716 45.2773 38.9198 45.398C38.868 45.5187 38.793 45.6281 38.699 45.7198C38.6049 45.8115 38.4938 45.8838 38.3718 45.9326C38.2498 45.9813 38.1195 46.0056 37.9881 46.0039C37.8568 46.0023 37.7271 45.9748 37.6063 45.923C37.4856 45.8713 37.3763 45.7962 37.2846 45.7022C37.1929 45.6082 37.1206 45.497 37.0718 45.3751L36.0718 42.8751C35.9724 42.6287 35.9748 42.353 36.0787 42.1085C36.1825 41.864 36.3792 41.6708 36.6256 41.5713C36.8719 41.4718 37.1476 41.4743 37.3921 41.5782C37.6366 41.682 37.8298 41.8787 37.9293 42.1251L38.9293 44.6326Z"
        fill="white"
      />
    </svg>
  );
};
