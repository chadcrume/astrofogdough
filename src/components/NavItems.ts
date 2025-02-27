export interface INavItem {
  name: string; //for use in html/css name, class, and id values
  route: string; //should match the page route url path
  title: string; //for display page title
}

const navItems: INavItem[] = [
  { name: "about", route: "/about", title: "About" },
  { name: "portfolio", route: "/portfolio", title: "Portfolio" },
  { name: "contact", route: "/contact", title: "Contact" },
]

export default navItems

export function getNavItemFromUrlPath(urlPath: string): (INavItem | undefined) {

  const page = Array.from(navItems) // First make a copy of the array before sorting
    .sort(
      // Second, sort the navItems by route to find closest match in reverse order
      (a, b) => {
        const nameA = a.route.toLowerCase(); // ignore case
        const nameB = b.route.toLowerCase(); // ignore case
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        // names must be equal
        return 0;
      })
    .reduce<INavItem | undefined>(
      // Third, find first closest match
      (previous, current) => {
        if (current.route == urlPath) return current
        if (urlPath.includes(current.route)) return current
        return previous
      }, undefined);

  return page;
}