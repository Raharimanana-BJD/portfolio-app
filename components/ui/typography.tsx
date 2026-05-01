import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const typographyVariants = cva('block antialiased', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-5xl md:text-6xl md:leading-none font-extrabold tracking-tight lg:text-7xl font-heading',
      h2: 'scroll-m-20 border-b pb-2 text-4xl md:leading-none md:text-5xl font-semibold tracking-tight first:mt-0 lg:text-6xl font-heading',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl font-heading',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl font-heading',
      h5: 'text-lg font-semibold lg:text-xl font-heading',
      h6: 'text-base font-semibold font-heading',
      lead: 'text-xl text-muted-foreground',
      paragraph: 'leading-7 [&:not(:first-child)]:mt-6',
      small: 'text-sm font-medium leading-none',
    },
    color: {
      // Correspondance exacte avec ton fichier CSS @theme
      inherit: 'text-inherit',
      current: 'text-current',
      background: 'text-background',
      foreground: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted-foreground',
      accent: 'text-accent-foreground',
      destructive: 'text-destructive',
      // Couleurs utilitaires Tailwind classiques (toujours disponibles)
      blue: 'text-blue-500',
      red: 'text-red-500',
      orange: 'text-orange-500',
    },
    textGradient: {
      true: 'bg-clip-text text-transparent bg-gradient-to-tr',
      false: '',
    },
  },
  compoundVariants: [
    // Gradients basés sur tes variables primaires/secondaires
    {
      color: 'primary',
      textGradient: true,
      className: 'from-primary to-primary/60',
    },
    {
      color: 'blue',
      textGradient: true,
      className: 'from-blue-600 to-blue-400',
    },
  ],
  defaultVariants: {
    variant: 'paragraph',
    color: 'foreground',
    textGradient: false,
  },
});

type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'small'
  | 'div';

export interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: TypographyElement;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, textGradient, as, ...props }, ref) => {
    const variantElementMap: Record<string, TypographyElement> = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      paragraph: 'p',
      small: 'small',
      lead: 'p',
    };

    const Component = as || (variant ? variantElementMap[variant] : 'p') || 'p';

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(
          typographyVariants({ variant, color, textGradient, className })
        )}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
