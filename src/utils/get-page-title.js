import defaultSettings from '@/settings'

const title = defaultSettings.title || '易订维修'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
