import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServiceSectionProps {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'alternate' | 'card';
}

const ServiceSection = ({
  id,
  title,
  content,
  imageUrl,
  imageAlt,
  imagePosition = 'right',
  variant = 'default'
}: ServiceSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getBackgroundClass = () => {
    switch (variant) {
      case 'alternate':
        return 'bg-background';
      case 'card':
        return 'bg-gradient-to-br from-primary/5 to-primary/10';
      default:
        return 'bg-card';
    }
  };

  const getImageClass = () => {
    switch (variant) {
      case 'card':
        return 'rounded-2xl w-full h-[450px] object-cover shadow-2xl ring-1 ring-primary/10';
      default:
        return 'rounded-lg w-full h-[400px] object-cover shadow-lg';
    }
  };

  return (
    <section id={id} className={`py-20 ${getBackgroundClass()}`}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
          } ${
            isVisible
              ? 'opacity-100 animate-fade-in-up'
              : 'opacity-0'
          }`}
        >
          <div
            className={`${imagePosition === 'left' ? 'lg:order-2' : ''} ${
              isVisible
                ? imagePosition === 'left'
                  ? 'animate-fade-in-right'
                  : 'animate-fade-in-left'
                : 'opacity-0'
            }`}
          >
            {variant === 'card' && (
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Premium Service
              </div>
            )}
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {content}
              </p>
            </div>
          </div>

          {imageUrl && (
            <div
              className={`${imagePosition === 'left' ? 'lg:order-1' : ''} ${
                isVisible
                  ? imagePosition === 'left'
                    ? 'animate-fade-in-left'
                    : 'animate-fade-in-right'
                  : 'opacity-0'
              }`}
            >
              <img
                src={imageUrl}
                alt={imageAlt || title}
                className={getImageClass()}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;