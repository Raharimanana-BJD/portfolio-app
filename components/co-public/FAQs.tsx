import { FC } from 'react';
import { Typography } from '../ui/typography';

interface FaqsProps {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FaqsProps[] = [
  {
    id: '01',
    question: 'How long does it take to build a website ?',
    answer: '',
  },
  {
    id: '02',
    question: 'What is you developement process like ?',
    answer: '',
  },
  {
    id: '03',
    question: 'Do your work with international clients ?',
    answer: '',
  },
  {
    id: '04',
    question: 'What industries do you specialize in ?',
    answer: '',
  },
];

const FAQs: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <Typography
          variant={'h2'}
          className="border-b-0 leading-tight font-normal"
        >
          FAQ
        </Typography>
        <div className="mt-10">
          {faqsData.map(({ id, question, answer }) => (
            <div
              key={id}
              className="border-border border-t border-dotted py-6 last:border-b md:py-8"
            >
              <div className="flex items-center justify-between gap-4">
                <Typography variant={'h3'}>{question}</Typography>
                <div className="border-border inline-flex size-11 shrink-0 items-center justify-center rounded-full border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
