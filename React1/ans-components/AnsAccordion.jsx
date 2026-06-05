import { useState } from "react";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React Hook used to manage state in components.",
    },
    {
      question: "What is JSX?",
      answer: "JSX allows us to write HTML inside JavaScript.",
    },
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      <h1>Accordion FAQ</h1>

      {faqs.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => toggleAnswer(index)}>
            {faq.question}
          </h3>

          {openIndex === index && (
            <p>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
