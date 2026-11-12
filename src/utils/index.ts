export function createPageUrl(pageName: string): string {
  const routes: Record<string,string> = { Gateway:'/', Surveillance:'/surveillance', Archive:'/archive', Lockdown:'/lockdown' };
  return routes[pageName] ?? `/${pageName.toLowerCase()}`;
}
