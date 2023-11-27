import clsx from "clsx";
import React from "react";
import { GiteeIcon } from "./icons/gitee";

export const LandingGiteeStarButton = () => {
    return (
        <a
            href="https://gitee.com/iofomo/fomosite"
            target="_blank"
            rel="noreferrer"
            className={clsx(
                "flex gap-2 items-center",
                "font-normal",
                "text-sm leading-6",
                "text-gray-500 dark:text-gray-400",
                "hover:text-gray-400 dark:hover:text-gray-300",
                "hover:no-underline",
                "transition-colors",
                "duration-200",
                "ease-in-out",
            )}
        >
            <GiteeIcon className={clsx("w-6 h-6")} />
        </a>
    );
};
