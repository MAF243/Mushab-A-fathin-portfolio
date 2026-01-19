import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Locale } from '@/i18n/config';
import { TimelineItem as TimelineItemType } from '@/data/timeline';

interface TimelineProps {
  items: TimelineItemType[];
  type: 'experience' | 'education';
}

const Timeline = ({ items, type }: TimelineProps) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  
  const filteredItems = items.filter((item) => item.type === type);

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6 z-10" />

            {/* Content */}
            <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="card-elevated p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>
                    {item.startDate} - {item.endDate || t('experience.present')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title[locale] || item.title.en}
                </h3>
                <p className="text-primary font-medium mb-3">{item.organization}</p>
                <p className="text-muted-foreground text-sm">
                  {item.description[locale] || item.description.en}
                </p>
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
