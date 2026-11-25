export interface CardApiResponse {
  data: Data
}

export interface Data {
  statusMessage: string
  cards: Card[]
}

export interface Card {
  card?: Card2
  groupedCard?: GroupedCard
}

export interface Card2 {
  card: Card3
  relevance?: Relevance
}

export interface Card3 {
  "@type": string
  text?: string
  headerStyling?: HeaderStyling
  tabs?: Tab[]
  info?: Info
  analytics?: Analytics
}

export interface HeaderStyling {
  textColor: string
  textVariant: string
}

export interface Tab {
  id: string
  title: string
}

export interface Info {
  id: string
  name: string
  city: string
  slugs: Slugs
  uniqueId: string
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  costForTwoMessage: string
  cuisines: string[]
  avgRating: number
  feeDetails: FeeDetails
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  sla: Sla
  availability: Availability
  aggregatedDiscountInfo: AggregatedDiscountInfo
  badges: Badges
  slugString: string
  multiOutlet: boolean
  isOpen: boolean
  labels: Label[]
  totalRatings: number
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV2
  type: string
  similarRestaurantAvailable: string
  headerBanner: HeaderBanner
  tradeCampaignHeadersV2: TradeCampaignHeadersV2[]
  generalPurposeInfoListV2: GeneralPurposeInfoListV2[]
  ratingSlab: string
  restaurantCategory: string
  orderabilityCommunication: OrderabilityCommunication
  hasBestsellerItems: boolean
  cartOrderabilityNudgeBanner: CartOrderabilityNudgeBanner
  latLong: string
  backgroundImageOverlayInfo: BackgroundImageOverlayInfo
  featuredSectionInfo: FeaturedSectionInfo
  timingsInfo: TimingsInfo
  phone: string
  postalCode: string
  state: string
}

export interface Slugs {
  restaurant: string
  city: string
}

export interface FeeDetails {
  restaurantId: string
  fees: Fee[]
}

export interface Fee {}

export interface Sla {
  restaurantId: string
  deliveryTime: number
  minDeliveryTime: number
  maxDeliveryTime: number
  lastMileTravel: number
  serviceability: string
  stressFactor: number
  rainMode: string
  longDistance: string
  zoneId: number
  slaString: string
  lastMileTravelString: string
  iconType: string
}

export interface Availability {
  nextCloseTime: string
  visibility: boolean
  opened: boolean
  restaurantClosedMeta: RestaurantClosedMeta
}

export interface RestaurantClosedMeta {}

export interface AggregatedDiscountInfo {
  shortDescriptionList: ShortDescriptionList[]
  descriptionList: DescriptionList[]
  visible: boolean
}

export interface ShortDescriptionList {
  discountType: string
  operationType: string
}

export interface DescriptionList {
  meta: string
  discountType: string
  operationType: string
}

export interface Badges {}

export interface Label {
  title: string
  message: string
}

export interface AggregatedDiscountInfoV2 {
  shortDescriptionList: ShortDescriptionList2[]
  descriptionList: DescriptionList2[]
}

export interface ShortDescriptionList2 {
  discountType: string
  operationType: string
}

export interface DescriptionList2 {
  meta: string
  discountType: string
  operationType: string
}

export interface HeaderBanner {
  url: string
}

export interface TradeCampaignHeadersV2 {
  discountType: string
}

export interface GeneralPurposeInfoListV2 {
  cta: Cta
}

export interface Cta {
  info: Info2
  linkCta: LinkCta
}

export interface Info2 {
  recordings: Recordings
}

export interface Recordings {}

export interface LinkCta {}

export interface OrderabilityCommunication {
  title: Title
  subTitle: SubTitle
  message: Message
  customIcon: CustomIcon
  commsStyling: CommsStyling
}

export interface Title {}

export interface SubTitle {}

export interface Message {}

export interface CustomIcon {}

export interface CommsStyling {}

export interface CartOrderabilityNudgeBanner {
  parameters: Parameters
  presentation: Presentation
}

export interface Parameters {}

export interface Presentation {}

