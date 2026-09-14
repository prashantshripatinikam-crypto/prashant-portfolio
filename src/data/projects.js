export const projects = [
  {
    id: '01', slug: 'midori-spirit', title: 'MIDORI SPIRIT', category: 'Brand Identity', year: '2026', role: 'Identity · Campaign · Digital',
    concept: 'Bringing the quiet intelligence of nature into everyday spaces.', accent: '#9ac44d', tone: 'forest',
    overview: 'A living identity for an indoor-plant brand built around wellbeing, oxygen and the emotional power of greener spaces.',
    challenge: 'Turn a familiar product category into a meaningful lifestyle proposition without losing warmth or accessibility.',
    outcome: 'A flexible visual world spanning identity, posters, web, social content and environmental communication.'
  },
  {
    id: '02', slug: 'elyra', title: 'ELYRA', category: 'Packaging', year: '2026', role: 'Packaging · Art Direction',
    concept: 'A skincare ritual shaped by water, clarity and calm.', accent: '#72d7e7', tone: 'aqua',
    overview: 'Premium skincare packaging that balances clinical clarity with a softer ocean-inspired visual language.',
    challenge: 'Communicate active ingredients and trust while retaining a distinctive, elegant shelf presence.',
    outcome: 'A clean modular system designed to scale across cleanser, treatment and hydration ranges.'
  },
  {
    id: '03', slug: 'suvarna-halad', title: 'SUVARNA HALAD', category: 'Brand Identity', year: '2026', role: 'Strategy · Identity · Packaging',
    concept: 'Golden produce, grounded in the soil and stories of Sangli.', accent: '#ffc200', tone: 'turmeric',
    overview: 'A rooted identity for a turmeric brand celebrating the farmer, the origin and the everyday ritual of halad.',
    challenge: 'Build a contemporary consumer brand while keeping regional authenticity visible and honest.',
    outcome: 'A bold yellow-brown identity system with Marathi storytelling, patterns and packaging applications.'
  },
  {
    id: '04', slug: 'intelligence-within-vision', title: 'WITHIN VISION', category: 'Visual Communication', year: '2026', role: 'Concept · Campaign · Digital',
    concept: 'Technology that disappears into the way you see.', accent: '#3858ff', tone: 'vision',
    overview: 'A launch language for next-generation AR and AI eyewear focused on effortless intelligence.',
    challenge: 'Visualise advanced technology without falling into familiar neon, cyberpunk or science-fiction clichés.',
    outcome: 'A precise blue-led visual system connecting product form, human perception and augmented information.'
  },
  {
    id: '05', slug: 'goatwear', title: 'GOATWEAR', category: 'Brand Identity', year: '2026', role: 'Naming · Identity · Fashion',
    concept: 'A fearless fashion mark drawn from the mountain-born Markhor.', accent: '#d4b57a', tone: 'stone',
    overview: 'A fashion identity combining a refined serif voice with the confidence and silhouette of the Markhor.',
    challenge: 'Translate an animal symbol into a premium mark without becoming aggressive or illustrative.',
    outcome: 'A confident identity designed for labels, editorial campaigns, packaging and digital releases.'
  },
  {
    id: '06', slug: 'old-mumbai', title: 'OLD MUMBAI', category: 'Campaign Design', year: '2026', role: 'Advertising · Social · Art Direction',
    concept: 'Nostalgic flavour stories remade for a new generation.', accent: '#f0e55b', tone: 'scoop',
    overview: 'A social-first campaign world balancing authentic Indian flavours with playful contemporary art direction.',
    challenge: 'Keep the product instantly recognisable while making every seasonal story feel new and culturally relevant.',
    outcome: 'A modular campaign approach spanning launches, festivities, polls, product moments and retail stories.'
  }
]

export const getProject = (slug) => projects.find((project) => project.slug === slug)
