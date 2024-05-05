interface IFooterLinks {
  id: string
  to: string
  name: string
}

export const legalLinks: IFooterLinks[] = [
  { id: '1', to: '/terms-of-service', name: 'footer.terms.of.service' },
  { id: '2', to: '/privacy-policy', name: 'footer.privacy.policy' },
  { id: '3', to: '/', name: 'footer.conditions.of.use' },
]

export const enterpriseLinks: IFooterLinks[] = [
  { id: '1', to: '/about-us', name: 'footer.about.us' },
  { id: '3', to: '/frequently-asked-question', name: 'footer.FAQ' },
]
