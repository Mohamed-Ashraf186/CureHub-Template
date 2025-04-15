"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import styled from "styled-components";

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.8);
`;

const chartData = [
  {
    department: "General Physician",
    visitors: 35,
    fill: "#00a8b5",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_2061_320)">
          <path
            d="M9.45293 1.803C8.95504 1.803 8.55143 1.39939 8.55143 0.901502C8.55143 0.403616 8.95504 0 9.45293 0C9.95081 0 10.3544 0.403616 10.3544 0.901502C10.3544 1.39939 9.95081 1.803 9.45293 1.803Z"
            fill="white"
          />
          <path
            d="M4.67656 1.803C4.17868 1.803 3.77506 1.39939 3.77506 0.901502C3.77506 0.403616 4.17868 0 4.67656 0C5.17445 0 5.57806 0.403616 5.57806 0.901502C5.57806 1.39939 5.17445 1.803 4.67656 1.803Z"
            fill="white"
          />
          <path
            d="M1.99057 1.72147C2.4486 0.928152 3.26892 0.454557 4.185 0.454557V1.34864C3.59213 1.34864 3.06132 1.65513 2.76484 2.16851C2.46836 2.68198 2.46836 3.29496 2.76475 3.80843L5.63672 8.78274C5.9331 9.29613 6.46401 9.60262 7.05688 9.60271C7.64974 9.60271 8.18065 9.29621 8.47712 8.78274L11.349 3.80834C11.6454 3.29496 11.6454 2.68189 11.349 2.16851C11.0526 1.65513 10.5216 1.34855 9.92875 1.34855V0.454468C10.8448 0.454468 11.6652 0.928062 12.1233 1.72147C12.5813 2.51488 12.5813 3.46207 12.1233 4.25539L9.2514 9.2297C8.86945 9.89123 8.23519 10.3293 7.50392 10.457V12.856C7.50392 15.1995 8.88733 17.106 10.5878 17.106C12.2882 17.106 13.6716 15.1995 13.6716 12.856V9.99959C12.6532 9.79198 11.8845 8.88932 11.8845 7.81034C11.8845 6.57839 12.8867 5.57612 14.1187 5.57612C15.3506 5.57612 16.3529 6.57839 16.3529 7.81034C16.3529 8.88923 15.5842 9.79189 14.5657 9.99959V12.856C14.5657 15.6925 12.7812 18.0001 10.5878 18.0001C8.39442 18.0001 6.60993 15.6925 6.60993 12.856V10.457C5.87875 10.3293 5.24439 9.89123 4.86253 9.2297L1.99057 4.25539C1.53244 3.46207 1.53244 2.51479 1.99057 1.72147Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2061_320">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="matrix(-1 0 0 1 18 0)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    background: "bg-primary",
  },
  {
    department: "Cardiology",
    visitors: 10,
    fill: "#fc0",
    icon: (
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8211 3.60921C11.5974 3.73244 11.5676 4.10815 11.7544 4.44822C11.9412 4.78863 12.2748 4.96494 12.4985 4.84176C12.7224 4.7192 12.7525 4.34345 12.5651 4.00275C12.3786 3.66237 12.0453 3.48602 11.8211 3.60921Z"
          fill="white"
        />
        <path
          d="M3.8216 11.5699C3.65637 11.2065 3.55435 10.8037 3.52918 10.311C3.52397 10.2111 3.52211 10.1066 3.52366 9.99884C3.5252 9.89098 3.43886 9.80249 3.33103 9.80067C3.22353 9.79975 3.13472 9.88578 3.13321 9.99389C3.13198 10.1097 3.13349 10.2219 3.13933 10.3312C3.16633 10.8667 3.28002 11.3229 3.46649 11.7318C3.65328 12.1401 3.91101 12.4992 4.22007 12.8479C4.40042 13.0512 4.47906 13.289 4.49165 13.5271C4.50455 13.7701 4.4425 14.0113 4.35127 14.1818C4.30089 14.2767 4.33682 14.3947 4.43209 14.4454C4.52702 14.4961 4.6456 14.4601 4.69598 14.3649C4.82166 14.1286 4.89721 13.8267 4.88153 13.5072C4.86617 13.1963 4.75803 12.8651 4.51228 12.5886C4.21947 12.2587 3.98751 11.9324 3.8216 11.5699Z"
          fill="white"
        />
        <path
          d="M6.79605 12.9229C7.06886 12.9088 7.2836 12.8126 7.42862 12.7201C7.57483 12.6283 7.65348 12.5401 7.66237 12.53C7.73367 12.4489 7.72601 12.3257 7.64458 12.2544C7.56439 12.1838 7.44152 12.1912 7.37054 12.271H7.36991L7.36776 12.2738C7.35546 12.287 7.29281 12.3496 7.19114 12.4083C7.08852 12.4683 6.94933 12.5238 6.7764 12.5328C6.66119 12.5383 6.53066 12.5242 6.3804 12.4728C6.11803 12.3835 5.88885 12.2203 5.69197 12.0203C5.39704 11.7199 5.17894 11.3374 5.03821 11.0308C4.96754 10.8775 4.91625 10.7429 4.88278 10.6483C4.8659 10.601 4.8536 10.5635 4.8459 10.538C4.84189 10.5254 4.83883 10.5159 4.83732 10.5098L4.83514 10.503L4.83454 10.5012C4.80537 10.3977 4.69751 10.3374 4.59365 10.3669C4.48984 10.3955 4.4299 10.5037 4.45879 10.6075V10.6072C4.46189 10.6164 4.58476 11.0526 4.86464 11.5491C5.00505 11.7973 5.18505 12.0609 5.41392 12.2941C5.64156 12.5261 5.91989 12.7282 6.25415 12.8422C6.44952 12.9094 6.63261 12.9309 6.79605 12.9229Z"
          fill="white"
        />
        <path
          d="M6.36779 14.796C6.27624 14.7179 6.19419 14.655 6.1134 14.6083C6.07223 14.5849 6.03166 14.5659 5.98807 14.5511C5.94504 14.537 5.89712 14.5278 5.84491 14.5302C5.80835 14.5321 5.76996 14.5404 5.73399 14.5567C5.6698 14.5843 5.62033 14.6347 5.58964 14.6857C5.54324 14.7638 5.52636 14.843 5.5156 14.9321C5.5058 15.0215 5.50516 15.1222 5.51128 15.2393C5.51652 15.3468 5.60838 15.4295 5.71621 15.4243C5.82371 15.4184 5.90668 15.3272 5.90116 15.2193C5.89716 15.1404 5.89684 15.0734 5.89993 15.0208C5.90176 14.988 5.90514 14.9628 5.90883 14.9413C5.92018 14.9477 5.93312 14.9548 5.94722 14.964C6.02432 15.0138 6.13583 15.1066 6.27069 15.2362C6.40646 15.3655 6.56776 15.5324 6.75486 15.7321C6.82855 15.8101 6.95237 15.8147 7.0307 15.7406C7.10903 15.6669 7.11367 15.5434 7.03959 15.4648C6.76991 15.1769 6.54997 14.9538 6.36779 14.796Z"
          fill="white"
        />
        <path
          d="M8.0771 13.3013C8.0089 13.3898 7.93581 13.4362 7.84946 13.4685C7.76344 13.5001 7.66328 13.513 7.55946 13.5185C7.48697 13.5219 7.41293 13.5219 7.33952 13.5259C7.29435 13.5281 7.24949 13.5317 7.2028 13.54C7.16838 13.5468 7.13182 13.5564 7.09434 13.5726C7.06608 13.5846 7.03686 13.6012 7.00955 13.6239C6.96778 13.6571 6.93185 13.7057 6.91248 13.7588C6.89254 13.8119 6.88699 13.8663 6.88977 13.9179C6.89434 14.0012 6.91895 14.0758 6.95087 14.1462C7.00926 14.2691 7.09434 14.3815 7.19113 14.4909C7.33551 14.6543 7.5063 14.8079 7.65255 14.9308C7.72568 14.9929 7.79174 15.0463 7.84454 15.089C7.87126 15.1102 7.89432 15.1287 7.91215 15.144C7.93029 15.1584 7.94379 15.1701 7.94931 15.175C8.02918 15.2466 8.15237 15.2404 8.2249 15.1606C8.29711 15.0801 8.29064 14.9572 8.21076 14.8847C8.18802 14.8645 8.16133 14.8429 8.12505 14.814C8.06332 14.7637 7.97821 14.6955 7.88451 14.6156C7.7441 14.4967 7.58526 14.3517 7.46577 14.2132C7.40649 14.1437 7.35671 14.0768 7.32444 14.0196C7.30201 13.9797 7.28974 13.9462 7.28359 13.9229C7.30292 13.9195 7.32813 13.9173 7.35946 13.9158C7.41845 13.9127 7.49463 13.9124 7.57946 13.9078C7.70015 13.9017 7.84029 13.8876 7.98372 13.835C8.1272 13.7834 8.2731 13.6888 8.38739 13.5379C8.4525 13.4522 8.43626 13.3296 8.35055 13.2648C8.26483 13.1993 8.14221 13.2157 8.0771 13.3013Z"
          fill="white"
        />
        <path
          d="M7.21971 0.679727L7.22006 0.68043L7.21936 0.678711L7.21971 0.679727Z"
          fill="white"
        />
        <path
          d="M13.7307 3.74254C13.578 3.35884 13.3381 3.00739 13.0339 2.73306C12.8816 2.59634 12.7114 2.47835 12.5224 2.39236C12.335 2.30633 12.1255 2.25167 11.904 2.25107H11.8973C11.6632 2.25107 11.4229 2.31586 11.2066 2.4483C10.8908 2.64123 10.5879 2.84584 10.297 3.06026C10.3317 2.98837 10.3735 2.90789 10.4227 2.82004C10.5099 2.66089 10.615 2.47593 10.7059 2.26L10.7084 2.25567L10.7102 2.2511C10.7505 2.154 10.7705 2.05142 10.7711 1.94633C10.7708 1.79488 10.729 1.66094 10.6734 1.54942C10.5772 1.35894 10.4393 1.21396 10.2928 1.08986C10.071 0.904303 9.80862 0.754397 9.54073 0.642248C9.4065 0.58635 9.27009 0.539944 9.134 0.506756L9.13 0.505526L9.13369 0.506158C9.13182 0.505842 9.13028 0.505842 9.12848 0.505244C8.99454 0.472654 8.85877 0.45149 8.71712 0.451174C8.60898 0.45149 8.48885 0.464076 8.36324 0.510483C8.29996 0.534424 8.23358 0.568244 8.17062 0.616162C8.1067 0.664713 8.04771 0.726448 8.00102 0.800487C7.96661 0.855787 7.93957 0.907994 7.91285 0.960869C7.86648 1.05333 7.81821 1.15504 7.76572 1.25643L7.76386 1.26012L7.76541 1.25674C7.69014 1.40422 7.59736 1.55445 7.52392 1.63615C7.40351 1.76887 7.28338 0.791944 7.2201 0.680428C7.15221 0.559385 7.0594 0.458311 6.95284 0.369858C6.77126 0.219916 6.56486 0.138811 6.36299 0.0887482C5.65086 -0.085451 4.61372 -0.0485721 4.16305 0.626358C4.16291 0.626358 4.16291 0.626674 4.16291 0.626674L4.16245 0.627307L4.16273 0.62699C4.0715 0.771061 4.01684 0.918823 3.97996 1.05646C3.94368 1.19378 3.92402 1.32558 3.92374 1.45432C3.92374 1.54464 3.93018 1.62821 3.93478 1.71912C3.94586 1.91698 3.95813 2.11083 3.91727 2.30159C3.70651 2.01928 3.57042 1.68839 3.37534 1.39593C3.32127 1.31359 3.25461 1.25249 3.18796 1.20577C3.09022 1.13851 2.98736 1.09889 2.88751 1.074C2.78739 1.04883 2.68385 1.03804 2.57754 1.03772C2.39381 1.03804 2.19659 1.07154 1.99384 1.14221C1.79109 1.21319 1.58125 1.32221 1.37759 1.47492C1.14257 1.65155 0.966223 1.83436 0.843352 2.03004C0.720762 2.22607 0.65502 2.43771 0.65502 2.64876C0.655336 2.80977 0.694958 2.95841 0.759188 3.08378C1.05991 3.66808 1.40986 4.31446 1.40895 4.99094V4.99368C1.40863 5.19674 1.37024 5.35923 1.29342 5.49107L1.21724 5.62136L1.25261 5.64192C0.775782 6.40995 0.375528 7.40624 0.170286 8.74046C0.126375 9.02308 0.105774 9.31277 0.105774 9.60646C0.10609 10.5475 0.318364 11.5315 0.694712 12.4841C1.26059 13.9117 2.19606 15.2736 3.392 16.2956C3.99079 16.8059 4.65527 17.2314 5.37415 17.53C6.08473 17.8256 6.84874 17.9958 7.6463 18.0003H7.66964C8.11479 18.0003 8.56915 17.9475 9.02811 17.8363L9.03304 17.8351C9.03304 17.8351 9.03979 17.8332 9.0413 17.8329C9.62222 17.6738 10.1608 17.3395 10.6455 16.8919C11.3721 16.2182 11.9865 15.2818 12.428 14.1992C12.8688 13.1157 13.1346 11.8835 13.1349 10.6141C13.1349 9.29185 12.8396 7.92909 12.142 6.68209C12.1905 6.64152 12.2384 6.60067 12.2879 6.56137C12.6476 6.27323 13.0249 6.01335 13.3622 5.7359C13.548 5.5823 13.6863 5.39091 13.773 5.18539C13.8596 4.97986 13.8946 4.76481 13.8946 4.55591C13.8941 4.27371 13.8315 3.99935 13.7307 3.74254ZM1.56796 2.48264C1.61985 2.39999 1.71818 2.28724 1.8902 2.15854C2.02538 2.05687 2.15686 1.99021 2.27513 1.94901C2.39374 1.90784 2.49907 1.89216 2.57743 1.89248C2.6275 1.89216 2.66529 1.89859 2.68677 1.90478C2.75715 2.01506 2.83485 2.1527 2.91595 2.30138C3.05236 2.54962 3.19583 2.82148 3.35868 3.05161C3.42902 3.15022 3.50303 3.24114 3.59088 3.32256C3.39584 3.52872 3.14609 3.74711 2.86863 3.99995C2.66775 4.18276 2.45302 4.38611 2.23579 4.61652C2.18632 4.26141 2.07695 3.92103 1.95749 3.61935C1.87698 3.41597 1.79099 3.23038 1.71294 3.0719C1.63521 2.91401 1.5655 2.78249 1.51972 2.6934C1.5142 2.68237 1.50956 2.66915 1.50956 2.64577C1.50988 2.61659 1.51663 2.56621 1.56796 2.48264ZM12.9851 4.85337C12.9485 4.93817 12.8975 5.01006 12.818 5.0764C12.4241 5.40233 11.8813 5.75752 11.3636 6.2232C11.1047 6.45635 10.8518 6.71873 10.6282 7.02286C10.4045 7.32668 10.2107 7.67325 10.0724 8.06953C10.0082 8.25354 10.1047 8.45383 10.2884 8.51802C10.4715 8.58253 10.6724 8.48578 10.7369 8.30206C10.8503 7.97795 11.0079 7.69533 11.1953 7.43971C11.2684 7.34018 11.3464 7.24494 11.4278 7.1534C12.0241 8.24394 12.2798 9.43782 12.28 10.6163C12.2813 12.1449 11.8472 13.6435 11.1873 14.8072C10.8577 15.3891 10.4727 15.8871 10.0648 16.264C9.65864 16.6403 9.23195 16.8938 8.82059 17.0068C8.43014 17.1011 8.04613 17.1451 7.66947 17.1451C6.75983 17.1451 5.89007 16.8883 5.08857 16.4434C3.88799 15.7768 2.84779 14.6837 2.11541 13.4444C0.822961 11.2626 0.580911 8.60588 1.83033 6.3448C2.35686 5.39369 3.00539 4.82475 3.57956 4.30557C3.86651 4.04565 4.13595 3.79928 4.35465 3.51205C4.46399 3.36795 4.55986 3.21372 4.63295 3.04356C4.70671 2.87337 4.75709 2.68841 4.77611 2.49027C4.79393 2.31639 4.79945 2.16093 4.79945 2.02329C4.79945 1.45742 4.6603 1.0212 5.34813 0.907221C5.47315 0.886022 5.6111 0.87435 5.74568 0.87435C5.89559 0.874033 6.0412 0.889397 6.15884 0.91826C6.2771 0.946842 6.36439 0.990752 6.40553 1.0264C6.43903 1.05403 6.45742 1.07432 6.46663 1.08662C6.47957 1.10505 6.47584 1.10076 6.47893 1.11028C6.48139 1.11918 6.48449 1.14808 6.48414 1.20457C6.48414 1.22148 6.48414 1.2399 6.48414 1.2611C6.48414 1.32867 6.48938 1.40795 6.50165 1.49887C6.57139 2.01007 6.86632 2.56551 7.45983 2.56308C7.57535 2.56368 7.68592 2.53664 7.78116 2.49424C7.94948 2.41929 8.07454 2.305 8.17839 2.18519C8.3335 2.00455 8.44565 1.80149 8.53719 1.62515C8.58205 1.53697 8.62164 1.45527 8.65395 1.38953C8.66963 1.35757 8.68404 1.32931 8.69631 1.30628L8.71782 1.306C8.79338 1.30477 8.92887 1.32903 9.07325 1.37849C9.29136 1.45162 9.535 1.57941 9.70241 1.71089C9.78598 1.776 9.85017 1.8421 9.88368 1.8903C9.89964 1.91272 9.90857 1.93023 9.9125 1.94067C9.82497 2.14648 9.69963 2.35327 9.58165 2.57876C9.35675 3.00883 9.25199 3.47454 9.47351 3.92553C8.87786 4.46226 8.35311 5.04655 7.90983 5.6671C7.06102 6.85664 6.50864 8.17978 6.324 9.54961C6.29851 9.74223 6.43337 9.91949 6.62631 9.94502C6.81861 9.97114 6.99587 9.83628 7.02199 9.64366C7.18941 8.39881 7.69327 7.18226 8.48309 6.07632C9.27231 4.97005 10.3482 3.97499 11.6522 3.17782C11.7392 3.1253 11.816 3.10624 11.9011 3.10561C12.0077 3.10561 12.1324 3.14154 12.2652 3.22142C12.4636 3.3394 12.6676 3.5535 12.8111 3.80178C12.957 4.04938 13.0412 4.32768 13.0397 4.55563C13.0398 4.66876 13.0207 4.76829 12.9851 4.85337Z"
          fill="white"
        />
        <path
          d="M13.0397 2.73749L13.0345 2.73303C13.0345 2.73303 13.0349 2.7337 13.0352 2.7337L13.0397 2.73749Z"
          fill="white"
        />
      </svg>
    ),
    background: "bg-[#fc0]",
  },
  {
    department: "Orthopedic",
    visitors: 15,
    fill: "rgba(0, 168, 181, 0.5)",
    icon: (
      <svg
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5724 2.06226L12.4473 0.473898C12.0893 -0.031698 11.3866 -0.151662 10.8809 0.206457L9.92895 0.880739C8.69221 1.75667 7.2357 2.20389 5.71504 2.175C5.21293 2.16673 4.72873 2.3142 4.31717 2.60574L4.3171 2.60581C3.80625 2.96767 3.46685 3.50688 3.36146 4.12391C3.33231 4.29443 3.32272 4.46522 3.33073 4.63397C1.55622 5.024 0.221313 6.64703 0.221313 8.58497C0.221313 9.33214 0.420466 10.0321 0.765978 10.6332C0.426178 11.0399 0.221313 11.5631 0.221313 12.1333C0.221313 12.6375 0.379099 13.118 0.677729 13.5231C1.56732 14.7291 2.05722 16.216 2.05722 17.7098V18.8765C2.05722 19.4961 2.5613 20.0001 3.18089 20.0001H5.12737C5.74702 20.0001 6.25104 19.4961 6.25104 18.8765V17.7097C6.25104 16.1944 6.72807 14.7466 7.63053 13.5229C7.92916 13.1179 8.08694 12.6374 8.08694 12.1332C8.08694 11.563 7.88201 11.0399 7.54228 10.6331C7.75837 10.2572 7.91754 9.84299 8.00598 9.40226C8.31039 9.33621 8.60153 9.20988 8.86339 9.02438C9.27496 8.73291 9.57589 8.32633 9.73361 7.84871C10.2038 6.42562 11.134 5.16642 12.3529 4.3031L13.305 3.62882C13.8106 3.2705 13.9305 2.56779 13.5724 2.06226ZM3.58543 5.58659C3.63619 5.68515 3.69397 5.78095 3.75917 5.87301C4.10206 6.35707 4.61698 6.68794 5.18574 6.80987C5.11213 7.38671 5.25324 7.98246 5.59606 8.46645C5.93442 8.94414 6.42787 9.27186 6.99505 9.39852C6.93694 9.61619 6.85651 9.82434 6.75585 10.0197C6.44914 9.87221 6.10566 9.78941 5.74315 9.78941C5.15002 9.78941 4.58231 10.0185 4.15413 10.4121C3.72595 10.0185 3.15817 9.78941 2.56505 9.78941C2.20253 9.78941 1.85905 9.87221 1.55241 10.0197C1.33179 9.59163 1.20624 9.10324 1.20624 8.58484C1.20624 7.10154 2.23122 5.86217 3.58543 5.58659ZM6.83779 12.9384C5.80959 14.3325 5.26605 15.9824 5.26605 17.7097V18.8764C5.26605 18.9529 5.2038 19.0152 5.1273 19.0152H3.18089C3.10439 19.0152 3.04215 18.9529 3.04215 18.8764V17.7097C3.04215 16.007 2.48395 14.3125 1.4704 12.9384C1.29758 12.704 1.20624 12.4255 1.20624 12.1332C1.20624 11.3839 1.81578 10.7744 2.56505 10.7744C3.0472 10.7744 3.48333 11.0219 3.73173 11.4364C3.82063 11.5849 3.98111 11.6758 4.15419 11.6758C4.32728 11.6758 4.48769 11.5849 4.57666 11.4364C4.825 11.0219 5.26112 10.7744 5.74328 10.7744C6.49254 10.7744 7.10208 11.3839 7.10208 12.1332C7.10202 12.4255 7.01061 12.7039 6.83779 12.9384ZM12.7356 2.82505L11.7836 3.49933C10.3942 4.48341 9.33399 5.91831 8.79832 7.53977C8.70705 7.81614 8.53266 8.0516 8.29404 8.22061C7.99784 8.43047 7.63775 8.51228 7.27989 8.45122C6.9221 8.39015 6.60955 8.19337 6.39976 7.89716C6.12116 7.50372 6.07099 7.00475 6.26568 6.56252C6.33548 6.40415 6.31683 6.22075 6.21683 6.07951C6.12411 5.94858 5.97395 5.87169 5.81504 5.87169C5.80257 5.87169 5.78996 5.87215 5.77735 5.87307C5.29599 5.91017 4.84161 5.6971 4.56294 5.30372C4.12983 4.69228 4.27495 3.84248 4.88639 3.40938C5.12507 3.24036 5.40249 3.1531 5.69613 3.15966C7.4275 3.19348 9.08861 2.68263 10.4982 1.68431L11.4501 1.01009C11.5127 0.965836 11.5995 0.980742 11.6436 1.04305L12.7687 2.63141C12.8129 2.69399 12.798 2.78079 12.7356 2.82505Z"
          fill="white"
        />
        <path
          d="M5.98813 3.50555C5.35068 3.50555 4.83215 4.02415 4.83215 4.6616C4.83215 4.93363 5.05258 5.15406 5.32462 5.15406C5.59665 5.15406 5.81708 4.93363 5.81708 4.6616C5.81708 4.56717 5.89384 4.49048 5.98813 4.49048C6.26017 4.49048 6.48059 4.27005 6.48059 3.99802C6.48059 3.72598 6.2601 3.50555 5.98813 3.50555Z"
          fill="white"
        />
      </svg>
    ),
    background: "bg-[#76cad1]",
  },
  {
    department: "ENT",
    visitors: 15,
    fill: "#9747ff",
    icon: (
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.7915 12.7637L5.60358 18H6.58825C6.89494 18 7.16106 17.7883 7.23006 17.4894L7.59699 15.8994H10.5638C11.915 15.8994 13.0758 14.8442 13.3207 13.389C13.3987 12.925 13.4801 12.4264 13.559 11.921H7.84673C7.33801 11.921 6.90408 12.2675 6.7915 12.7637ZM12.4084 13.2354C12.2388 14.2429 11.463 14.9742 10.5637 14.9742H7.59694C7.46385 14.9742 7.33623 15.0026 7.22053 15.0542L7.69369 12.9684C7.71052 12.8942 7.7706 12.8462 7.84673 12.8462H12.4732C12.4519 12.975 12.4303 13.1048 12.4084 13.2354Z"
          fill="white"
        />
        <path
          d="M15.2093 9.51053L14.021 7.11205C13.8029 3.13046 11.5247 0 7.89943 0C1.84695 0 0.683716 3.23334 0.683716 6.53991C0.683716 8.17297 1.37992 9.68213 2.5071 10.7816L1.00546 17.2888C0.965663 17.4612 1.00668 17.6424 1.11681 17.7809C1.22693 17.9194 1.39424 18 1.57119 18H4.33867L5.58851 12.4907C5.82938 11.429 6.75799 10.6875 7.84671 10.6875H13.7434C13.7435 10.6868 13.7436 10.686 13.7438 10.6853H14.6157C14.8705 10.6853 15.1053 10.5338 15.2287 10.2896C15.3521 10.0453 15.3447 9.74706 15.2093 9.51053ZM13.7438 9.76015C13.7224 9.76015 13.7011 9.76088 13.6801 9.76233H7.84671C6.323 9.76233 5.02339 10.8001 4.68627 12.2861L3.59989 17.0749H2.00428L3.40856 10.9897C3.48118 10.6748 3.38437 10.3449 3.15308 10.1193C2.15727 9.14805 1.60886 7.87686 1.60886 6.53997C1.60886 4.78592 1.97374 3.50765 2.72428 2.63222C3.17755 2.10349 3.77126 1.70852 4.5393 1.42473C5.43636 1.09324 6.56688 0.925205 7.89949 0.925205C9.34462 0.925205 10.5975 1.52148 11.5226 2.64966C12.4399 3.7682 12.9992 5.37099 13.0973 7.16277C13.1042 7.288 13.1364 7.4105 13.1921 7.52285L14.3006 9.76021H13.7438V9.76015Z"
          fill="white"
        />
        <path
          d="M3.98596 2.30151C3.90225 2.30151 3.8177 2.32659 3.74419 2.37881C3.68227 2.42284 2.22711 3.47952 2.29405 5.43576C2.30185 5.66164 2.48733 5.83943 2.71154 5.83943C2.71638 5.83943 2.72123 5.83937 2.72614 5.83921C2.95687 5.83124 3.13749 5.63785 3.12958 5.40712C3.07842 3.91378 4.17806 3.09681 4.22951 3.05952C4.41671 2.9256 4.4604 2.66533 4.32704 2.47751C4.2455 2.36276 4.11676 2.30151 3.98596 2.30151Z"
          fill="white"
        />
        <path
          d="M5.05184 2.56632C5.28269 2.56632 5.46983 2.37918 5.46983 2.14834C5.46983 1.91749 5.28269 1.73035 5.05184 1.73035C4.82099 1.73035 4.63385 1.91749 4.63385 2.14834C4.63385 2.37918 4.82099 2.56632 5.05184 2.56632Z"
          fill="white"
        />
      </svg>
    ),
    background: "bg-[#9747ff]",
  },
  {
    department: "Dentist",
    visitors: 25,
    fill: "#f7912c",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0978 6.11631C13.3424 5.52678 12.5785 5.32335 11.9027 5.32764C11.3858 5.32831 10.9236 5.43335 10.5146 5.52612C10.1052 5.62128 9.74771 5.70116 9.45127 5.69987C9.15537 5.7012 8.79802 5.62128 8.38849 5.52612C7.97943 5.43331 7.51724 5.32831 7.00052 5.32764C6.32463 5.32335 5.56068 5.52647 4.80525 6.11663C4.24431 6.54893 3.83709 7.11569 3.58064 7.76303C3.32318 8.411 3.21021 9.13756 3.2099 9.91901C3.21052 11.1159 3.47412 12.4472 3.93201 13.8608C4.40482 15.3192 4.81002 16.3916 5.10974 17.1714C5.2592 17.5607 5.3822 17.8771 5.4724 18.1271C5.56271 18.3755 5.61888 18.5611 5.63756 18.6645C5.71123 19.0641 5.89584 19.4039 6.1592 19.6397C6.42162 19.8755 6.75799 20.0007 7.09435 20.0001C7.44181 20.0004 7.7876 19.8686 8.06369 19.6258C8.34095 19.3831 8.54658 19.0327 8.64564 18.6086C8.67455 18.4841 8.69291 18.3533 8.71123 18.206C8.74256 17.9498 8.77033 17.6465 8.80998 17.3348C8.86795 16.8688 8.96076 16.3813 9.09896 16.0672C9.16584 15.9096 9.24228 15.8023 9.29943 15.7528C9.35974 15.7033 9.38068 15.6953 9.45134 15.6914C9.50685 15.693 9.52896 15.7013 9.56631 15.7237C9.62892 15.7601 9.73623 15.8899 9.82373 16.1131C9.95849 16.4437 10.0457 16.9371 10.1015 17.4015C10.1303 17.634 10.1527 17.8605 10.1752 18.064C10.1988 18.269 10.2201 18.4461 10.2576 18.6086C10.3568 19.0326 10.5618 19.3831 10.8392 19.6258C11.1153 19.8692 11.4616 20.0003 11.8089 20C12.1453 20.0006 12.4816 19.8755 12.744 19.6394C13.0076 19.4039 13.1917 19.064 13.2657 18.6644C13.2845 18.561 13.3406 18.3755 13.4308 18.1271C13.7025 17.3734 14.2628 16.0461 14.9712 13.8607C15.4293 12.4475 15.6927 11.1158 15.693 9.91897C15.693 9.13788 15.58 8.41096 15.3226 7.76299C15.0657 7.11569 14.6585 6.54866 14.0978 6.11631ZM14.0234 13.5536C13.5576 14.9899 13.1609 16.0399 12.8633 16.8144C12.7144 17.2021 12.5905 17.5205 12.4936 17.7886C12.3969 18.0581 12.3259 18.2744 12.2866 18.4809C12.245 18.6975 12.162 18.8224 12.0789 18.8973C11.9947 18.9723 11.9048 19.0027 11.8087 19.004C11.7095 19.0033 11.6016 18.9687 11.4961 18.8772C11.3917 18.7851 11.2871 18.6315 11.2274 18.3805C11.2141 18.3244 11.1967 18.2167 11.1807 18.0849C11.1523 17.8524 11.1237 17.5416 11.0815 17.2087C11.0156 16.7067 10.9254 16.1551 10.7193 15.6723C10.6141 15.4312 10.4779 15.2 10.269 15.0111C10.0636 14.8219 9.76564 14.6914 9.45123 14.6954C9.21326 14.694 8.98045 14.7661 8.79533 14.8873C8.46888 15.1033 8.28705 15.4187 8.15494 15.7417C7.96041 16.2305 7.87506 16.7837 7.81299 17.2798C7.78228 17.5271 7.75947 17.759 7.73771 17.9532C7.71638 18.1461 7.69396 18.3059 7.6756 18.3806C7.61615 18.6316 7.51127 18.7848 7.40689 18.8766C7.30092 18.9688 7.19357 19.0034 7.09431 19.0034C6.99791 19.0028 6.90838 18.9717 6.82416 18.8974C6.74111 18.8224 6.65802 18.6976 6.61642 18.4813C6.57713 18.2745 6.50611 18.0582 6.40951 17.7887C6.12017 16.9882 5.57904 15.7104 4.8797 13.5537C4.44322 12.2092 4.20564 10.968 4.20642 9.91913C4.20595 9.23381 4.30666 8.63241 4.5065 8.13135C4.70713 7.62971 5.00092 7.22542 5.41439 6.9051C6.01912 6.44272 6.50611 6.32846 7.00052 6.32417C7.37803 6.32381 7.76279 6.4044 8.16619 6.49756C8.56963 6.5887 8.99072 6.6944 9.45127 6.69604C9.91205 6.6944 10.3331 6.5887 10.7365 6.49756C11.1403 6.40444 11.525 6.32381 11.9027 6.32417C12.3966 6.32846 12.8834 6.44307 13.4886 6.9051C13.9021 7.22542 14.1959 7.62936 14.3965 8.13135C14.5963 8.63237 14.6967 9.23378 14.6967 9.91913C14.6975 10.9683 14.4598 12.2098 14.0234 13.5536Z"
          fill="white"
        />
        <path
          d="M17.0143 2.3295L15.3114 1.87833C15.2668 1.8684 15.2305 1.83274 15.2209 1.78782L14.7718 0.0850049C14.7598 0.0354736 14.7159 0.00012207 14.6648 0.00012207C14.6136 0.00012207 14.5696 0.0354736 14.5577 0.0850049L14.1089 1.78782C14.0987 1.83274 14.0627 1.8684 14.0181 1.87833L12.3152 2.3295C12.2654 2.33942 12.23 2.38364 12.23 2.43485C12.23 2.48606 12.2654 2.53028 12.3152 2.53985L14.0181 2.99133C14.0627 3.00059 14.0986 3.03692 14.1089 3.08184L14.5577 4.78438C14.5696 4.83422 14.6136 4.86958 14.6648 4.86958C14.7159 4.86958 14.7598 4.83422 14.7718 4.78438L15.2209 3.08184C15.2305 3.03692 15.2668 3.00059 15.3114 2.99133L17.0143 2.53985C17.0641 2.53028 17.0995 2.48602 17.0995 2.43485C17.0995 2.38364 17.0641 2.33942 17.0143 2.3295Z"
          fill="white"
        />
        <path
          d="M9.49692 9.99039L7.94188 9.57824C7.9011 9.56933 7.86805 9.5366 7.8593 9.49566L7.44911 7.94078C7.43821 7.89554 7.39809 7.86316 7.35137 7.86316C7.30461 7.86316 7.2645 7.89554 7.2536 7.94078L6.84375 9.49566C6.83454 9.5366 6.80165 9.56933 6.76086 9.57824L5.20579 9.99039C5.16024 9.99933 5.12805 10.0399 5.12805 10.0865C5.12805 10.1334 5.16024 10.1737 5.20579 10.1826L6.76086 10.5948C6.80165 10.6034 6.83454 10.6364 6.84375 10.6773L7.2536 12.2322C7.2645 12.2778 7.30461 12.3098 7.35137 12.3098C7.39809 12.3098 7.43821 12.2778 7.44911 12.2322L7.8593 10.6773C7.86805 10.6364 7.9011 10.6034 7.94188 10.5948L9.49692 10.1826C9.5425 10.1737 9.57469 10.1334 9.57469 10.0865C9.57469 10.0399 9.5425 9.99933 9.49692 9.99039Z"
          fill="white"
        />
        <path
          d="M3.28639 5.10638L4.60499 4.75696C4.64362 4.74935 4.67085 4.71536 4.67085 4.6754C4.67085 4.6361 4.64358 4.60142 4.60499 4.59384L3.28639 4.24442C3.2519 4.23681 3.22382 4.20907 3.21639 4.17442L2.86862 2.85599C2.8594 2.81767 2.82538 2.79028 2.78573 2.79028C2.74612 2.79028 2.71206 2.81767 2.70284 2.85599L2.35538 4.17442C2.34745 4.20911 2.31956 4.23685 2.28503 4.24442L0.966433 4.59384C0.927761 4.60142 0.900574 4.6361 0.900574 4.6754C0.900574 4.7154 0.9278 4.74938 0.966433 4.75696L2.28503 5.10638C2.31956 5.11364 2.34745 5.14173 2.35538 5.17638L2.70284 6.49481C2.71206 6.53345 2.74612 6.56052 2.78573 6.56052C2.82538 6.56052 2.8594 6.53341 2.86862 6.49481L3.21639 5.17638C3.22382 5.14173 3.2519 5.11364 3.28639 5.10638Z"
          fill="white"
        />
      </svg>
    ),
    background: "bg-[#f7912c]",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function DonutPieChart() {
  const [hoveredDepartment, setHoveredDepartment] = useState(null);

  const totalVisitors = chartData.reduce(
    (sum, entry) => sum + entry.visitors,
    0
  );

  const customFormatter = (value, name) => {
    const percentage = ((value / totalVisitors) * 100).toFixed(2);
    const icon = chartData.find((entry) => entry.department === name)?.icon;
    const background = chartData.find(
      (entry) => entry.department === name
    )?.background;
    return [
      <div
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
        className=""
      >
        {icon && (
          <div
            className={`icon-wrapper flex items-center justify-center rounded-full w-8 h-8 ${background}`}
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <p className="font-primary font-medium text-sm">{`${name}`} </p>
          <p className="font-primary text-[#999a9d] text-xs">{`${percentage}%`}</p>
        </div>
      </div>,
    ];
  };

  return (
    <Card
      className={`flex flex-col ${hoveredDepartment ? "translate-up" : ""}`}
    >
      <CardHeader className="items-center pb-0"></CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel formatter={customFormatter} />
              }
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="department"
              innerRadius={60}
              strokeWidth={5}
              fill={(entry) => entry.fill}
              onMouseEnter={(data) => setHoveredDepartment(data.department)}
              onMouseLeave={() => setHoveredDepartment(null)}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <g>
                        <image
                          href="/standing-human-body-silhouette.svg"
                          x={viewBox.cx - 48}
                          y={viewBox.cy - 48}
                          width="96"
                          height="96"
                        />
                      </g>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-4 text-sm relative">
        <div
          className={`absolute inset-0 z-10 animate-in fade-in-0 duration-100 ${
            hoveredDepartment ? "bg-overlay" : ""
          }`}
        ></div>
        <div
          className={`flex justify-between items-center border-b pb-9 ${
            hoveredDepartment === "General Physician" ? " z-20" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-primary w-8 h-8">
              <img src="/doctor-stethoscope-sm.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-primary text-sm text-basic">
                General Physician
              </p>
              <p className="text-xs font-primary text-[#999a9d]">35%</p>
            </div>
          </div>
          <div>
            <img src="/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div
          className={`flex justify-between items-center border-b pb-9 ${
            hoveredDepartment === "ENT" ? " z-20" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#9747ff] w-8 h-8">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7915 12.7637L5.60358 18H6.58825C6.89494 18 7.16106 17.7883 7.23006 17.4894L7.59699 15.8994H10.5638C11.915 15.8994 13.0758 14.8442 13.3207 13.389C13.3987 12.925 13.4801 12.4264 13.559 11.921H7.84673C7.33801 11.921 6.90408 12.2675 6.7915 12.7637ZM12.4084 13.2354C12.2388 14.2429 11.463 14.9742 10.5637 14.9742H7.59694C7.46385 14.9742 7.33623 15.0026 7.22053 15.0542L7.69369 12.9684C7.71052 12.8942 7.7706 12.8462 7.84673 12.8462H12.4732C12.4519 12.975 12.4303 13.1048 12.4084 13.2354Z"
                  fill="white"
                />
                <path
                  d="M15.2093 9.51053L14.021 7.11205C13.8029 3.13046 11.5247 0 7.89943 0C1.84695 0 0.683716 3.23334 0.683716 6.53991C0.683716 8.17297 1.37992 9.68213 2.5071 10.7816L1.00546 17.2888C0.965663 17.4612 1.00668 17.6424 1.11681 17.7809C1.22693 17.9194 1.39424 18 1.57119 18H4.33867L5.58851 12.4907C5.82938 11.429 6.75799 10.6875 7.84671 10.6875H13.7434C13.7435 10.6868 13.7436 10.686 13.7438 10.6853H14.6157C14.8705 10.6853 15.1053 10.5338 15.2287 10.2896C15.3521 10.0453 15.3447 9.74706 15.2093 9.51053ZM13.7438 9.76015C13.7224 9.76015 13.7011 9.76088 13.6801 9.76233H7.84671C6.323 9.76233 5.02339 10.8001 4.68627 12.2861L3.59989 17.0749H2.00428L3.40856 10.9897C3.48118 10.6748 3.38437 10.3449 3.15308 10.1193C2.15727 9.14805 1.60886 7.87686 1.60886 6.53997C1.60886 4.78592 1.97374 3.50765 2.72428 2.63222C3.17755 2.10349 3.77126 1.70852 4.5393 1.42473C5.43636 1.09324 6.56688 0.925205 7.89949 0.925205C9.34462 0.925205 10.5975 1.52148 11.5226 2.64966C12.4399 3.7682 12.9992 5.37099 13.0973 7.16277C13.1042 7.288 13.1364 7.4105 13.1921 7.52285L14.3006 9.76021H13.7438V9.76015Z"
                  fill="white"
                />
                <path
                  d="M3.98596 2.30151C3.90225 2.30151 3.8177 2.32659 3.74419 2.37881C3.68227 2.42284 2.22711 3.47952 2.29405 5.43576C2.30185 5.66164 2.48733 5.83943 2.71154 5.83943C2.71638 5.83943 2.72123 5.83937 2.72614 5.83921C2.95687 5.83124 3.13749 5.63785 3.12958 5.40712C3.07842 3.91378 4.17806 3.09681 4.22951 3.05952C4.41671 2.9256 4.4604 2.66533 4.32704 2.47751C4.2455 2.36276 4.11676 2.30151 3.98596 2.30151Z"
                  fill="white"
                />
                <path
                  d="M5.05184 2.56632C5.28269 2.56632 5.46983 2.37918 5.46983 2.14834C5.46983 1.91749 5.28269 1.73035 5.05184 1.73035C4.82099 1.73035 4.63385 1.91749 4.63385 2.14834C4.63385 2.37918 4.82099 2.56632 5.05184 2.56632Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="font-primary text-sm text-basic">ENT</p>
              <p className="text-xs font-primary text-[#999a9d]">15%</p>
            </div>
          </div>
          <div>
            <img src="/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div
          className={`flex justify-between items-center border-b pb-9 ${
            hoveredDepartment === "Orthopedic" ? " z-20" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#76cad1] w-8 h-8">
              <img src="/Orthopedic.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-primary text-sm text-basic">Orthopedic</p>
              <p className="text-xs font-primary text-[#999a9d]">10%</p>
            </div>
          </div>
          <div>
            <img src="/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div
          className={`flex justify-between items-center border-b pb-9 ${
            hoveredDepartment === "Dentist" ? " z-20" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#F7912C] w-8 h-8">
              <img src="/Dentist.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-primary text-sm text-basic">Dentist</p>
              <p className="text-xs font-primary text-[#999a9d]">25%</p>
            </div>
          </div>
          <div>
            <img src="/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>

        <div
          className={`flex justify-between items-center pb-9 ${
            hoveredDepartment === "Cardiology" ? " z-20" : ""
          }`}
        >
          <div className="flex gap-2 items-center">
            <div className="icon-wrapper flex items-center justify-center rounded-full bg-[#FFCC00] w-8 h-8">
              <img src="/Cardiology.svg" alt="doctor-stethoscope" />
            </div>
            <div className="flex flex-col">
              <p className="font-primary text-sm text-basic">Cardiology</p>
              <p className="text-xs font-primary text-[#999a9d]">5%</p>
            </div>
          </div>
          <div>
            <img src="/chevron-left.svg" alt="chevron-left" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
