export type TermsSection = {
  number: number;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export const termsOfService = {
  title: "Terms of Service",
  subtitle: "Terms and Conditions for Guised",
  intro:
    "Welcome to Guised. By accessing or using our website and services, you agree to comply with the following terms and conditions. Please read them carefully.",
  sections: [
    {
      number: 1,
      title: "General Information",
      paragraphs: [
        "Guised is a leather brand offering handcrafted leather goods. All products are made with high-quality materials, craftsmanship, and ethically sourced hides.",
        "These terms and conditions apply to all orders, sales, and interactions with our website and products.",
      ],
    },
    {
      number: 2,
      title: "Product Information",
      paragraphs: [
        "All Guised products are handcrafted with meticulous attention to detail. Because each item is made entirely by hand, slight variations in stitching, colour, texture, and patterning are natural and add character to every piece. These are not defects. This individuality is part of the artisanal process.",
        "We strive to provide accurate descriptions and images, but actual colours and appearances may differ slightly due to lighting, screen settings, and the handmade nature of our goods.",
      ],
    },
    {
      number: 3,
      title: "Orders, Payment & Made-to-Order Items",
      paragraphs: [
        "By placing an order, you are making an offer to purchase the product(s) in accordance with these terms.",
        "Some Guised products are made to order to ensure individuality and uniqueness.",
      ],
      items: [
        "Items that are made to order are clearly stated in their respective product descriptions.",
        "Made-to-order pieces require a lead time of approximately 2 weeks before shipping.",
        "All orders are subject to availability. If an item is out of stock, we will notify you as soon as possible.",
        "Payment must be made in full at checkout.",
      ],
    },
    {
      number: 4,
      title: "Shipping & Delivery",
      paragraphs: [
        "All orders, especially made-to-order items, will only be shipped after the crafting period is completed.",
        "Shipping fees are calculated at checkout based on destination and order size.",
        "Estimated delivery times after dispatch (not including the 2-week crafting time for made-to-order pieces): EU: 12–18 days; America: 8–18 days.",
        "Delivery timeframes may vary depending on location and courier conditions.",
        "Guised is not responsible for carrier delays or customs processing.",
        "Any customs fees, import taxes, or duties are the customer's responsibility.",
        "Once the parcel is handed over to the carrier, liability shifts to the carrier. Lost, delayed, or damaged shipments should be raised directly with them, though we will do our best to assist.",
      ],
    },
    {
      number: 5,
      title: "Refunds & Exchanges",
      paragraphs: [
        "We do not accept returns or exchanges unless the item received is incorrect or damaged.",
        "If you receive the wrong product, contact us at atelierguise@gmail.com within 7 days of receipt.",
        "We will arrange for the correct item to be sent, and all associated return shipping costs will be covered by Guised.",
      ],
    },
    {
      number: 6,
      title: "Crafting Damages & Repairs (Warranty)",
      paragraphs: [
        "We stand by our craftsmanship. If within 1 year you encounter issues caused by our crafting, such as loose threads, faulty edges, or dye imperfections we will repair the item at no additional cost.",
        "We cannot repair damage caused by improper care, misuse, or external factors.",
        "For repair queries, email atelierguise@gmail.com with photos and details of the issue.",
      ],
    },
    {
      number: 7,
      title: "Custom Orders",
      paragraphs: [
        "Custom orders are available upon request.",
        "Once crafting has begun, the order cannot be cancelled, and no refunds will be issued due to the bespoke nature of the materials and work.",
        "Estimated crafting times will be communicated before we begin the process.",
      ],
    },
    {
      number: 8,
      title: "Intellectual Property",
      paragraphs: [
        "All content on this website—including product images, logos, designs, and written text is the property of Guised.",
        "Unauthorised use, copying, or distribution is prohibited.",
      ],
    },
    {
      number: 9,
      title: "Limitation of Liability",
      paragraphs: [
        "Guised is not liable for any direct, indirect, incidental, or consequential damages related to the use of our products, website, or services, except where required by law.",
        "We make no guarantees regarding website functionality or uninterrupted access.",
      ],
    },
  ] satisfies TermsSection[],
};