export interface BackgroundImageOverlayInfo {}

export interface FeaturedSectionInfo {}

export interface TimingsInfo {
  status: string
  message: string
  outletTiming: OutletTiming
  styleInfo: StyleInfo
}

export interface OutletTiming {
  infoList: InfoList[]
  title: string
}

export interface InfoList {
  title: string
  subtitle: string
  titleColor: string
  subtitleColor: string
}

export interface StyleInfo {
  titleColor: string
  subtitleColor: string
}

export interface Analytics {}

export interface Relevance {
  type: string
  sectionId: string
}

export interface GroupedCard {
  cardGroupMap: CardGroupMap
}

export interface CardGroupMap {
  REGULAR: Regular
}

export interface Regular {
  cards: Card4[]
}

export interface Card4 {
  card: Card5
}

export interface Card5 {
  card: Card6
  relevance?: Relevance2
}

export interface Card6 {
  "@type": string
  badges?: Badges2
  vegOnlyDetails?: VegOnlyDetails
  topRatedFilter?: TopRatedFilter
  kidsCategoryFilter?: KidsCategoryFilter
  vegFilter?: VegFilter
  nonvegFilter?: NonvegFilter
  title?: string
  categories?: Category[]
  image?: string
  categoryId?: string
  itemCards?: ItemCard2[]
  subtitleSuffix?: SubtitleSuffix2
  header?: Header
  layout?: Layout
  id?: string
  gridElements?: GridElements
  description?: string
  qnas?: Qna[]
  type?: string
  imageId?: string
  text?: string[]
  name?: string
  area?: string
  completeAddress?: string
  interlinkingSeoInfo?: InterlinkingSeoInfo[]
  socialLinks?: SocialLink[]
  androidAppImage?: string
  androidAppLink?: string
  iosAppImage?: string
  iosAppLink?: string
  keywords?: string
}

export interface Badges2 {}

export interface VegOnlyDetails {
  imageId: string
  title: string
  description: string
}

export interface TopRatedFilter {
  attributes: Attributes
}

export interface Attributes {
  displayText: string
}

export interface KidsCategoryFilter {
  attributes: Attributes2
}

export interface Attributes2 {
  displayText: string
  tooltip: Tooltip
}

export interface Tooltip {
  enabled: boolean
  displayText: string
}

export interface VegFilter {
  attributes: Attributes3
}

export interface Attributes3 {
  displayText: string
}

export interface NonvegFilter {
  attributes: Attributes4
}

export interface Attributes4 {
  displayText: string
}

export interface Category {
  title: string
  itemCards: ItemCard[]
  subtitleSuffix: SubtitleSuffix
  categoryId: string
}

export interface ItemCard {
  card: Card7
}

export interface Card7 {
  "@type": string
  info: Info3
  analytics: Analytics2
  hideRestaurantDetails: boolean
}

export interface Info3 {
  id: string
  name: string
  category: string
  description: string
  imageId: string
  inStock: number
  price: number
  variants: Variants
  variantsV2: VariantsV2
  addons?: Addon[]
  itemAttribute: ItemAttribute
  ribbon: Ribbon
  type: string
  itemBadge: ItemBadge
  badgesV2: BadgesV2
  ratings: Ratings
  parentId: string
  menuFilterIds: string[]
  priceComparisonComms: PriceComparisonComms
  instrumentationMetaMap: InstrumentationMetaMap
  isBestseller?: boolean
  imageBadges?: ImageBadge[]
  isVeg?: number
}

export interface Variants {}

export interface VariantsV2 {}

export interface Addon {
  groupId: string
  groupName: string
  choices: Choice[]
  maxAddons: number
  maxFreeAddons: number
  minAddons?: number
}

export interface Choice {
  id: string
  name: string
  inStock: number
  isVeg?: number
  isEnabled: number
  price?: number
}

export interface ItemAttribute {
  vegClassifier: string
}

export interface Ribbon {
  text?: string
  textColor?: string
  topBackgroundColor?: string
  bottomBackgroundColor?: string
}

