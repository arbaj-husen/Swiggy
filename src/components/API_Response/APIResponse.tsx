export interface Root {
  data: Data
}

export interface Data {
  statusMessage: string
  cards: Card[]
}

export interface Card {
  card: Card2
}

export interface Card2 {
  card: Card3
}

export interface Card3 {
  imageGridCards?: ImageGridCards
  id?: string
  gridElements?: GridElements
  "@type"?: string
  title?: string
  sortConfigs?: SortConfig[]
  restaurantCount?: number
  widgetId?: string
  message?: string
  brands?: Brand[]
}

export interface ImageGridCards {
  info: Info[]
}

export interface Info {
  id: string
  imageId: string
  action: Action
  entityType: string
  accessibility: Accessibility
  entityId: string
}

export interface Action {
  link: string
  text: string
  type: string
}

export interface Accessibility {
  altText: string
  altTextCta: string
}

export interface GridElements {
  infoWithStyle: InfoWithStyle
}

export interface InfoWithStyle {
  restaurants: Restaurant[]
  theme?: string
  collectionId?: string
}

export interface Restaurant {
  info: Info2
  analytics: Analytics
  cta: Cta
  "@type"?: string
  widgetId?: string
}

export interface Info2 {
  id: string
  name: string
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  cuisines: string[]
  avgRating: number
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  sla: Sla
  availability: Availability
  badges: Badges
  isOpen: boolean
  type: string
  badgesV2: BadgesV2
  differentiatedUi: DifferentiatedUi
  displayType: string
  externalRatings: ExternalRatings
  ratingsDisplayPreference: string
  veg?: boolean
  isNewlyOnboarded?: boolean
}

export interface Sla {
  deliveryTime: number
  lastMileTravel: number
  serviceability: string
  slaString: string
  lastMileTravelString: string
  iconType: string
}

export interface Availability {
  nextCloseTime: string
  opened: boolean
}

export interface Badges {
  imageBadges?: ImageBadge[]
}

export interface ImageBadge {
  imageId: string
  description: string
}

export interface BadgesV2 {
  entityBadges: EntityBadges
}

export interface EntityBadges {
  imageBased: ImageBased
}

export interface ImageBased {
  badgeObject?: BadgeObject[]
}

export interface BadgeObject {
  attributes: Attributes
}

export interface Attributes {
  description: string
  imageId: string
  theme: string
}


export interface DifferentiatedUi {
  displayType: string
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails
}

export interface DifferentiatedUiMediaDetails {
  mediaType?: string
}


export interface ExternalRatings {
  aggregatedRating: AggregatedRating
  source?: string
  sourceIconImageId?: string
}

export interface AggregatedRating {
  rating: string
  ratingCount?: string
}



export interface Analytics {
  context: string
}

export interface Cta {
  link: string
  type: string
  text?: string
}

export interface SortConfig {
  key: string
  title: string
  selected?: boolean
  defaultSelection?: boolean
}

export interface Brand {
  text: string
  link: string
}
