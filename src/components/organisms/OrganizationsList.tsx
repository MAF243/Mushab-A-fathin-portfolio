import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/i18n/config';
import { organizations } from '@/data/organizations';

const OrganizationsList = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language as Locale;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {organizations.map((item) => (
        <motion.div
          key={item.id}
          className="card-elevated p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-primary font-medium">
                {item.role[locale]}
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-1">
                {item.organization}
              </h3>
            </div>
            {item.period !== '—' && (
              <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
            )}
          </div>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            {item.description[locale]}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default OrganizationsList;
