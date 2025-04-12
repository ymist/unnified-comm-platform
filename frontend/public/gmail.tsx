import * as React from "react";
import { LucideProps } from "lucide-react";

export const IconGmail = React.forwardRef<SVGSVGElement, LucideProps>(
  ({  size = 24, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      {...rest}
    >
      {/* Icon from Skill Icons by tandpfun */}
      <rect width="256" height="256" fill="#F4F2ED" rx="60" />
      <path
        fill="#4285F4"
        d="M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636"
      />
      <path
        fill="#34A853"
        d="M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091"
      />
      <path
        fill="#FBBC04"
        d="M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363"
      />
      <path
        fill="#EA4335"
        d="M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675"
      />
      <path
        fill="#C5221F"
        d="M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493"
      />
    </svg>
  )
);

IconGmail.displayName = "IconGmail";
