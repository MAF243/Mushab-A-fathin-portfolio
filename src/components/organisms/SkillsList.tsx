import { useTranslation } from 'react-i18next';
import { skills } from '@/data/skills';
import { Badge } from '@/components/atoms/Badge';

// Icons (professional)
import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiBootstrap,
  SiMysql,
} from 'react-icons/si';

const iconMap: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  php: SiPhp,
  laravel: SiLaravel,
  bootstrap: SiBootstrap,
  mysql: SiMysql,
};

const normalizeKey = (label: string) => label.trim().toLowerCase().replace(/\s+/g, '');

const SkillsList = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {skills.map((group) => (
        <div key={group.key} className="card-elevated p-6">
          <h3 className="text-base font-semibold text-foreground mb-3">
            {t(`about.skillsGroups.${group.key}`)}
          </h3>

          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => {
              const Icon = iconMap[normalizeKey(item)];

              return (
                <Badge
                  key={item}
                  variant="outline"
                  className="w-10 h-10 px-0 inline-flex items-center justify-center"
                  title={item}
                  aria-label={item}
                >
                  {Icon ? (
                    <>
                      <Icon className="w-5 h-5 text-foreground" aria-hidden="true" />
                      <span className="sr-only">{item}</span>
                    </>
                  ) : (
                    // fallback kalau ada item baru yang belum ada icon-nya
                    <span className="text-xs text-foreground">{item}</span>
                  )}
                </Badge>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
