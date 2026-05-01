import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export default function HomePage() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <div className="max-w-2xl space-y-6 text-center">
        {/* Titre principal : Utilise 'as="h1"' pour le SEO et le style dégradé */}
        <Typography
          variant="h1"
          color="primary"
          textGradient
          className="leading-tight"
        >
          Bienvenue sur
          <span className="decoration-secondary ml-2 underline underline-offset-8">
            mon projet
          </span>
        </Typography>

        {/* Description : Utilise color="muted" pour le contraste shadcn */}
        <Typography variant="paragraph" color="muted" className="text-lg">
          Ceci est un texte qui s&apos;adapte aux écrans mobiles et respecte ta
          charte graphique.
        </Typography>

        {/* Actions : Le bouton avec l'effet ripple Framer Motion */}
        <div className="pt-4">
          <Button size="lg" ripple>
            Section importante
          </Button>
        </div>
      </div>
    </main>
  );
}
