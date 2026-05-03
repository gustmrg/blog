import ui from "./ui.json";

export type Locale = "en" | "pt-br";
export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "pt-br"];

export function getLocale(path: string): Locale {
  if (path.startsWith("/pt-br")) return "pt-br";
  return "en";
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-br" : "en";
}

export function t(locale: Locale, key: keyof typeof ui.en): string {
  const dict = ui[locale] || ui[defaultLocale];
  return dict[key] as string;
}