export interface Bio {
  name: string;
  profile: string;
  description: string;
  pdfLink: string;
  github: string;
}

export const bio: Bio = {
  name: "Finance Bill 2025",
  profile: '/fb2025.png',
  description: "The Finance Bill 2025 proposes a range of tax measures aimed at increasing government revenue, including removing VAT exemptions on essential goods like bread and sanitary products, granting the Kenya Revenue Authority access to personal financial data without a court order, scrapping tax incentives for affordable housing developers, and introducing stricter digital services taxation. Critics argue that these changes will raise the cost of living, reduce net salaries, infringe on privacy rights, burden businesses, and hinder economic growth—prompting widespread public outcry and calls for its rejection.",
  pdfLink: 'http://parliament.go.ke/sites/default/files/2025-05/THE%20FINANCE%20BILL%202025%20%28Compressed%20Copy%29_2.pdf',
  github: 'https://github.com/sirodaves',
};
