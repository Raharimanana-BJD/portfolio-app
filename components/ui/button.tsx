'use client';

import { cn } from '@/lib/utils';
import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

const buttonVariants = cva(
  'group/button relative inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        outline:
          'border-border bg-input/30 hover:bg-input/50 hover:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-muted hover:text-foreground',
        destructive:
          'bg-destructive/10 text-destructive hover:bg-destructive/20',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 gap-1.5 px-3',
        xs: 'h-6 gap-1 px-2.5 text-xs',
        sm: 'h-8 gap-1 px-3',
        lg: 'h-10 gap-1.5 px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      ripple = true,
      onMouseDown,
      children,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      { id: number; x: number; y: number; size: number }[]
    >([]);

    const handleMouseDown: NonNullable<ButtonProps['onMouseDown']> = e => {
      if (ripple) {
        const rect = e.currentTarget.getBoundingClientRect();
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;

        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left - radius,
          y: e.clientY - rect.top - radius,
          size: diameter,
        };

        setRipples(prev => [...prev, newRipple]);
      }
      onMouseDown?.(e);
    };

    return (
      <ButtonPrimitive
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseDown={handleMouseDown}
        {...props}
      >
        {/* Contenu du bouton */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        {/* Effet Ripple avec Framer Motion */}
        {ripple && (
          <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <AnimatePresence>
              {ripples.map(r => (
                <motion.span
                  key={r.id}
                  initial={{ transform: 'scale(0)', opacity: 0.35 }}
                  animate={{ transform: 'scale(4)', opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  onAnimationComplete={() =>
                    setRipples(prev => prev.filter(ri => ri.id !== r.id))
                  }
                  style={{
                    position: 'absolute',
                    left: r.x,
                    top: r.y,
                    width: r.size,
                    height: r.size,
                    borderRadius: '50%',
                    backgroundColor:
                      variant === 'default' || variant === 'destructive'
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.15)',
                  }}
                />
              ))}
            </AnimatePresence>
          </span>
        )}
      </ButtonPrimitive>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
