export const conversations = [
  {
    id: 'conv-001',
    user: {
      name: 'John Smith',
      email: 'john.smith@example.com',
      avatar: 'JS'
    },
    status: 'resolved',
    lastActive: '2025-05-22T08:30:00',
    messages: [
      {
        id: 'msg-001-1',
        sender: 'user',
        text: 'How do I request a refund for my purchase?',
        timestamp: '2025-05-22T08:30:00'
      },
      {
        id: 'msg-001-2',
        sender: 'ai',
        text: "You can request a refund within 30 days of purchase¹. To do so, go to your account page and select the order you want to refund². All refunds are processed within 5-7 business days³.",
        timestamp: '2025-05-22T08:30:30',
        citations: [
          { id: '1', title: 'Refund Policy', source: 'Help Center Article', excerpt: 'Our standard refund window is 30 days from the date of purchase.' },
          { id: '2', title: 'How to Request a Refund', source: 'FAQ', excerpt: 'Navigate to your account dashboard, find the order, and click the "Request Refund" button.' },
          { id: '3', title: 'Processing Times', source: 'Help Center Article', excerpt: 'Refunds typically take 5-7 business days to process and appear on your statement.' }
        ]
      },
      {
        id: 'msg-001-3',
        sender: 'user',
        text: 'Perfect, thank you!',
        timestamp: '2025-05-22T08:31:15'
      },
      {
        id: 'msg-001-4',
        sender: 'ai',
        text: "You're welcome! Is there anything else I can help you with today?",
        timestamp: '2025-05-22T08:31:45'
      }
    ]
  },
  {
    id: 'conv-002',
    user: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'SJ'
    },
    status: 'resolved',
    lastActive: '2025-05-21T16:45:00',
    messages: [
      {
        id: 'msg-002-1',
        sender: 'user',
        text: 'When will my order be shipped?',
        timestamp: '2025-05-21T16:45:00'
      },
      {
        id: 'msg-002-2',
        sender: 'ai',
        text: "Orders are typically processed within 1-2 business days¹. Once shipped, you'll receive a tracking number via email². Standard shipping takes 3-5 business days to arrive³.",
        timestamp: '2025-05-21T16:45:30',
        citations: [
          { id: '1', title: 'Order Processing', source: 'Help Center Article', excerpt: 'Most orders are processed within 1-2 business days from the time of purchase.' },
          { id: '2', title: 'Order Tracking', source: 'FAQ', excerpt: 'All shipments include tracking information sent to your email once the order is shipped.' },
          { id: '3', title: 'Shipping Times', source: 'Help Center Article', excerpt: 'Standard shipping typically takes 3-5 business days to arrive after the order has shipped.' }
        ]
      },
      {
        id: 'msg-002-3',
        sender: 'user',
        text: 'Great, can I expedite the shipping?',
        timestamp: '2025-05-21T16:46:15'
      },
      {
        id: 'msg-002-4',
        sender: 'ai',
        text: "Yes, we offer expedited shipping options at checkout¹. Express shipping (1-2 business days) is available for an additional fee². Please note that expedited shipping only affects transit time, not processing time³.",
        timestamp: '2025-05-21T16:46:45',
        citations: [
          { id: '1', title: 'Shipping Options', source: 'Help Center Article', excerpt: 'Multiple shipping options are available during the checkout process.' },
          { id: '2', title: 'Express Shipping', source: 'FAQ', excerpt: 'Express shipping costs $12.99 and delivers within 1-2 business days after shipping.' },
          { id: '3', title: 'Order Processing', source: 'Help Center Article', excerpt: 'Expedited shipping does not change the 1-2 day processing time.' }
        ]
      }
    ]
  },
  {
    id: 'conv-003',
    user: {
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      avatar: 'MB'
    },
    status: 'handoff',
    lastActive: '2025-05-22T10:15:00',
    messages: [
      {
        id: 'msg-003-1',
        sender: 'user',
        text: 'I need to change the address on my recent order #45678',
        timestamp: '2025-05-22T10:15:00'
      },
      {
        id: 'msg-003-2',
        sender: 'ai',
        text: "I understand you need to change the shipping address for order #45678. Address changes can only be made if the order hasn't shipped yet¹. Let me check the status of your order...",
        timestamp: '2025-05-22T10:15:30',
        citations: [
          { id: '1', title: 'Modifying Orders', source: 'Help Center Article', excerpt: 'Address changes can only be made if the order is still in the processing stage.' }
        ]
      },
      {
        id: 'msg-003-3',
        sender: 'ai',
        text: "I've checked your order and it's currently being packed for shipment. For urgent address changes at this stage, I'll need to connect you with our customer support team who can help you directly.",
        timestamp: '2025-05-22T10:16:00'
      },
      {
        id: 'msg-003-4',
        sender: 'system',
        text: "This conversation has been transferred to a human support agent.",
        timestamp: '2025-05-22T10:16:30'
      }
    ]
  },
  {
    id: 'conv-004',
    user: {
      name: 'Lisa Garcia',
      email: 'lisa.g@example.com',
      avatar: 'LG'
    },
    status: 'active',
    lastActive: '2025-05-22T12:30:00',
    messages: [
      {
        id: 'msg-004-1',
        sender: 'user',
        text: 'How do I reset my password?',
        timestamp: '2025-05-22T12:30:00'
      },
      {
        id: 'msg-004-2',
        sender: 'ai',
        text: "To reset your password, click on 'Forgot Password' on the login page¹. You'll receive an email with a link to reset your password². The link is valid for 24 hours³.",
        timestamp: '2025-05-22T12:30:30',
        citations: [
          { id: '1', title: 'Password Management', source: 'Help Center Article', excerpt: 'The Forgot Password option is located below the login fields on the sign-in page.' },
          { id: '2', title: 'Account Recovery', source: 'FAQ', excerpt: 'Password reset emails are sent immediately to your registered email address.' },
          { id: '3', title: 'Security Measures', source: 'Help Center Article', excerpt: 'Reset links expire after 24 hours for security purposes. If expired, you\'ll need to request a new one.' }
        ]
      }
    ]
  },
  {
    id: 'conv-005',
    user: {
      name: 'Robert Wilson',
      email: 'robert.w@example.com',
      avatar: 'RW'
    },
    status: 'unresolved',
    lastActive: '2025-05-21T14:05:00',
    messages: [
      {
        id: 'msg-005-1',
        sender: 'user',
        text: 'Can I get a bulk discount if I order 50 units?',
        timestamp: '2025-05-21T14:05:00'
      },
      {
        id: 'msg-005-2',
        sender: 'ai',
        text: "Yes, we offer volume discounts for bulk orders¹. For orders of 50+ units, you qualify for our tier 2 discount of 10%². To apply this discount, you can use the code 'BULK10' at checkout³ or contact our sales team for a custom quote for very large orders.",
        timestamp: '2025-05-21T14:05:30',
        citations: [
          { id: '1', title: 'Volume Pricing', source: 'Help Center Article', excerpt: 'We offer tiered volume discounts based on order quantity.' },
          { id: '2', title: 'Discount Tiers', source: 'Pricing Page', excerpt: 'Tier 2 (50-99 units): 10% discount on the entire order.' },
          { id: '3', title: 'Promo Codes', source: 'FAQ', excerpt: 'Use code BULK10 at checkout to apply the 10% bulk discount automatically.' }
        ]
      },
      {
        id: 'msg-005-3',
        sender: 'user',
        text: 'What about if I need a custom version of the product?',
        timestamp: '2025-05-21T14:06:15'
      }
    ]
  }
];