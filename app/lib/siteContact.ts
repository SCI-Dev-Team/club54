/** Public contact and social URLs — single source for Footer, Contact page, etc. */
const ADDRESS_FULL = '#5 Street 242, Phnom Penh 12207, Cambodia';

export const SITE_CONTACT = {
  facebook: 'https://www.facebook.com/profile.php?id=61587141157364',
  instagram: 'https://www.instagram.com/club54.navahub_',
  tiktok: 'https://www.tiktok.com/@club54.navahub',
  email: 'Club54.navahub@gmail.com',
  phoneDisplay: '+855 10 542 654',
  phoneTel: '+85510542654',
  addressLine1: '#5 Street 242',
  addressLine2: 'Phnom Penh 12207',
  country: 'Cambodia',
  addressFull: ADDRESS_FULL,
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_FULL)}`,
} as const;