export interface ItemBadge {}

export interface BadgesV2 {}

export interface Ratings {
  aggregatedRating: AggregatedRating
  ratingsPresentationConfig?: RatingsPresentationConfig
}

export interface AggregatedRating {
  rating?: string
  ratingCount?: string
  ratingCountV2?: string
}

export interface RatingsPresentationConfig {
  bgGradient: BgGradient
  ratingIconColor: string
  ratingTextColor: string
  ratingCountTextColor: string
  ratingFontName: string
  ratingCountFontName: string
}

export interface BgGradient {
  colours: string[]
  gradientDirection: string
}

export interface PriceComparisonComms {}

export interface InstrumentationMetaMap {
  swiggy_listing_price: string
  swiggy_final_price: string
}

export interface ImageBadge {
  imageId: string
}

export interface Analytics2 {}

export interface SubtitleSuffix {}

export interface ItemCard2 {
  card: Card8
}

export interface Card8 {
  "@type": string
  info: Info4
  analytics: Analytics3
  hideRestaurantDetails: boolean
}

export interface Info4 {
  id: string
  name: string
  category: string
  description: string
  imageId: string
  inStock: number
  isVeg?: number
  price: number
  variants: Variants2
  variantsV2: VariantsV22
  addons: Addon2[]
  itemAttribute: ItemAttribute2
  ribbon: Ribbon2
  type: string
  itemBadge: ItemBadge2
  badgesV2: BadgesV22
  ratings: Ratings2
  parentId: string
  menuFilterIds: string[]
  priceComparisonComms: PriceComparisonComms2
  instrumentationMetaMap: InstrumentationMetaMap2
  isBestseller?: boolean
  imageBadges?: ImageBadge2[]
}

export interface Variants2 {}

export interface VariantsV22 {}

export interface Addon2 {
  groupId: string
  groupName: string
  choices: Choice2[]
  maxAddons: number
  maxFreeAddons: number
  minAddons?: number
}

export interface Choice2 {
  id: string
  name: string
  inStock: number
  isVeg?: number
  isEnabled: number
  price?: number
}

export interface ItemAttribute2 {
  vegClassifier: string
}

export interface Ribbon2 {
  text?: string
  textColor?: string
  topBackgroundColor?: string
  bottomBackgroundColor?: string
}

export interface ItemBadge2 {}

export interface BadgesV22 {}

export interface Ratings2 {
  aggregatedRating: AggregatedRating2
  ratingsPresentationConfig?: RatingsPresentationConfig2
}

export interface AggregatedRating2 {
  rating?: string
  ratingCount?: string
  ratingCountV2?: string
}

export interface RatingsPresentationConfig2 {
  bgGradient: BgGradient2
  ratingIconColor: string
  ratingTextColor: string
  ratingCountTextColor: string
  ratingFontName: string
  ratingCountFontName: string
}

export interface BgGradient2 {
  colours: string[]
  gradientDirection: string
}

export interface PriceComparisonComms2 {}

export interface InstrumentationMetaMap2 {
  swiggy_listing_price: string
  swiggy_final_price: string
}

export interface ImageBadge2 {
  imageId: string
}

export interface Analytics3 {}

export interface SubtitleSuffix2 {}

export interface Header {
  title: string
  headerStyling: HeaderStyling2
}

export interface HeaderStyling2 {
  padding: Padding
  titleSize: number
  subtitleSize: number
  titleColor: string
  titleFontName: string
}

export interface Padding {
  left: number
  top: number
  bottom: number
}

export interface Layout {
  rows: number
  columns: number
  horizontalScrollEnabled: boolean
  widgetPadding: WidgetPadding
  containerStyle: ContainerStyle
  scrollBar: ScrollBar
  backgroundColor: string
  widgetBorderStyle: WidgetBorderStyle
  widgetTheme: WidgetTheme
}

export interface WidgetPadding {}

export interface ContainerStyle {
  containerPadding: ContainerPadding
}

export interface ContainerPadding {
  left: number
  right: number
  bottom: number
}

