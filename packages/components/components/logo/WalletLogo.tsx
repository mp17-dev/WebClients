import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';

import { generateUID } from '@proton/components';
import { WALLET_APP_NAME } from '@proton/shared/lib/constants';
import clsx from '@proton/utils/clsx';

import type { LogoProps } from './Logo';

type Props = ComponentPropsWithoutRef<'svg'> & Pick<LogoProps, 'variant' | 'size' | 'hasTitle'>;

const WalletLogo = ({ variant = 'with-wordmark', size, className, hasTitle = true, ...rest }: Props) => {
    // This logo can be several times in the view, ids has to be different each time
    const [uid] = useState(generateUID('logo'));

    let logoWidth: number;

    switch (variant) {
        case 'glyph-only':
            logoWidth = 36;
            break;
        case 'wordmark-only':
            logoWidth = 292;
            break;
        default:
            logoWidth = 154;
            break;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox={`0 0 ${logoWidth} 36`}
            width={logoWidth}
            height="36"
            fill="none"
            role="img"
            className={clsx('logo', size && variant === 'glyph-only' && `icon-size-${size}`, variant, className)}
            aria-labelledby={`${uid}-title`}
            {...rest}
        >
            {hasTitle && <title id={`${uid}-title`}>{WALLET_APP_NAME}</title>}
            {variant === 'glyph-only' && (
                <>
                    <path
                        d="M4.00397 27.1283C4.00397 28.76 5.32671 30.0827 6.95838 30.0827L29.0455 30.0827C30.6772 30.0827 31.9999 28.76 31.9999 27.1283V17.6742C31.9999 11.1475 26.709 5.85652 20.1823 5.85652H6.95838C5.3267 5.85652 4.00397 7.17926 4.00397 8.81094V18.1193L9.84007 18.1193C11.9446 18.1193 13.6511 19.9425 13.6511 22.1911C13.6511 24.4396 11.9446 26.2629 9.84007 26.2629H4.00397V27.1283Z"
                        fill={`url(#${uid}-a)`}
                    />
                    <path
                        d="M9.54645 20.0377C10.743 20.0377 11.713 21.0077 11.713 22.2042C11.713 23.4008 10.743 24.3708 9.54645 24.3708C8.34989 24.3708 7.37988 23.4008 7.37988 22.2042C7.37988 21.0077 8.34989 20.0377 9.54645 20.0377Z"
                        fill={`url(#${uid}-b)`}
                    />
                    <path
                        d="M4.00006 27.1891C4.00006 28.8207 5.3228 30.1435 6.95448 30.1435H26.0911V18.7197C26.0911 13.8247 22.1229 9.85651 17.2279 9.85651H4.00006V18.1193L9.84007 18.1193C11.9446 18.1193 13.6511 19.9425 13.6511 22.1911C13.6511 24.4396 11.9446 26.2629 9.84007 26.2629H4.00006V27.1891Z"
                        fill="#6D4AFF"
                    />
                    <path
                        d="M4.00006 27.1891C4.00006 28.8207 5.3228 30.1435 6.95448 30.1435H26.0911V18.7197C26.0911 13.8247 22.1229 9.85651 17.2279 9.85651H4.00006V18.1193L9.84007 18.1193C11.9446 18.1193 13.6511 19.9425 13.6511 22.1911C13.6511 24.4396 11.9446 26.2629 9.84007 26.2629H4.00006V27.1891Z"
                        fill={`url(#${uid}-c)`}
                        fillOpacity="0.9"
                    />
                    <path
                        d="M9.54645 20.0377C10.743 20.0377 11.713 21.0077 11.713 22.2042C11.713 23.4008 10.743 24.3708 9.54645 24.3708C8.34989 24.3708 7.37988 23.4008 7.37988 22.2042C7.37988 21.0077 8.34989 20.0377 9.54645 20.0377Z"
                        fill="#6D4AFF"
                    />
                    <path
                        d="M9.54645 20.0377C10.743 20.0377 11.713 21.0077 11.713 22.2042C11.713 23.4008 10.743 24.3708 9.54645 24.3708C8.34989 24.3708 7.37988 23.4008 7.37988 22.2042C7.37988 21.0077 8.34989 20.0377 9.54645 20.0377Z"
                        fill={`url(#${uid}-d)`}
                        fillOpacity="0.9"
                    />
                    <path
                        d="M12.6247 24.9708C11.9292 25.7659 10.9389 26.2629 9.84007 26.2629H4.00006V27.1282C4.00006 28.7599 5.3228 30.0827 6.95447 30.0827H8.19005L12.6978 24.9617L12.6247 24.9708Z"
                        fill="#FFBB93"
                    />
                    <defs>
                        <linearGradient
                            id={`${uid}-a`}
                            x1="0.486198"
                            y1="8.67596"
                            x2="35.1235"
                            y2="22.1686"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#957AFD" />
                            <stop offset="1" stopColor="#FFC6C6" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-b`}
                            x1="0.486198"
                            y1="8.67596"
                            x2="35.1235"
                            y2="22.1686"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#957AFD" />
                            <stop offset="1" stopColor="#FFC6C6" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-c`}
                            x1="24.8427"
                            y1="12.9711"
                            x2="14.0991"
                            y2="34.8323"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.149916" stopColor="#FA528E" stopOpacity="0" />
                            <stop offset="0.720842" stopColor="#FF8065" />
                            <stop offset="1" stopColor="#FFA51F" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-d`}
                            x1="24.8427"
                            y1="12.9711"
                            x2="14.0991"
                            y2="34.8323"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.149916" stopColor="#FA528E" stopOpacity="0" />
                            <stop offset="0.720842" stopColor="#FF8065" />
                            <stop offset="1" stopColor="#FFA51F" />
                        </linearGradient>
                    </defs>
                </>
            )}

            {variant === 'with-wordmark' && (
                <>
                    <g fill="var(--logo-text-proton-color)">
                        <path d="M38 21.3376V24.9784H40.5422V21.4966C40.5422 21.1587 40.675 20.8321 40.9151 20.5935C41.1523 20.3549 41.4772 20.2186 41.8133 20.2186H44.4205C45.6351 20.2186 46.8017 19.733 47.6604 18.8668C48.5191 18.0034 49.0021 16.8305 49.0021 15.6093C49.0021 14.3881 48.5191 13.2152 47.6604 12.349C46.8017 11.4856 45.6351 11 44.4177 11H38V15.5497H40.5422V13.4055H44.2482C44.8244 13.4055 45.3752 13.6355 45.782 14.0445C46.1887 14.4534 46.4175 15.0072 46.4175 15.5866C46.4175 16.1659 46.1887 16.7197 45.782 17.1287C45.3752 17.5377 44.8244 17.7677 44.2482 17.7677H41.5563C41.0902 17.7677 40.627 17.8586 40.1976 18.0403C39.7654 18.2193 39.3756 18.4834 39.0451 18.8157C38.7146 19.1479 38.4548 19.5427 38.274 19.9744C38.0932 20.4032 38 20.869 38 21.3376Z" />
                        <path d="M49.3948 24.9784V19.4319C49.3948 17.1685 50.7082 15.3679 53.338 15.3679C53.7589 15.3622 54.1798 15.4077 54.5922 15.5071V17.7876C54.2928 17.7677 54.0357 17.7677 53.9143 17.7677C52.5217 17.7677 51.9229 18.4095 51.9229 19.7103V24.9784H49.3948Z" />
                        <path d="M55.3491 20.2755C55.3491 17.4923 57.4394 15.3708 60.3488 15.3708C63.2582 15.3708 65.3484 17.4923 65.3484 20.2755C65.3484 23.0586 63.2582 25.2 60.3488 25.2C57.4394 25.2 55.3491 23.0558 55.3491 20.2755ZM62.8571 20.2755C62.8571 18.6936 61.8007 17.5718 60.3488 17.5718C58.8941 17.5718 57.8405 18.6907 57.8405 20.2755C57.8405 21.8772 58.8969 22.9791 60.3488 22.9791C61.8035 22.9791 62.8571 21.8744 62.8571 20.2755Z" />
                        <path d="M73.4328 20.2755C73.4328 17.4923 75.523 15.3708 78.4324 15.3708C81.339 15.3708 83.4293 17.4923 83.4293 20.2755C83.4293 23.0586 81.339 25.2 78.4324 25.2C75.523 25.2 73.4328 23.0558 73.4328 20.2755ZM80.9379 20.2755C80.9379 18.6936 79.8815 17.5718 78.4296 17.5718C76.9777 17.5718 75.9213 18.6907 75.9213 20.2755C75.9213 21.8772 76.9777 22.9791 78.4296 22.9791C79.8815 22.9791 80.9379 21.8744 80.9379 20.2755Z" />
                        <path d="M84.7428 24.9785V19.6336C84.7428 17.1515 86.3162 15.3679 89.1239 15.3679C91.9118 15.3679 93.4852 17.1486 93.4852 19.6336V24.9785H90.9769V19.8324C90.9769 18.4522 90.3583 17.5888 89.1239 17.5888C87.8895 17.5888 87.2709 18.4493 87.2709 19.8324V24.9785H84.7428Z" />
                        <path d="M72.6757 17.5915H69.9471V21.0961C69.9471 22.3173 70.3849 22.8768 71.6391 22.8768C71.7577 22.8768 72.0571 22.8767 72.4356 22.8569V24.9187C71.9187 25.0579 71.4611 25.1402 70.9612 25.1402C68.8511 25.1402 67.4162 23.8594 67.4162 21.4369V17.5915H65.7214V15.5694H66.1451C66.3117 15.5694 66.4784 15.5354 66.6309 15.4729C66.7863 15.4076 66.9247 15.3138 67.0433 15.1946C67.162 15.0753 67.2552 14.9361 67.3201 14.7799C67.3851 14.6237 67.4162 14.459 67.4162 14.2914V12.3858H69.9443V15.5694H72.6729V17.5915H72.6757Z" />
                    </g>
                    <g fill="var(--logo-text-product-color)">
                        <path d="M142.353 25.2002C140.894 25.2002 139.715 24.7429 138.813 23.8282C137.912 22.9002 137.461 21.7271 137.461 20.3086C137.461 18.9034 137.912 17.7369 138.813 16.8089C139.715 15.881 140.868 15.417 142.273 15.417C143.678 15.417 144.825 15.881 145.713 16.8089C146.601 17.7369 147.045 18.9034 147.045 20.3086C147.045 20.6533 147.039 20.9516 147.026 21.2034H140.006C140.298 22.3965 141.06 22.993 142.293 22.993C143.247 22.993 143.91 22.7147 144.281 22.1579H146.767C146.489 23.1786 145.938 23.9409 145.117 24.4446C144.295 24.9484 143.373 25.2002 142.353 25.2002ZM139.986 19.374H144.54C144.447 18.8703 144.189 18.4594 143.764 18.1412C143.34 17.8098 142.843 17.6441 142.273 17.6441C141.69 17.6441 141.193 17.8032 140.782 18.1213C140.384 18.4262 140.119 18.8438 139.986 19.374Z" />
                        <path d="M133.659 24.9815V11.4202H136.403V24.9815H133.659Z" />
                        <path d="M128.941 24.9815V11.4202H131.685V24.9815H128.941Z" />
                        <path d="M102.831 24.9815L98.8744 11.4202H101.738L103.806 19.2945C104.031 20.1827 104.19 20.9317 104.283 21.5415H104.323C104.429 20.8787 104.595 20.1164 104.82 19.2548L106.987 11.4202H110.606L112.774 19.2548C113.026 20.1429 113.198 20.9052 113.291 21.5415H113.33C113.45 20.7328 113.602 19.9839 113.788 19.2945L115.856 11.4202H118.719L114.762 24.9815H111.68L109.135 15.4966C108.962 14.8338 108.856 14.2637 108.817 13.7865H108.777C108.737 14.2637 108.631 14.8338 108.459 15.4966L105.914 24.9815H102.831Z" />
                        <path d="M154.191 17.6322H151.477V21.118C151.477 22.3327 151.912 22.8892 153.159 22.8892C153.277 22.8892 153.575 22.8892 153.952 22.8694V24.9202C153.438 25.0587 152.982 25.1406 152.485 25.1406C150.386 25.1406 148.959 23.8666 148.959 21.457V17.6322H147.273V15.6209H147.695C147.861 15.6209 148.026 15.587 148.178 15.5248C148.333 15.4599 148.47 15.3666 148.588 15.248C148.706 15.1294 148.799 14.9909 148.864 14.8356C148.928 14.6802 148.959 14.5164 148.959 14.3497V12.4542H151.474V15.6209H154.188V17.6322H154.191Z" />
                        <path d="M125.109 16.0508C125.847 16.4375 126.457 17.0302 126.867 17.7556C127.305 18.543 127.525 19.4349 127.508 20.3353V24.981H125.276L125.117 23.5867C124.826 24.0919 124.4 24.504 123.885 24.7806C123.334 25.0657 122.718 25.2096 122.097 25.1955C121.302 25.204 120.523 24.9923 119.841 24.583C119.152 24.1653 118.592 23.567 118.219 22.8557C117.812 22.0711 117.609 21.1989 117.626 20.3155C117.615 19.4462 117.838 18.591 118.27 17.8346C118.694 17.1008 119.307 16.4968 120.051 16.0875C120.819 15.6613 121.684 15.4412 122.563 15.4525C123.447 15.4355 124.323 15.6416 125.109 16.0508ZM124.292 22.2997C124.778 21.8368 125.019 21.1848 125.019 20.3155C125.05 19.6043 124.798 18.9099 124.323 18.3821C124.097 18.1451 123.826 17.9588 123.524 17.8289C123.221 17.6991 122.899 17.6342 122.571 17.6342C122.244 17.6342 121.919 17.6991 121.619 17.8289C121.317 17.9588 121.045 18.1451 120.819 18.3821C120.367 18.9241 120.118 19.6071 120.118 20.3127C120.118 21.0183 120.367 21.7013 120.819 22.2432C121.042 22.486 121.314 22.6751 121.619 22.8049C121.921 22.9319 122.249 22.9968 122.577 22.9884C122.893 22.994 123.21 22.9347 123.507 22.8162C123.798 22.7005 124.066 22.5227 124.292 22.2997Z" />
                    </g>
                    <g>
                        <path
                            d="M0.00390625 27.2718C0.00390625 28.9035 1.32665 30.2262 2.95832 30.2262L25.0455 30.2262C26.6771 30.2262 27.9999 28.9035 27.9999 27.2718V17.8177C27.9999 11.2909 22.7089 6 16.1822 6H2.95832C1.32664 6 0.00390625 7.32274 0.00390625 8.95441V18.2628L5.84001 18.2627C7.94454 18.2627 9.65102 20.086 9.65102 22.3346C9.65102 24.5831 7.94453 26.4064 5.84001 26.4064H0.00390625V27.2718Z"
                            fill={`url(#${uid}-a)`}
                        />
                        <path
                            d="M5.54639 20.1811C6.74295 20.1811 7.71296 21.1511 7.71296 22.3477C7.71296 23.5443 6.74295 24.5143 5.54639 24.5143C4.34983 24.5143 3.37982 23.5443 3.37982 22.3477C3.37982 21.1511 4.34983 20.1811 5.54639 20.1811Z"
                            fill={`url(#${uid}-b)`}
                        />
                        <path
                            d="M0 27.3326C0 28.9642 1.32274 30.287 2.95442 30.287H22.091V18.8632C22.091 13.9682 18.1228 10 13.2278 10H0V18.2628L5.84001 18.2628C7.94453 18.2628 9.65102 20.086 9.65102 22.3346C9.65102 24.5831 7.94453 26.4064 5.84001 26.4064H0V27.3326Z"
                            fill="#6D4AFF"
                        />
                        <path
                            d="M0 27.3326C0 28.9642 1.32274 30.287 2.95442 30.287H22.091V18.8632C22.091 13.9682 18.1228 10 13.2278 10H0V18.2628L5.84001 18.2628C7.94453 18.2628 9.65102 20.086 9.65102 22.3346C9.65102 24.5831 7.94453 26.4064 5.84001 26.4064H0V27.3326Z"
                            fill={`url(#${uid}-c)`}
                            fillOpacity="0.9"
                        />
                        <path
                            d="M5.54639 20.1811C6.74295 20.1811 7.71296 21.1512 7.71296 22.3477C7.71296 23.5443 6.74295 24.5143 5.54639 24.5143C4.34982 24.5143 3.37982 23.5443 3.37982 22.3477C3.37982 21.1512 4.34982 20.1811 5.54639 20.1811Z"
                            fill="#6D4AFF"
                        />
                        <path
                            d="M5.54639 20.1811C6.74295 20.1811 7.71296 21.1512 7.71296 22.3477C7.71296 23.5443 6.74295 24.5143 5.54639 24.5143C4.34982 24.5143 3.37982 23.5443 3.37982 22.3477C3.37982 21.1512 4.34982 20.1811 5.54639 20.1811Z"
                            fill={`url(#${uid}-d)`}
                            fillOpacity="0.9"
                        />
                        <path
                            d="M8.62467 25.1143C7.92911 25.9093 6.93881 26.4064 5.84001 26.4064H0V27.2717C0 28.9034 1.32274 30.2261 2.95441 30.2261H4.18999L8.69771 25.1052L8.62467 25.1143Z"
                            fill="#FFBB93"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id={`${uid}-a`}
                            x1="-3.51386"
                            y1="8.81943"
                            x2="31.1234"
                            y2="22.312"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#957AFD" />
                            <stop offset="1" stopColor="#FFC6C6" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-b`}
                            x1="-3.51386"
                            y1="8.81943"
                            x2="31.1234"
                            y2="22.312"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#957AFD" />
                            <stop offset="1" stopColor="#FFC6C6" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-c`}
                            x1="20.8426"
                            y1="13.1146"
                            x2="10.099"
                            y2="34.9758"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.149916" stopColor="#FA528E" stopOpacity="0" />
                            <stop offset="0.720842" stopColor="#FF8065" />
                            <stop offset="1" stopColor="#FFA51F" />
                        </linearGradient>
                        <linearGradient
                            id={`${uid}-d`}
                            x1="20.8426"
                            y1="13.1146"
                            x2="10.099"
                            y2="34.9758"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.149916" stopColor="#FA528E" stopOpacity="0" />
                            <stop offset="0.720842" stopColor="#FF8065" />
                            <stop offset="1" stopColor="#FFA51F" />
                        </linearGradient>
                    </defs>
                </>
            )}

            {variant === 'wordmark-only' && (
                <>
                    <path
                        d="M262.601 36C258.879 36 255.868 34.8328 253.568 32.4984C251.267 30.1301 250.117 27.136 250.117 23.516C250.117 19.9298 251.267 16.9525 253.568 14.5843C255.868 12.216 258.812 11.0319 262.398 11.0319C265.984 11.0319 268.911 12.216 271.177 14.5843C273.444 16.9525 274.577 19.9298 274.577 23.516C274.577 24.3956 274.561 25.1568 274.527 25.7996H256.613C257.357 28.8445 259.302 30.367 262.449 30.367C264.885 30.367 266.576 29.6565 267.523 28.2355H273.867C273.157 30.8406 271.753 32.7859 269.655 34.0716C267.557 35.3572 265.206 36 262.601 36ZM256.562 21.1308H268.183C267.946 19.8452 267.287 18.7964 266.204 17.9844C265.121 17.1386 263.853 16.7157 262.398 16.7157C260.909 16.7157 259.641 17.1217 258.592 17.9337C257.577 18.7118 256.9 19.7775 256.562 21.1308Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path d="M240.413 35.4418V0.831543H247.416V35.4418H240.413Z" fill="var(--logo-text-proton-color)" />
                    <path d="M228.374 35.4418V0.831543H235.377V35.4418H228.374Z" fill="var(--logo-text-proton-color)" />
                    <path
                        d="M161.737 35.4418L151.638 0.831543H158.946L164.224 20.9278C164.799 23.1946 165.205 25.1061 165.442 26.6624H165.543C165.814 24.9707 166.237 23.0254 166.812 20.8263L172.344 0.831543H181.58L187.111 20.8263C187.754 23.0931 188.194 25.0384 188.431 26.6624H188.532C188.837 24.5986 189.226 22.6871 189.7 20.9278L194.977 0.831543H202.285L192.186 35.4418H184.32L177.825 11.2349C177.385 9.54331 177.114 8.08853 177.013 6.87057H176.911C176.81 8.08853 176.539 9.54331 176.099 11.2349L169.603 35.4418H161.737Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M292.813 16.6853H285.886V25.5816C285.886 28.6817 286.998 30.1019 290.182 30.1019C290.483 30.1019 291.243 30.1019 292.204 30.0514V35.2855C290.891 35.6387 289.73 35.8478 288.461 35.8478C283.104 35.8478 279.462 32.5964 279.462 26.4468V16.6853H275.159V11.5522H276.235C276.658 11.5522 277.081 11.4657 277.468 11.3071C277.863 11.1412 278.214 10.9033 278.515 10.6005C278.816 10.2977 279.053 9.94448 279.218 9.54797C279.383 9.15145 279.462 8.7333 279.462 8.30795V3.47046H285.879V11.5522H292.806V16.6853H292.813Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M218.593 12.6494C220.475 13.6363 222.033 15.149 223.079 17.0002C224.197 19.0099 224.759 21.2861 224.716 23.584V35.4405H219.018L218.614 31.8821C217.872 33.1715 216.783 34.2231 215.47 34.9291C214.064 35.6566 212.491 36.0239 210.905 35.9879C208.878 36.0095 206.887 35.4693 205.149 34.4248C203.39 33.3587 201.962 31.8317 201.01 30.0164C199.971 28.0139 199.452 25.7881 199.495 23.5335C199.466 21.3149 200.036 19.1324 201.139 17.2019C202.221 15.329 203.786 13.7875 205.683 12.7431C207.645 11.6554 209.852 11.0935 212.095 11.1224C214.352 11.0791 216.588 11.605 218.593 12.6494ZM216.508 28.5974C217.749 27.4161 218.362 25.7521 218.362 23.5335C218.441 21.7183 217.799 19.9463 216.588 18.5993C216.011 17.9942 215.318 17.5188 214.547 17.1875C213.775 16.8561 212.953 16.6905 212.116 16.6905C211.28 16.6905 210.45 16.8561 209.686 17.1875C208.914 17.5188 208.222 17.9942 207.645 18.5993C206.491 19.9823 205.856 21.7255 205.856 23.5263C205.856 25.3271 206.491 27.0703 207.645 28.4533C208.215 29.0728 208.907 29.5554 209.686 29.8868C210.457 30.2109 211.294 30.3766 212.131 30.355C212.938 30.3694 213.746 30.2181 214.503 29.9156C215.246 29.6203 215.932 29.1665 216.508 28.5974Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M0 26.2079V35.4383H6.44504V26.6111C6.44504 25.7543 6.78162 24.9263 7.39032 24.3215C7.99185 23.7167 8.81538 23.3711 9.66756 23.3711H16.2773C19.3566 23.3711 22.3142 22.1399 24.4911 19.944C26.6681 17.7552 27.8927 14.7816 27.8927 11.6856C27.8927 8.58958 26.6681 5.61599 24.4911 3.41999C22.3142 1.2312 19.3566 0 16.2701 0H0V11.5344H6.44504V6.09838H15.8405C17.3014 6.09838 18.6978 6.68158 19.729 7.71838C20.7602 8.75518 21.3402 10.1592 21.3402 11.628C21.3402 13.0968 20.7602 14.5008 19.729 15.5376C18.6978 16.5744 17.3014 17.1576 15.8405 17.1576H9.0159C7.8343 17.1576 6.65988 17.388 5.57138 17.8488C4.47573 18.3024 3.48748 18.972 2.64963 19.8144C1.81177 20.6567 1.15295 21.6575 0.694637 22.7519C0.236323 23.8391 0 25.0199 0 26.2079Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M28.8882 35.4383V21.3767C28.8882 15.6383 32.2181 11.0736 38.8851 11.0736C39.9521 11.0592 41.0192 11.1744 42.0647 11.4264V17.2079C41.3056 17.1575 40.6539 17.1575 40.346 17.1575C36.8156 17.1575 35.2974 18.7847 35.2974 22.0823V35.4383H28.8882Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M43.9836 23.5152C43.9836 16.4592 49.2829 11.0809 56.6589 11.0809C64.0349 11.0809 69.3341 16.4592 69.3341 23.5152C69.3341 30.5712 64.0349 36 56.6589 36C49.2829 36 43.9836 30.564 43.9836 23.5152ZM63.018 23.5152C63.018 19.5048 60.3397 16.6608 56.6589 16.6608C52.9709 16.6608 50.2998 19.4976 50.2998 23.5152C50.2998 27.576 52.978 30.3696 56.6589 30.3696C60.3469 30.3696 63.018 27.5688 63.018 23.5152Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M89.8295 23.5152C89.8295 16.4592 95.1288 11.0809 102.505 11.0809C109.874 11.0809 115.173 16.4592 115.173 23.5152C115.173 30.5712 109.874 36 102.505 36C95.1288 36 89.8295 30.564 89.8295 23.5152ZM108.857 23.5152C108.857 19.5048 106.178 16.6608 102.498 16.6608C98.8168 16.6608 96.1385 19.4976 96.1385 23.5152C96.1385 27.576 98.8168 30.3696 102.498 30.3696C106.178 30.3696 108.857 27.5688 108.857 23.5152Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M118.503 35.4384V21.888C118.503 15.5953 122.492 11.0737 129.61 11.0737C136.678 11.0737 140.667 15.5881 140.667 21.888V35.4384H134.308V22.392C134.308 18.8928 132.739 16.7041 129.61 16.7041C126.48 16.7041 124.912 18.8856 124.912 22.392V35.4384H118.503Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M87.9103 16.7109H80.9927V25.5957C80.9927 28.6917 82.1026 30.1101 85.2822 30.1101C85.583 30.1101 86.342 30.1101 87.3016 30.0597V35.2869C85.9911 35.6397 84.831 35.8485 83.5635 35.8485C78.2141 35.8485 74.5763 32.6013 74.5763 26.4597V16.7109H70.2796V11.5845H71.3537C71.7763 11.5845 72.1988 11.4981 72.5855 11.3397C72.9793 11.1741 73.3302 10.9365 73.631 10.6341C73.9318 10.3317 74.1681 9.97892 74.3328 9.58292C74.4975 9.18692 74.5763 8.76932 74.5763 8.34452V3.51333H80.9855V11.5845H87.9032V16.7109H87.9103Z"
                        fill="var(--logo-text-proton-color)"
                    />
                </>
            )}
        </svg>
    );
};

export default WalletLogo;
