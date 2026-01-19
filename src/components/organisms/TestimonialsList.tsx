import { useTranslation } from 'react-i18next';
import { Locale } from '@/i18n/config';
import { testimonials } from '@/data/testimonials';
import TestimonialQuote from '@/components/molecules/TestimonialQuote';

interface TestimonialsListProps {
  limit?: number;
}

const TestimonialsList = ({ limit }: TestimonialsListProps) => {
  const { i18n } = useTranslation();
  const locale = i18n.language as Locale;

  const displayTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayTestimonials.map((testimonial) => (
        <TestimonialQuote
          key={testimonial.id}
          content={testimonial.content[locale] || testimonial.content.en}
          name={testimonial.name}
          role={testimonial.role}
          company={testimonial.company}
        />
      ))}
    </div>
  );
};

export default TestimonialsList;
