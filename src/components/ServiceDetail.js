import { useTranslations } from 'next-intl';
import { 
  Scale, 
  Building2, 
  Passport, 
  Phone,
  CheckCircle,
  Star,
  Clock,
  Shield
} from 'lucide-react';

export default function ServiceDetail({ service }) {
  const t = useTranslations('services');

  const serviceData = {
    litigation: {
      icon: Scale,
      color: 'bg-red-600',
      areas: [
        {
          title: 'Criminal Defense',
          description: 'Expert defense in murder, drugs, money laundering, economic crimes, media crimes, and state security cases.',
          cases: '400+'
        },
        {
          title: 'Civil Disputes',
          description: 'Compensation claims, property disputes, rental issues, ownership matters, and check disputes.',
          cases: '300+'
        },
        {
          title: 'Family Law',
          description: 'Divorce proceedings, custody battles, alimony disputes, paternity cases, and guardianship matters.',
          cases: '200+'
        },
        {
          title: 'Commercial Litigation',
          description: 'Business disputes, contract violations, partnership conflicts, and corporate legal battles.',
          cases: '150+'
        }
      ],
      countries: ['Egypt', 'Saudi Arabia', 'UAE'],
      highlights: [
        'High-profile criminal cases',
        'Sensitive political matters',
        'Celebrity legal issues',
        'Media crisis management'
      ]
    },
    corporate: {
      icon: Building2,
      color: 'bg-blue-600',
      areas: [
        {
          title: 'Company Formation',
          description: 'Complete business setup for all types of companies including LLCs, corporations, and partnerships.',
          cases: '200+'
        },
        {
          title: 'Business Licensing',
          description: 'Commercial, industrial, service, and agricultural licenses across multiple jurisdictions.',
          cases: '180+'
        },
        {
          title: 'Corporate Amendments',
          description: 'Partner changes, activity modifications, capital adjustments, and structural reorganizations.',
          cases: '150+'
        },
        {
          title: 'Saudi Foreign Companies',
          description: 'Specialized setup of foreign companies in Saudi Arabia without local sponsor requirements.',
          cases: '100+'
        }
      ],
      countries: ['Egypt', 'Saudi Arabia', 'UAE'],
      highlights: [
        'No sponsor required in Saudi',
        'UAE free zone expertise',
        'Fast registration process',
        'Full compliance support'
      ]
    },
    residency: {
      icon: Passport,
      color: 'bg-green-600',
      areas: [
        {
          title: 'Investor Visas',
          description: 'Investment-based residency programs across 16+ countries for high-net-worth individuals.',
          cases: '200+'
        },
        {
          title: 'Work Permits',
          description: 'Employment-based residency and work authorization in multiple jurisdictions.',
          cases: '150+'
        },
        {
          title: 'Tourist Extensions',
          description: 'Visitor visa extensions and tourist residency solutions for extended stays.',
          cases: '100+'
        },
        {
          title: 'Citizenship Programs',
          description: 'Consultation on citizenship by investment and naturalization processes.',
          cases: '50+'
        }
      ],
      countries: ['Egypt', 'Saudi Arabia', 'UAE', 'Turkey', 'USA', 'Canada', 'Europe'],
      highlights: [
        '500+ successful cases',
        '16+ countries served',
        'Fast-track processing',
        'Family residency options'
      ]
    },
    consultation: {
      icon: Phone,
      color: 'bg-purple-600',
      areas: [
        {
          title: 'Emergency Legal Advice',
          description: '24/7 immediate consultation for urgent legal matters requiring instant professional guidance.',
          cases: '1000+'
        },
        {
          title: 'Crisis Management',
          description: 'Rapid response legal support for public figures facing media scrutiny or legal challenges.',
          cases: '200+'
        },
        {
          title: 'Confidential Consultation',
          description: 'Discreet legal advice for high-profile clients requiring absolute privacy and confidentiality.',
          cases: '300+'
        },
        {
          title: 'International Support',
          description: 'Global legal consultation services for clients located anywhere in the world.',
          cases: '400+'
        }
      ],
      countries: ['Global Coverage'],
      highlights: [
        'Available 24/7',
        'Absolute confidentiality',
        'Immediate response',
        'Multi-language support'
      ]
    }
  };

  const currentService = serviceData[service];
  const ServiceIcon = currentService.icon;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${currentService.color} rounded-2xl mb-6`}>
            <ServiceIcon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-navy-900 mb-6">
            {t(`${service}.title`)}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(`${service}.description`)}
          </p>
        </div>

        {/* Service Areas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {currentService.areas.map((area, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-navy-900">{area.title}</h3>
                <div className="text-sm text-gold-600 font-semibold bg-gold-50 px-3 py-1 rounded-full">
                  {area.cases} Cases
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Highlights & Coverage */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Key Highlights */}
          <div className="bg-navy-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
              <Star className="w-6 h-6 text-gold-500 mr-3" />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {currentService.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries Served */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-navy-600 mr-3" />
              Coverage Areas
            </h3>
            <div className="space-y-4">
              {currentService.countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">{country}</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy-900 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need {t(`${service}.title`)}?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Get expert legal assistance with absolute confidentiality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0238333366"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0238333366
            </a>
            <a
              href="https://wa.me/01070009593"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <Clock className="w-5 h-5 mr-2" />
              24/7 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}