import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Bookmark?',
    answer:
      'Bookmark is a simple and clean browser extension to save and organize your favorite websites.',
  },
  {
    question: 'Can I use it on any browser?',
    answer:
      'Currently we support Chrome, Firefox, and Opera. More browsers are coming soon!',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Not yet! But we’re working on it.',
  },
  {
    question: 'How do I request a new feature?',
    answer: 'You can contact us via the support form or email us directly.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-base md:text-lg">
          Here are some of our most common questions. Can’t find what you’re looking for? Email us!
        </p>
      </div>

     
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 hover:text-red-500 font-medium text-lg md:text-xl transition-colors"
            >
              {faq.question}
              {activeIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default FAQ;
