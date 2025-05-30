'use client';

import { faq_data } from '@/libs/static-content/faq-data-about-us';

const FaqPageAboutUs = () => {
  return (
    <>
      {faq_data.map((item) => (
        <div key={item.id} className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${item.id === 1 ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded="true"
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${
              item.id === 1 ? 'show' : ''
            }`}
            data-bs-parent="#accordionThree"
          >
            <div className="accordion-body">
              {item.id === 3 ? (
                <>
                  {/* <p>
                    {' '}
                    - We strive to establish strong and effective working
                    relationships with our clients.
                  </p>
                  <p>
                    {' '}
                    - We believe that the quality of relationships determines
                    success and achievement.
                  </p>
                  <p>
                    {' '}
                    - Driven by passion and a strong desire to deliver results,
                    we aim to earn recognition and appreciation from both our
                    clients and partner companies.
                  </p> */}
                  <p>
                    We are committed to establishing strong, effective working
                    relationships, as we believe that the quality of these
                    relationships directly influences long-term success and
                    achievement. Guided by passion and a results-driven mindset,
                    we aim to earn recognition and appreciation from both our
                    clients and business partners.
                  </p>
                </>
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqPageAboutUs;
