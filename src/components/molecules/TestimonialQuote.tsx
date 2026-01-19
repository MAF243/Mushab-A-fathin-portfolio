import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialQuoteProps {
  content: string;
  name: string;
  role: string;
  company: string;
}

const TestimonialQuote = ({ content, name, role, company }: TestimonialQuoteProps) => {
  return (
    <motion.div
      className="card-elevated p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-foreground leading-relaxed mb-6">{content}</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">
          {role} @ {company}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialQuote;