export interface ScrollBar {
  scrollThumbColor: string
  scrollTrackColor: string
  width: number
  height: number
  scrollStyling: ScrollStyling
}

export interface ScrollStyling {
  padding: Padding2
}

export interface Padding2 {
  top: number
  bottom: number
}

export interface WidgetBorderStyle {
  top: Top
  bottom: Bottom
  left: Left
  right: Right
}

export interface Top {
  color: string
  height: number
}

export interface Bottom {
  color: string
  height: number
}

export interface Left {}

export interface Right {}

export interface WidgetTheme {
  defaultMode: DefaultMode
  darkMode: DarkMode
}

export interface DefaultMode {
  backgroundColour: string
  theme: string
  themeVariant: string
}

export interface DarkMode {
  backgroundColour: string
  theme: string
  themeVariant: string
}

export interface GridElements {
  infoWithStyle: InfoWithStyle
}

export interface InfoWithStyle {
  "@type": string
  restaurants: Restaurant[]
  widgetType: string
  style: Style
}

export interface Restaurant {
  info: Info5
  analytics: Analytics4
  cta: Cta3
}

export interface Info5 {
  id: string
  name: string
  slugs: Slugs2
  cloudinaryImageId: string
  locality: string
  areaName: string
  costForTwo: string
  cuisines: string[]
  avgRating: number
  veg?: boolean
  parentId: string
  avgRatingString: string
  totalRatingsString: string
  adTrackingId: string
  sla: Sla2
  availability: Availability2
  badges: Badges3
  isOpen: boolean
  aggregatedDiscountInfoV2: AggregatedDiscountInfoV22
  badgesV2: BadgesV23
  cta: Cta2
  differentiatedUi: DifferentiatedUi
  reviewsSummary: ReviewsSummary
  displayType: string
  restaurantOfferPresentationInfo: RestaurantOfferPresentationInfo
  externalRatings: ExternalRatings
  ratingsDisplayPreference: string
  campaignId: string
  priceComparisonComms: PriceComparisonComms3
  isNewlyOnboarded?: boolean
}

export interface Slugs2 {
  city: string
}

export interface Sla2 {
  deliveryTime: number
  lastMileTravel: number
  serviceability: string
  slaString: string
  lastMileTravelString: string
  iconType: string
}

export interface Availability2 {
  nextCloseTime: string
  opened: boolean
}

export interface Badges3 {
  imageBadges?: ImageBadge3[]
}

export interface ImageBadge3 {
  imageId: string
  description: string
}

export interface AggregatedDiscountInfoV22 {}

export interface BadgesV23 {
  entityBadges: EntityBadges
}

export interface EntityBadges {
  textBased: TextBased
  imageBased: ImageBased
  textExtendedBadges: TextExtendedBadges
}

export interface TextBased {}

export interface ImageBased {
  badgeObject?: BadgeObject[]
}

export interface BadgeObject {
  attributes: Attributes5
}

export interface Attributes5 {
  theme: string
  imageId: string
  description: string
}

export interface TextExtendedBadges {}

export interface Cta2 {
  link: string
  text: string
  type: string
}

export interface DifferentiatedUi {
  displayType: string
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails
}

export interface DifferentiatedUiMediaDetails {
  mediaType: string
}

export interface ReviewsSummary {}

export interface RestaurantOfferPresentationInfo {}

export interface ExternalRatings {
  aggregatedRating: AggregatedRating3
}

export interface AggregatedRating3 {
  rating: string
}

export interface PriceComparisonComms3 {}

export interface Analytics4 {
  screenName: string
  context: string
  objectValue: string
  impressionObjectName: string
  clickObjectName: string
}

export interface Cta3 {
  link: string
  text: string
  type: string
}

export interface Style {}

export interface Qna {
  question: string
  answer: string
}

export interface InterlinkingSeoInfo {
  title: string
  links: Link[]
}

export interface Link {
  label: string
  url: string
}

export interface SocialLink {
  label: string
  url: string
}

export interface Relevance2 {
  type: string
  sectionId: string
}
