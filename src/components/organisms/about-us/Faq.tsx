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
                  <p>
                    {' '}
                    - Establish in a good working relationship with our Clients.
                  </p>
                  <p>
                    {' '}
                    - We believe that relationships determine the success and
                    accomplishments
                  </p>
                  <p>
                    {' '}
                    - Filled with passion and a desire to get things done and
                    get good appreciation in the eyes of clients and companies.
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
