import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, browse our menu, select the items you want, add them to your cart, and proceed to checkout. You can complete your order by providing your delivery details and payment information.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, digital wallets, and cash on delivery. Select your preferred payment method during checkout.",
    },
    {
      question: "Can I schedule a delivery for later?",
      answer:
        "Yes, you can schedule your order for a later time. Just choose your preferred delivery time at checkout, and we’ll make sure your food arrives fresh and on time.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is placed, you can track its status in real-time through our website. You’ll receive updates about the preparation and delivery status.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
