import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 min-h-screen px-6 text-center">
      <p className="text-7xl md:text-9xl font-semibold text-primary">404</p>
      <h1 className="text-2xl md:text-3xl font-semibold">Page introuvable</h1>
      <p className="text-muted-foreground max-w-md">La page que vous cherchez n'existe pas ou a été déplacée.</p>
      <Link to="/" className="inline-flex items-center justify-center mt-2 h-11 px-6 text-sm rounded-lg btn-primary bg-primary text-primary-foreground">
        Retour à l'accueil
      </Link>
    </section>
  );
};

export default NotFound;
