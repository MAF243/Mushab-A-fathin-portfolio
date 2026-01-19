import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/contact';
import SocialLinks from '@/components/molecules/SocialLinks';
import { toast } from '@/components/ui/sonner';

const ContactPanel = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success(t('contact.toast.emailCopied'));
  };

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\+/g, '')}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error(t('contact.toast.messageRequired'));
      return;
    }

    const finalSubject = subject?.trim() || t('contact.form.defaultSubject');
    const body = [
      `Name: ${name || '-'}`,
      `Email: ${email || '-'}`,
      '',
      message,
    ].join('\n');

    const mailto = `mailto:${encodeURIComponent(contactInfo.email)}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast(t('contact.toast.openingEmail'));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <p className="text-lg text-muted-foreground">
          {t('contact.description')}
        </p>

        {/* Email */}
        <div className="card-elevated p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                <p className="font-medium text-foreground">{contactInfo.email}</p>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors focus-ring"
              aria-label={t('contact.copyEmail')}
            >
              {copied ? (
                <Check className="w-5 h-5 text-primary" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-elevated p-6 flex items-center gap-3 hover:border-primary/30 transition-colors group"
        >
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{t('contact.whatsapp')}</p>
            <p className="font-medium text-foreground">{contactInfo.whatsapp}</p>
          </div>
        </a>

        {/* Social Links */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">{t('contact.social')}</p>
          <SocialLinks size="lg" />
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-elevated p-6 md:p-8"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder={t('contact.form.name')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder={t('contact.form.email')}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.subject')}
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder={t('contact.form.subject')}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder={t('contact.form.message')}
            />
          </div>
          <button
            type="submit"
            className="w-full btn-primary"
          >
            {t('contact.form.submit')}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPanel;
