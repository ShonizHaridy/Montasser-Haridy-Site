import { getTranslations, getLocale } from 'next-intl/server';
import { Call, Whatsapp, Location, Clock, Danger } from 'iconsax-react';

export default async function ContactInfo() {
  const t = await getTranslations('contact');
  const locale = await getLocale();

  const contactMethods = [
    {
      icon: 'call',
      label: t('phone'),
      value: '0238333366',
      href: 'tel:+20238333366',
      bgColor: 'bg-blue-100',
      iconColor: '#2563eb',
      hoverColor: 'group-hover:bg-blue-200'
    },
    {
      icon: 'whatsapp',
      label: t('whatsapp') + ' ' + (locale === 'ar' ? '(مصر)' : '(Egypt)'),
      value: '01070009593',
      href: 'https://wa.me/201070009593',
      bgColor: 'bg-green-100',
      iconColor: '#25D366',
      hoverColor: 'group-hover:bg-green-200'
    },
    {
      icon: 'whatsapp',
      label: t('whatsapp') + ' ' + (locale === 'ar' ? '(السعودية)' : '(Saudi)'),
      value: '(+966) 53 777 2556',
      href: 'https://wa.me/966537772556',
      bgColor: 'bg-green-100',
      iconColor: '#25D366',
      hoverColor: 'group-hover:bg-green-200',
      isRTL: true
    },
    {
      icon: 'location',
      label: t('location'),
      value: t('location_value'),
      href: '#map',
      bgColor: 'bg-red-100',
      iconColor: '#dc2626',
      hoverColor: 'group-hover:bg-red-200'
    },
    {
      icon: 'clock',
      label: t('hours'),
      value: t('hours_value'),
      href: '#',
      bgColor: 'bg-purple-100',
      iconColor: '#9333ea',
      hoverColor: 'group-hover:bg-purple-200'
    }
  ];

  return (
    <div className="space-y-8">
      
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t('get_in_touch')}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {t('get_in_touch_subtitle')}
        </p>
      </div>
      
      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const IconComponent =
            method.icon === 'call' ? Call :
            method.icon === 'whatsapp' ? Whatsapp :
            method.icon === 'location' ? Location :
            Clock;

          return (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`w-14 h-14 ${method.bgColor} ${method.hoverColor} rounded-xl flex items-center justify-center ltr:mr-4 rtl:ml-4 group-hover:scale-110 transition-transform`}>
                <IconComponent size="28" variant="Bold" color={method.iconColor} />
              </div>
              <div className="flex-1 ltr:text-left rtl:text-right">
                <div className="text-sm text-gray-500 mb-1">{method.label}</div>
                <div className={`font-semibold text-gray-900 text-lg ${method.isRTL ? 'ltr' : ''}`} dir={method.isRTL ? 'ltr' : undefined}>
                  {method.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
      
      {/* Emergency Notice */}
      <div className="bg-red-50 border-l-4 ltr:border-l-4 rtl:border-r-4 rtl:border-l-0 border-red-500 p-6 ltr:rounded-r-xl rtl:rounded-l-xl">
        <div className="flex items-start">
          <Danger size="24" variant="Bold" color="#dc2626" className="ltr:mr-3 rtl:ml-3 flex-shrink-0 mt-1" />
          <div className="flex-1 ltr:text-left rtl:text-right">
            <h3 className="font-semibold text-red-900 mb-2">
              {t('emergency')}
            </h3>
            <p className="text-red-700 text-sm">
              {t('emergency_desc')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Office Hours */}
      <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
          <Clock size="20" variant="Bold" color="currentColor" className="ltr:mr-2 rtl:ml-2" />
          {t('hours')}
        </h3>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between items-center">
            <span>{t('working_hours_detail.sat_thu')}</span>
            <span className="font-semibold">{t('working_hours_detail.sat_thu_time')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>{t('working_hours_detail.friday')}</span>
            <span className="font-semibold">{t('working_hours_detail.friday_time')}</span>
          </div>
          <div className="flex justify-between items-center text-red-600">
            <span>{t('working_hours_detail.emergency_label')}</span>
            <span className="font-semibold">{t('working_hours_detail.emergency_time')}</span>
          </div>
        </div>
      </div>

    </div>
  );
}