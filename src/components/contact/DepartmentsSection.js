import { getTranslations, getLocale } from 'next-intl/server';
import { Call } from 'iconsax-react';

export default async function DepartmentsSection() {
  const footerT = await getTranslations('footer');
  const locale = await getLocale();

  // Get departments from translations
  const departmentListRaw = footerT.raw('department_list');
  const departments = Array.isArray(departmentListRaw) ? departmentListRaw : [];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ar' ? 'تواصل مع القسم المناسب' : 'Contact a Specific Department'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {locale === 'ar'
              ? 'اختر القسم المناسب لاحتياجاتك وتواصل مباشرة مع فريقنا المتخصص'
              : 'Choose the right department for your needs and contact our specialized team directly'
            }
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-primary-500"
            >
              {/* Department Name */}
              <div className="flex items-start mb-4 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center ltr:mr-3 rtl:ml-3 flex-shrink-0">
                  <Call size="20" variant="Bold" color="#1e40af" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {dept.name}
                </h3>
              </div>

              {/* Phone Numbers */}
              <div className={`grid gap-2 ${dept.phones.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {dept.phones.map((phone, phoneIndex) => (
                  <a
                    key={phoneIndex}
                    href={`tel:+2${phone}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-700 transition-colors group"
                  >
                    <Call
                      size="16"
                      variant="Bold"
                      color="currentColor"
                      className="flex-shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="font-medium text-sm" dir="ltr">
                      {phone}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
