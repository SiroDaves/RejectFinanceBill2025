export interface Reason {
  id: number;
  title: string;
  description: string;
}

export const reasons: Reason[] = [
  {
    id: 1,
    title: "Increased Cost of Living",
    description: "The bill proposes VAT on essential goods like bread and sanitary products, along with new digital and service taxes, which would raise the cost of basic necessities and utilities for ordinary citizens."
  },
  {
    id: 2,
    title: "Invasion of Privacy",
    description: "It allows the Kenya Revenue Authority to access individuals’ financial records without a court order, raising serious concerns about data protection and the erosion of constitutional privacy rights."
  },
  {
    id: 3,
    title: "Threats to Jobs and Business Growth",
    description: "The removal of tax incentives and the introduction of new levies increase operational costs for businesses, which could lead to job cuts, reduced investments, and slowed economic growth."
  },
  {
    id: 4,
    title: "Undermining Affordable Housing and Salaries",
    description: "By scrapping tax benefits for housing developers and introducing changes that reduce net salaries, the bill risks stalling affordable housing projects and worsening the financial strain on workers."
  },
  {
    id: 5,
    title: "Public Backlash and Legal Uncertainty",
    description: "The bill’s controversial measures echo past proposals that triggered deadly protests, and its lack of proper public engagement or legal clarity raises the risk of widespread unrest and constitutional challenges."
  }
];
