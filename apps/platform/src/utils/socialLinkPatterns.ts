import { ProfileMatch, SocialLinks } from "social-links";

export const SocialLinkPatterns = (profileName:string, link:string) => {
    let socialLinks = new SocialLinks();
    const discordProfile:ProfileMatch[] = [
        {
            match: '(https?://)?(www.)?discordapp.com/users/({PROFILE_ID})', group: 3,
            pattern: 'https://discordapp.com/users/{PROFILE_ID}'
        },
    ];
    socialLinks.addProfile('discord', discordProfile);

    if (profileName == 'website') {
        let url:URL;
        try {
            url = new URL(link);
        } catch(err) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    } else {
        return socialLinks.isValid(profileName, link);
    }
}