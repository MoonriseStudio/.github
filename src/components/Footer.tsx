import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-6">
        <p className="text-center text-muted-foreground">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
