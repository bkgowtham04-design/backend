// Comprehensive fallback dataset with 20+ rich news stories
export const fallbackNews = [
  {
    id: 1,
    title: 'Breakthrough in Quantum Computing: New Chip Achieves 1000+ Qubit Milestone',
    description:
      'Researchers have successfully developed a quantum processor with over 1000 qubits, marking a significant leap forward in quantum computing technology.',
    category: 'technology',
    author: { name: 'Sarah Chen', bio: 'Tech Correspondent', avatar: '👩‍💼' },
    urlToImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    content:
      'In a landmark achievement, quantum computing researchers have unveiled a processor with over 1000 qubits. This advancement brings us closer to practical quantum computing applications in drug discovery, materials science, and optimization problems.',
    publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    views: 5430,
  },
  {
    id: 2,
    title: 'Global Markets Rally as Economic Growth Exceeds Expectations',
    description:
      'Stock markets around the world surged today following better-than-expected GDP growth figures, boosting investor confidence.',
    category: 'business',
    author: { name: 'James Wilson', bio: 'Business Editor', avatar: '👨‍💼' },
    urlToImage:
      'https://images.unsplash.com/photo-1611432578662-aa1beb8c4d14?w=800&h=400&fit=crop',
    content:
      'Global markets reached new highs today as economic data surprised investors on the upside. The rally was led by tech and financial stocks, with major indices gaining over 2% each.',
    publishedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
    views: 3892,
  },
  {
    id: 3,
    title: 'Tennis Legend Wins 25th Grand Slam Title in Historic Victory',
    description:
      'In a thrilling match, the tennis icon claimed their 25th major championship, setting a new record in tennis history.',
    category: 'sports',
    author: { name: 'Mike Rodriguez', bio: 'Sports Reporter', avatar: '🏃' },
    urlToImage:
      'https://images.unsplash.com/photo-1554068865-24cecd4e34c8?w=800&h=400&fit=crop',
    content:
      "The match lasted over four hours and was decided in a thrilling fifth set. The victory cements the player's legacy as one of the greatest athletes of all time.",
    publishedAt: new Date(Date.now() - 1 * 3600000).toISOString(),
    views: 8234,
  },
  {
    id: 4,
    title: 'AI-Powered Medical Diagnosis Tool Achieves 99.5% Accuracy',
    description:
      'A new artificial intelligence system demonstrates unprecedented accuracy in diagnosing complex medical conditions from imaging data.',
    category: 'health',
    author: { name: 'Dr. Emily Watson', bio: 'Health Correspondent', avatar: '👩‍⚕️' },
    urlToImage:
      'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=400&fit=crop',
    content:
      'Medical researchers have successfully deployed an AI system that can diagnose diseases with unprecedented accuracy. The tool is expected to revolutionize medical imaging interpretation.',
    publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
    views: 6120,
  },
  {
    id: 5,
    title: 'New Climate Report Shows Faster-Than-Expected Environmental Changes',
    description:
      'Scientists warn that environmental changes are accelerating faster than previously predicted, calling for immediate action.',
    category: 'science',
    author: { name: 'David Green', bio: 'Environmental Scientist', avatar: '👨‍🔬' },
    urlToImage:
      'https://images.unsplash.com/photo-1611599810694-36f9c0f5e40f?w=800&h=400&fit=crop',
    content:
      'A comprehensive new report reveals that climate change impacts are intensifying at a faster rate than models predicted just five years ago.',
    publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
    views: 7456,
  },
  {
    id: 6,
    title: 'Entertainment Industry Announces Record-Breaking Box Office Weekend',
    description:
      'The latest blockbuster film shatters box office records with the biggest opening weekend in cinema history.',
    category: 'entertainment',
    author: { name: 'Lisa Martinez', bio: 'Entertainment Editor', avatar: '🎬' },
    urlToImage:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=400&fit=crop',
    content:
      'The highly anticipated film exceeded all predictions, becoming the highest-grossing opening weekend of all time with $520 million globally.',
    publishedAt: new Date(Date.now() - 10 * 3600000).toISOString(),
    views: 4521,
  },
  {
    id: 7,
    title: 'Government Announces Major Infrastructure Investment Package',
    description:
      'A trillion-dollar infrastructure plan aims to modernize transportation, energy, and digital networks across the nation.',
    category: 'politics',
    author: { name: 'Thomas Anderson', bio: 'Political Correspondent', avatar: '🏛️' },
    urlToImage:
      'https://images.unsplash.com/photo-1554469384-94a42e25d816?w=800&h=400&fit=crop',
    content:
      'The government has unveiled an ambitious trillion-dollar investment plan focused on modernizing aging infrastructure and building new digital networks.',
    publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    views: 5892,
  },
  {
    id: 8,
    title: 'Revolutionary Battery Technology Could Transform Electric Vehicles',
    description:
      'Scientists develop a solid-state battery that charges in minutes and lasts for millions of miles, potentially revolutionizing the EV industry.',
    category: 'technology',
    author: { name: 'Alex Kumar', bio: 'Tech Correspondent', avatar: '👨‍💻' },
    urlToImage:
      'https://images.unsplash.com/photo-1581092162562-40038f60dd12?w=800&h=400&fit=crop',
    content:
      'A breakthrough in solid-state battery technology promises to eliminate the main limitations of current electric vehicles with drastically reduced charging times.',
    publishedAt: new Date(Date.now() - 14 * 3600000).toISOString(),
    views: 6748,
  },
  {
    id: 9,
    title: 'Tourism Industry Sees Record Recovery with 15% Growth',
    description:
      'The global tourism sector rebounds strongly, exceeding pre-pandemic levels and creating millions of new jobs worldwide.',
    category: 'business',
    author: { name: 'Patricia Lee', bio: 'Business Analyst', avatar: '✈️' },
    urlToImage:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop',
    content:
      'The tourism industry has experienced remarkable growth, with international arrivals reaching record numbers and generating unprecedented revenue.',
    publishedAt: new Date(Date.now() - 16 * 3600000).toISOString(),
    views: 4213,
  },
  {
    id: 10,
    title: 'Olympic Games Committee Selects Host City for 2040 Games',
    description:
      'After a competitive bidding process, the Olympic Games Committee has selected the host city for the 2040 Summer Games.',
    category: 'sports',
    author: { name: 'Robert Chang', bio: 'Sports Editor', avatar: '🏅' },
    urlToImage:
      'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=400&fit=crop',
    content:
      'In a historic decision, the Olympic Games Committee has awarded the 2040 Summer Games to a city that promises to deliver the most sustainable Games ever.',
    publishedAt: new Date(Date.now() - 18 * 3600000).toISOString(),
    views: 5634,
  },
  {
    id: 11,
    title: 'New Vaccine Shows Promise Against Multiple Cancer Types',
    description:
      'Researchers announce positive results from trials of a personalized cancer vaccine that targets multiple tumor types simultaneously.',
    category: 'health',
    author: { name: 'Dr. Jennifer Wong', bio: 'Medical Correspondent', avatar: '💊' },
    urlToImage:
      'https://images.unsplash.com/photo-1576091160564-112173f7f869?w=800&h=400&fit=crop',
    content:
      'Clinical trials of a new personalized cancer vaccine have shown remarkable success in treating multiple cancer types with minimal side effects.',
    publishedAt: new Date(Date.now() - 20 * 3600000).toISOString(),
    views: 7821,
  },
  {
    id: 12,
    title: 'Scientists Discover Evidence of Ancient Microbial Life on Mars',
    description:
      'Analysis of Martian samples reveals compelling evidence of fossilized microbial structures, suggesting life once existed on the Red Planet.',
    category: 'science',
    author: { name: 'Dr. Paul Stevens', bio: 'Astrophysicist', avatar: '🔭' },
    urlToImage:
      'https://images.unsplash.com/photo-1608889460715-3a8e0eda6e81?w=800&h=400&fit=crop',
    content:
      'Groundbreaking analysis of samples collected from Mars reveals structures consistent with fossilized microorganisms, marking a historic discovery in astrobiology.',
    publishedAt: new Date(Date.now() - 22 * 3600000).toISOString(),
    views: 9234,
  },
  {
    id: 13,
    title: 'Music Industry Celebrates 50 Years of Rock and Roll Innovation',
    description:
      'A grand ceremony honors five decades of transformative music that shaped popular culture and influenced billions worldwide.',
    category: 'entertainment',
    author: { name: 'Monica Turner', bio: 'Entertainment Writer', avatar: '🎸' },
    urlToImage:
      'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=800&h=400&fit=crop',
    content:
      'The music industry celebrated a milestone anniversary with performances from legendary artists and discussions about the evolution of rock and roll.',
    publishedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
    views: 3456,
  },
  {
    id: 14,
    title: 'New Study Reveals Surprising Health Benefits of Coffee',
    description:
      'Long-term research shows that moderate coffee consumption may provide protective health benefits against certain diseases.',
    category: 'health',
    author: { name: 'Dr. Nancy Chen', bio: 'Medical Researcher', avatar: '☕' },
    urlToImage:
      'https://images.unsplash.com/photo-1574432837394-30edfc9ce5f0?w=800&h=400&fit=crop',
    content:
      'A new comprehensive study of over 500,000 participants reveals that moderate coffee consumption is associated with lower risks of cardiovascular disease and certain cancers.',
    publishedAt: new Date(Date.now() - 15 * 3600000).toISOString(),
    views: 8923,
  },
  {
    id: 15,
    title: 'Tech Startup Raises Record $2 Billion in Series D Funding',
    description:
      'A leading artificial intelligence startup has raised an unprecedented amount in Series D funding, valuing the company at over $20 billion.',
    category: 'technology',
    author: { name: 'Marcus Johnson', bio: 'Venture Capital Reporter', avatar: '💰' },
    urlToImage:
      'https://images.unsplash.com/photo-1553729059-e0a5f3c6d1ad?w=800&h=400&fit=crop',
    content:
      'The AI startup announced the completion of a massive funding round from leading venture capital firms and institutional investors worldwide.',
    publishedAt: new Date(Date.now() - 10 * 3600000).toISOString(),
    views: 7123,
  },
  {
    id: 16,
    title: 'Environmental Conservation Initiative Succeeds in Protecting 10 Million Acres',
    description:
      'A global conservation effort has successfully protected over 10 million acres of pristine natural habitats from development.',
    category: 'science',
    author: { name: 'Jennifer Lee', bio: 'Environmental Correspondent', avatar: '🌍' },
    urlToImage:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
    content:
      'Through coordinated international efforts, conservationists have successfully protected vast areas of critical ecosystems and wildlife habitats.',
    publishedAt: new Date(Date.now() - 16 * 3600000).toISOString(),
    views: 5987,
  },
  {
    id: 17,
    title: 'Entertainment: Major Film Festival Announces Lineup for 2024',
    description:
      'The prestigious film festival reveals its selection of 200+ films from around the world, promising a diverse cultural celebration.',
    category: 'entertainment',
    author: { name: 'David Wilson', bio: 'Film Critic', avatar: '🎞️' },
    urlToImage:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=400&fit=crop',
    content:
      'The annual film festival has announced its program featuring over 200 films from 60 countries, showcasing diverse voices and filmmaking styles.',
    publishedAt: new Date(Date.now() - 11 * 3600000).toISOString(),
    views: 4234,
  },
  {
    id: 18,
    title: 'Revolutionary Battery Technology Promises 1000-Mile EV Range',
    description:
      'Researchers announce a breakthrough in battery technology that could enable electric vehicles to travel over 1000 miles on a single charge.',
    category: 'technology',
    author: { name: 'Thomas Anderson', bio: 'Tech Reporter', avatar: '🔋' },
    urlToImage:
      'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=800&h=400&fit=crop',
    content:
      'A new solid-state battery design demonstrates remarkable energy density, potentially revolutionizing the electric vehicle industry and enabling longer range capabilities.',
    publishedAt: new Date(Date.now() - 14 * 3600000).toISOString(),
    views: 8567,
  },
  {
    id: 19,
    title: 'Global Trade Agreement Signed to Reduce Tariffs and Boost Commerce',
    description:
      'Major economies announce a historic trade agreement designed to reduce tariffs and promote international commerce and cooperation.',
    category: 'business',
    author: { name: 'Sophie Bennett', bio: 'Economics Editor', avatar: '📊' },
    urlToImage:
      'https://images.unsplash.com/photo-1460925895917-afdab36c0c3f?w=800&h=400&fit=crop',
    content:
      'Trade ministers from around the world have concluded negotiations on a comprehensive agreement to reduce tariffs and facilitate smoother international trade.',
    publishedAt: new Date(Date.now() - 21 * 3600000).toISOString(),
    views: 6234,
  },
  {
    id: 20,
    title: 'Women\'s Sports Team Wins Championship Title in Stunning Comeback',
    description:
      'The women\'s team stages an incredible comeback to win the championship title, inspiring millions of fans worldwide.',
    category: 'sports',
    author: { name: 'Angela Foster', bio: 'Sports Correspondent', avatar: '⚽' },
    urlToImage:
      'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=400&fit=crop',
    content:
      'In an unforgettable championship match, the women\'s team overcame a significant deficit to claim the title in an exciting victory that captivated audiences globally.',
    publishedAt: new Date(Date.now() - 19 * 3600000).toISOString(),
    views: 9876,
  },
];
