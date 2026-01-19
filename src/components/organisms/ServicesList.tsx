import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServicesList = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-elevated p-6 md:p-8 text-center group"
          >
            <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {t(`services.items.${service.id}.title`)}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t(`services.items.${service.id}.description`)}
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 justify-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesList;
