import type { ComponentPropsWithoutRef } from 'react';
import { useState } from 'react';

import generateUID from '@proton/atoms/generateUID';
import { DRIVE_APP_NAME } from '@proton/shared/lib/constants';
import clsx from '@proton/utils/clsx';

import type { LogoProps } from './Logo';

type Props = ComponentPropsWithoutRef<'svg'> & Pick<LogoProps, 'variant' | 'size' | 'hasTitle'>;

const DriveLogo = ({ variant = 'with-wordmark', size, className, hasTitle = true, ...rest }: Props) => {
    // This logo can be several times in the view, ids has to be different each time
    const [uid] = useState(generateUID('logo'));

    let logoWidth: number;

    switch (variant) {
        case 'glyph-only':
            logoWidth = 36;
            break;
        case 'wordmark-only':
            logoWidth = 246;
            break;
        default:
            logoWidth = 140;
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
            {hasTitle && <title id={`${uid}-title`}>{DRIVE_APP_NAME}</title>}
            {variant === 'glyph-only' && (
                <>
                    <path fill={`url(#${uid}-a)`} d="m4 9 4-2 7 4h12v17l-1 1H7a3 3 0 0 1-3-3V9Z" />
                    <path
                        fill={`url(#${uid}-b)`}
                        fillRule="evenodd"
                        d="M14.961 7.426A3 3 0 0 0 16.726 8H29a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-3V14.5a2.5 2.5 0 0 0-2.5-2.5H13a3 3 0 0 1-1.8-.6L8.8 9.6A3 3 0 0 0 7 9H4a3 3 0 0 1 3-3h5.024a3 3 0 0 1 1.765.574l1.172.852Z"
                        clipRule="evenodd"
                    />
                    <defs>
                        <radialGradient
                            id={`${uid}-a`}
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(42.9176 0 0 45.5519 28.926 -8.114)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset=".556" stopColor="#6D4AFF" />
                            <stop offset="1" stopColor="#FF50C3" />
                        </radialGradient>
                        <linearGradient
                            id={`${uid}-b`}
                            x1="3.631"
                            x2="38.345"
                            y1="-6.003"
                            y2="32.431"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#7341FF" />
                            <stop offset=".359" stopColor="#B487FF" />
                            <stop offset="1" stopColor="#FFC8FF" />
                        </linearGradient>
                    </defs>
                </>
            )}

            {variant === 'with-wordmark' && (
                <>
                    <path fill={`url(#${uid}-a)`} d="m0 9 4-2 7 4h12v17l-1 1H3a3 3 0 0 1-3-3V9Z" />
                    <path
                        fill={`url(#${uid}-b)`}
                        fillRule="evenodd"
                        d="M10.961 7.426A3 3 0 0 0 12.726 8H25a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-3V14.5a2.5 2.5 0 0 0-2.5-2.5H9a3 3 0 0 1-1.8-.6L4.8 9.6A3 3 0 0 0 3 9H0a3 3 0 0 1 3-3h5.024a3 3 0 0 1 1.765.574l1.172.852Z"
                        clipRule="evenodd"
                    />
                    <path
                        fill="var(--logo-text-product-color)"
                        d="M107.045 12.12a6.552 6.552 0 0 1 2.508 2.476 7.186 7.186 0 0 1 0 6.959 6.55 6.55 0 0 1-2.508 2.49 7.27 7.27 0 0 1-3.658.904h-4.505V11.213h4.505a7.274 7.274 0 0 1 3.658.907Zm-3.507 10.38a4.163 4.163 0 0 0 2.177-.569 4.18 4.18 0 0 0 1.561-1.62 4.803 4.803 0 0 0 .553-2.234c0-.777-.188-1.544-.553-2.233a4.138 4.138 0 0 0-1.524-1.59 4.218 4.218 0 0 0-2.217-.586h-2.086v8.815l2.089.017Zm8.04-3.138a4.213 4.213 0 0 1 1.035-2.945c.695-.752 1.672-1.13 2.937-1.13.425-.002.849.046 1.265.14v2.294c-.199 0-.427-.02-.681-.02-.695 0-1.205.16-1.527.483a2.015 2.015 0 0 0-.481 1.47v5.292h-2.533l-.015-5.584Zm6.266-5.844a1.443 1.443 0 0 1-.473-1.095 1.495 1.495 0 0 1 .473-1.106 1.544 1.544 0 0 1 1.125-.463c.208-.004.413.036.604.116.191.08.365.198.51.346a1.495 1.495 0 0 1 .473 1.107 1.443 1.443 0 0 1-.473 1.095 1.55 1.55 0 0 1-1.111.452 1.566 1.566 0 0 1-1.128-.452Zm2.396 11.416h-2.533v-9.458h2.533v9.458Zm4.071 0-3.59-9.458h2.667l1.644 4.832c.254.847.402 1.353.442 1.53h.04c.119-.455.282-.966.461-1.53l1.644-4.832h2.687l-3.59 9.458h-2.405Zm15.298-3.862h-7.118c.112.571.419 1.089.867 1.46.447.35 1 .532 1.564.515.453.017.903-.063 1.322-.231.33-.16.598-.42.772-.746h2.345a3.885 3.885 0 0 1-1.644 2.281 4.927 4.927 0 0 1-2.747.795c-.892.02-1.775-.2-2.555-.632a4.416 4.416 0 0 1-1.727-1.761 5.268 5.268 0 0 1-.61-2.542c-.014-.886.2-1.764.621-2.542a4.491 4.491 0 0 1 1.724-1.761 4.885 4.885 0 0 1 2.493-.618 4.675 4.675 0 0 1 2.428.644 4.515 4.515 0 0 1 1.689 1.77 5.19 5.19 0 0 1 .613 2.513c.005.286-.009.572-.037.855Zm-6.277-3.16a2.522 2.522 0 0 0-.86 1.39h4.786a2.134 2.134 0 0 0-.772-1.37c-.442-.363-1-.557-1.573-.543a2.436 2.436 0 0 0-1.581.523Z"
                    />
                    <path
                        fill="var(--logo-text-proton-color)"
                        d="M38 21.26v3.664h2.56V21.42a1.282 1.282 0 0 1 1.279-1.286h2.624a4.592 4.592 0 0 0 3.261-1.361 4.652 4.652 0 0 0 1.351-3.28c0-1.228-.486-2.41-1.35-3.281a4.603 4.603 0 0 0-3.265-1.358H38v4.58h2.56v-2.159h3.73c.58 0 1.134.232 1.544.644a2.2 2.2 0 0 1 0 3.104c-.41.412-.964.644-1.544.644h-2.71a3.551 3.551 0 0 0-2.528 1.055 3.65 3.65 0 0 0-.776 1.166A3.54 3.54 0 0 0 38 21.259Zm11.47 3.664v-5.583c0-2.279 1.322-4.091 3.97-4.091a5.09 5.09 0 0 1 1.262.14v2.296c-.301-.02-.56-.02-.682-.02-1.402 0-2.005.646-2.005 1.955v5.303H49.47Zm5.994-4.734c0-2.802 2.104-4.937 5.033-4.937 2.929 0 5.033 2.135 5.033 4.937 0 2.802-2.104 4.957-5.033 4.957-2.929 0-5.033-2.158-5.033-4.957Zm7.558 0c0-1.592-1.064-2.722-2.525-2.722-1.465 0-2.525 1.127-2.525 2.722 0 1.612 1.063 2.722 2.525 2.722 1.464 0 2.525-1.113 2.525-2.722Zm10.646 0c0-2.802 2.104-4.937 5.032-4.937 2.926 0 5.03 2.135 5.03 4.937 0 2.802-2.104 4.957-5.03 4.957-2.928 0-5.032-2.158-5.032-4.957Zm7.554 0c0-1.592-1.063-2.722-2.524-2.722-1.462 0-2.525 1.127-2.525 2.722 0 1.612 1.063 2.722 2.525 2.722 1.461 0 2.525-1.113 2.525-2.722Zm3.831 4.734v-5.38c0-2.499 1.583-4.294 4.41-4.294 2.806 0 4.39 1.792 4.39 4.294v5.38h-2.525v-5.18c0-1.39-.623-2.259-1.865-2.259-1.243 0-1.865.867-1.865 2.259v5.18h-2.545Zm-12.147-7.436h-2.747v3.528c0 1.23.44 1.793 1.703 1.793.12 0 .42 0 .802-.02v2.075c-.52.14-.981.223-1.484.223-2.124 0-3.569-1.29-3.569-3.728v-3.87h-1.706v-2.036h.427a1.3 1.3 0 0 0 .489-.097 1.285 1.285 0 0 0 .694-.698 1.28 1.28 0 0 0 .096-.492v-1.918h2.545v3.205h2.747v2.035h.003Z"
                    />
                    <defs>
                        <radialGradient
                            id={`${uid}-a`}
                            cx="0"
                            cy="0"
                            r="1"
                            gradientTransform="matrix(42.9176 0 0 45.5519 24.926 -8.114)"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset=".556" stopColor="#6D4AFF" />
                            <stop offset="1" stopColor="#FF50C3" />
                        </radialGradient>
                        <linearGradient
                            id={`${uid}-b`}
                            x1="-.369"
                            x2="34.345"
                            y1="-6.003"
                            y2="32.431"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#7341FF" />
                            <stop offset=".359" stopColor="#B487FF" />
                            <stop offset="1" stopColor="#FFC8FF" />
                        </linearGradient>
                    </defs>
                </>
            )}

            {variant === 'wordmark-only' && (
                <>
                    <path
                        d="M234.113 33.7143C230.906 33.7143 228.279 32.6758 226.232 30.5988C224.186 28.5216 223.162 25.8337 223.162 22.5348C223.162 19.2664 224.17 16.5784 226.186 14.4707C228.233 12.3631 230.86 11.3093 234.067 11.3093C236.999 11.3093 239.474 12.3784 241.49 14.5166C243.506 16.6547 244.514 19.3275 244.514 22.5348C244.514 23.2373 244.499 23.8177 244.468 24.2758H227.973C228.279 25.9253 228.981 27.2082 230.081 28.1246C231.181 29.0409 232.509 29.4991 234.067 29.4991C236.602 29.4991 238.328 28.598 239.245 26.7958H243.964C243.322 28.934 242.101 30.6293 240.298 31.8817C238.496 33.1033 236.435 33.7143 234.113 33.7143ZM227.973 20.6104H239.749C239.596 19.2053 238.985 18.014 237.916 17.0366C236.847 16.0286 235.564 15.5246 234.067 15.5246C232.509 15.5246 231.181 15.9827 230.081 16.8991C229.012 17.8155 228.309 19.0526 227.973 20.6104Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M208.703 33.2561L200.319 11.7675H205.542L209.987 24.3217C210.414 25.6351 210.704 26.6125 210.857 27.254H210.949C211.163 26.5209 211.468 25.5435 211.865 24.3217L216.309 11.7675H221.533L213.194 33.2561H208.703Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M192.189 33.2561V11.7675H197V33.2561H192.189ZM192.373 7.0482C191.792 6.46782 191.502 5.75001 191.502 4.89475C191.502 4.03945 191.792 3.32165 192.373 2.74129C192.984 2.13038 193.732 1.82492 194.618 1.82492C195.473 1.82492 196.191 2.13038 196.771 2.74129C197.382 3.32165 197.687 4.03945 197.687 4.89475C197.687 5.75001 197.382 6.46782 196.771 7.0482C196.191 7.62856 195.473 7.91875 194.618 7.91875C193.732 7.91875 192.984 7.62856 192.373 7.0482Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M176.889 20.0606C176.889 17.4031 177.637 15.2802 179.134 13.6918C180.661 12.1035 182.708 11.3093 185.273 11.3093C186.037 11.3093 186.892 11.4162 187.839 11.63V16.0286C187.564 15.998 187.014 15.9827 186.19 15.9827C184.693 15.9827 183.563 16.3645 182.799 17.1282C182.066 17.8918 181.7 19.1442 181.7 20.8853V33.2561H176.889V20.0606Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M146.212 33.2561V2.05402H155.971C160.645 2.05402 164.493 3.55074 167.517 6.54421C170.541 9.53764 172.053 13.2489 172.053 17.678C172.053 22.1071 170.541 25.8184 167.517 28.8118C164.524 31.7747 160.675 33.2561 155.971 33.2561H146.212ZM151.115 28.6286L156.109 28.6744C159.224 28.7049 161.821 27.6664 163.898 25.5588C166.005 23.4205 167.059 20.7937 167.059 17.678C167.059 14.5929 166.021 11.9813 163.944 9.84312C161.866 7.70491 159.255 6.63584 156.109 6.63584H151.115V28.6286Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M109.822 20.7478C109.822 17.9376 110.677 15.662 112.388 13.9209C114.099 12.1798 116.435 11.3093 119.398 11.3093C122.361 11.3093 124.698 12.1798 126.408 13.9209C128.119 15.662 128.974 17.9376 128.974 20.7478V33.2561H124.163V21.1144C124.163 19.4038 123.751 18.0751 122.926 17.1282C122.132 16.1507 120.956 15.662 119.398 15.662C117.84 15.662 116.649 16.1507 115.824 17.1282C115.03 18.0751 114.633 19.4038 114.633 21.1144V33.2561H109.822V20.7478Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M94.1717 33.7143C90.9645 33.7143 88.2916 32.6453 86.1536 30.5071C84.0155 28.3689 82.9463 25.7115 82.9463 22.5348C82.9463 19.358 84.0155 16.7006 86.1536 14.5624C88.2916 12.3936 90.9645 11.3093 94.1717 11.3093C97.4095 11.3093 100.098 12.3936 102.236 14.5624C104.374 16.7006 105.443 19.358 105.443 22.5348C105.443 25.7115 104.374 28.3689 102.236 30.5071C100.098 32.6453 97.4095 33.7143 94.1717 33.7143ZM87.7572 22.5348C87.7572 24.5202 88.3528 26.1696 89.5441 27.4831C90.7658 28.766 92.3086 29.4075 94.1717 29.4075C96.0349 29.4075 97.5777 28.766 98.7994 27.4831C100.021 26.1696 100.632 24.5202 100.632 22.5348C100.632 20.5188 100.021 18.8693 98.7994 17.5864C97.5777 16.2729 96.0349 15.6162 94.1717 15.6162C92.3086 15.6162 90.7658 16.2729 89.5441 17.5864C88.3528 18.8693 87.7572 20.5188 87.7572 22.5348Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M76.573 33.5769C74.3125 33.5769 72.4644 32.905 71.029 31.5609C69.6237 30.1864 68.9213 28.2926 68.9213 25.8795V15.7537H65.0268V11.7675H68.8755V4.57404H73.7322V11.7675H80.0093V15.7537H73.7322V25.2839C73.7322 26.7195 74.053 27.7428 74.6944 28.3537C75.3663 28.934 76.4355 29.2242 77.9017 29.2242C78.4208 29.2242 78.986 29.2089 79.597 29.1784V33.1645C78.5278 33.4394 77.5198 33.5769 76.573 33.5769Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M51.713 33.7143C48.5057 33.7143 45.8329 32.6453 43.6948 30.5071C41.5568 28.3689 40.4875 25.7115 40.4875 22.5348C40.4875 19.358 41.5568 16.7006 43.6948 14.5624C45.8329 12.3936 48.5057 11.3093 51.713 11.3093C54.9507 11.3093 57.6389 12.3936 59.777 14.5624C61.9151 16.7006 62.9843 19.358 62.9843 22.5348C62.9843 25.7115 61.9151 28.3689 59.777 30.5071C57.6389 32.6453 54.9507 33.7143 51.713 33.7143ZM45.2985 22.5348C45.2985 24.5202 45.8941 26.1696 47.0854 27.4831C48.3071 28.766 49.8498 29.4075 51.713 29.4075C53.5762 29.4075 55.1189 28.766 56.3406 27.4831C57.5624 26.1696 58.1734 24.5202 58.1734 22.5348C58.1734 20.5188 57.5624 18.8693 56.3406 17.5864C55.1189 16.2729 53.5762 15.6162 51.713 15.6162C49.8498 15.6162 48.3071 16.2729 47.0854 17.5864C45.8941 18.8693 45.2985 20.5188 45.2985 22.5348Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M26.5155 20.0606C26.5155 17.4031 27.2638 15.2802 28.7606 13.6918C30.2878 12.1035 32.3344 11.3093 34.9004 11.3093C35.6639 11.3093 36.5191 11.4162 37.4662 11.63V16.0286C37.1913 15.998 36.6415 15.9827 35.8167 15.9827C34.3198 15.9827 33.1897 16.3645 32.426 17.1282C31.6929 17.8918 31.3264 19.1442 31.3264 20.8853V33.2561H26.5155V20.0606Z"
                        fill="var(--logo-text-proton-color)"
                    />
                    <path
                        d="M0 33.2561V2.05402H12.5084C15.3491 2.05402 17.7164 2.93984 19.6102 4.71148C21.5345 6.48311 22.4967 8.74348 22.4967 11.4926C22.4967 14.2417 21.5345 16.5173 19.6102 18.3195C17.7164 20.0911 15.3491 20.9769 12.5084 20.9769H4.90255V33.2561H0ZM4.90255 16.3951H11.592C13.5164 16.3951 14.9825 15.9369 15.9905 15.0206C16.9985 14.1042 17.5025 12.9282 17.5025 11.4926C17.5025 10.0569 16.9985 8.89619 15.9905 8.01039C15.0131 7.09403 13.5775 6.63584 11.6836 6.63584H4.90255V16.3951Z"
                        fill="var(--logo-text-proton-color)"
                    />
                </>
            )}
        </svg>
    );
};

export default DriveLogo;
