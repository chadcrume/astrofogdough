import MastadonLogo from '@assets/social/mastodon-svgrepo-com.svg'
import FriendicaLogo from '@assets/social/friendica-svgrepo-com.svg'
import PeertubeLogo from '@assets/social/peertube-svgrepo-com.svg'
import PixelfedLogo from '@assets/social/pixelfed-svgrepo-com.svg'

export interface ISocialItem {
  name: string; //for use in html/css name, class, and id values
  title: string; //for display page title
  url: string; //should match the page url url path
  icon?: any;
}

const socialItems: ISocialItem[] = [
  { name: "mastadon", title: "Mastadon", url: "#", icon: MastadonLogo },
  { name: "friendica", title: "Friendica", url: "#", icon: FriendicaLogo },
  { name: "peertube", title: "PeerTube", url: "#", icon: PeertubeLogo },
  { name: "pixelfed", title: "Pixelfed", url: "#", icon: PixelfedLogo },
]

export default socialItems

