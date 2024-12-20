/*
 * This file is auto-generated. Do not modify it manually!
 * Run 'yarn workspace @proton/icons build' to update the icons react components.
 */
import React from 'react';

import type { IconSize } from '../types';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** If specified, renders an sr-only element for screenreaders */
    alt?: string;
    /** If specified, renders an inline title element */
    title?: string;
    /**
     * The size of the icon
     * Refer to the sizing taxonomy: https://design-system.protontech.ch/?path=/docs/components-icon--basic#sizing
     */
    size?: IconSize;
}

export const IcPassWallet = ({ alt, title, size = 4, className = '', viewBox = '0 0 16 16', ...rest }: IconProps) => {
    return (
        <>
            <svg
                viewBox={viewBox}
                className={`icon-size-${size} ${className}`}
                role="img"
                focusable="false"
                aria-hidden="true"
                {...rest}
            >
                {title ? <title>{title}</title> : null}

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 8C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12C12.1046 12 13 11.1046 13 10C13 8.89543 12.1046 8 11 8ZM10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H11V2.5C11 2.77614 11.2239 3 11.5 3C11.7761 3 12 2.77614 12 2.5V0.5C12 0.223858 11.7761 0 11.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V13.5C0 14.163 0.263392 14.7989 0.732233 15.2678C1.20107 15.7366 1.83696 16 2.5 16H15.5C15.7761 16 16 15.7761 16 15.5V4.5C16 4.22386 15.7761 4 15.5 4H2.5C2.10218 4 1.72064 3.84196 1.43934 3.56066C1.15804 3.27936 1 2.89782 1 2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934ZM1 13.5V4.50001C1.4302 4.82267 1.95596 5 2.5 5H15V15H2.5C2.10218 15 1.72064 14.842 1.43934 14.5607C1.15804 14.2794 1 13.8978 1 13.5Z"
                ></path>
            </svg>
            {alt ? <span className="sr-only">{alt}</span> : null}
        </>
    );
};
